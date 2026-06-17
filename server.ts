import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import pkg from "pg";

dotenv.config();

const { Pool } = pkg;
const app = express();
const PORT = 3000;

// Lazy initialize PostgreSQL Pool to prevent crash if DATABASE_URL is not set
let pgPool: any = null;

async function getPgPool() {
  if (!pgPool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      console.warn("[Database Warning] DATABASE_URL is not set. Data will only persist in-memory.");
      return null;
    }
    try {
      pgPool = new Pool({
        connectionString,
        ssl: {
          rejectUnauthorized: false,
        },
      });
      // Initial test connection & table setup
      const client = await pgPool.connect();
      await client.query(`
        CREATE TABLE IF NOT EXISTS contacts (
          id VARCHAR(50) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          phone VARCHAR(100) NOT NULL,
          interest VARCHAR(255) NOT NULL,
          message TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `);
      client.release();
      console.log("[Database] Supabase PostgreSQL successfully connected and 'contacts' table is verified.");
    } catch (err: any) {
      console.error("[Database Error] Failed to initialize Supabase connection pool:", err.message);
      pgPool = null;
      return null;
    }
  }
  return pgPool;
}

app.use(express.json());

// Initialize GoogleGenAI conditionally to avoid crash if variable is not loaded.
let aiInstance: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required.");
    }
    aiInstance = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiInstance;
}

// System Prompt with detailed Knowledge Base about Fazenda Santa Cecília
const FAZENDA_KNOWLEDGE = `
Você é a "Cecília", a concierge virtual exclusiva e assistente de vendas de alto padrão da espetacular Fazenda Santa Cecília, localizada em Patrocínio Paulista - SP (Região Serrana da paulista/Franca).
Seu objetivo é encantar potenciais investidores e compradores de luxo fornecendo respostas detalhadas, polidas, calorosas, porém profissionais e elegantes.

Aqui estão os dados oficiais e precisos da propriedade:
- Localização: Patrocínio Paulista, São Paulo (a cerca de 950 metros de altitude, excelente para clima ameno, ar puro e terra de alta fertilidade).
- Área Total: 63 hectares de terras ricas e bem planejadas.
- Meio Ambiente: Preservação abundante da Mata Atlântica nativa. Reserva legal registrada e áreas de relevante interesse ecológico com trilhas para exploração, ricas em biodiversidade e potencial para compensação ambiental ou créditos de carbono.
- Recursos Hídricos: Um verdadeiro tesouro. Possui 3 nascente de água mineral puríssima e cristalina dentro da propriedade, um ribeirão volumoso perene cruzando os limites das terras, 2 lindas represas/lagos perfeitos para esportes aquáticos leves, pesca ou banho, além de outorga de água e sistema de bombeamento automatizado.
- Casa Sede (450 m²): Mansão de campo projetada em estilo rústico-contemporâneo contemporâneo de alto padrão (porteira fechada negociável).
  - 7 quartos amplos (sendo 4 suítes master completas com aquecimento solar nos banheiros).
  - Living magnífico com pé direito duplo integrado em 3 ambientes com lareira central de pedra rústica.
  - Cozinha gourmet integrada com fogão a lenha moderno, bancadas de granito e utensílios importados de alta gama.
  - Varanda panorâmica acolhedora que contorna a propriedade, oferecendo redes e vista exclusiva do pôr do sol nas colinas.
  - Área gourmet integrada externa com churrasqueira a bafo, forno de pizza profissional e espaço para fogueira (fire pit).
- Lazer e Convivência:
  - Maravilhosa piscina de borda infinita aquecida com deck molhado revestido em pedra Hijau natural.
  - Quadra de tênis oficial em saibro com iluminação profissional de LED.
  - Pomar orgânico com dezenas de variedades de frutas nativas e exóticas.
  - SPA privativo equipado com sauna úmida e seca.
  - Estábulos modernos (baias) para até 8 cavalos com pista de treinamento.
- Produção Agrícola (Estufa de 2.200 m²):
  - Estufa de última geração com controle microclimático computadorizado, sistema de fertirrigação hidropônica de precisão, ideal para cultivo de hortaliças gourmet, flores especiais ou viveiro de café especial de alto rendimento.
- Pecuária:
  - Pastagens completamente rotacionadas divididas em piquetes com cochos de água regulados.
  - Curral moderno equipado com balança eletrônica, tronco de contenção pneumático e embarcadouro seguro.
  - Instalação moderna de ordenha mecânica com capacidade de resfriamento rápida em tanques térmicos de aço inox.
- Maquinários e Equipamentos:
  - Galpão industrial com pé direito alto para guarda de frotas e implementos.
  - Trator de alta potência John Deere equipado com diversos implementos (roçadeira, arado, distribuidor de calcário), além de carretas utilitárias e pulverizadores.
  - Transformador de energia trifásico de grande capacidade com gerador de emergência automático.
  - Oficina completa integrada com ferramental pesado.

Diretrizes para as respostas:
1. Responda sempre em Português de forma refinada, atenciosa e hospitaleira. Trate o visitante como um investidor VIP interessado em uma propriedade de altíssimo padrão.
2. Seja precisa com as informações. Se o cliente perguntar algo sobre faturamento, preço exato ou agendamento de visitas presenciais, explique que o "valor é sob consulta" e incentive o cliente a preencher o formulário de contato integrado no app ou solicitar uma ligação direta do corretor VIP para agendar e formatar uma proposta personalizada.
3. Use formatação limpa e elegante, como tópicos fáceis de ler.
4. Mantenha as respostas focadas e de tamanho moderado, valorizando a exclusividade e o profissionalismo.
`;

app.post("/api/chat", async (req: Request, res: Response): Promise<void> => {
  try {
    const { message, history } = req.body;
    if (!message) {
      res.status(400).json({ error: "Message is required." });
      return;
    }

    const ai = getGeminiClient();

    // Prepare contents array for chat API
    // If chat structure is needed, we can pass formatted history
    const formattedContents: any[] = [];

    // System instructions passed in config
    const config = {
      systemInstruction: FAZENDA_KNOWLEDGE,
      temperature: 0.7,
    };

    if (history && Array.isArray(history)) {
      history.forEach((msg: any) => {
        formattedContents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text || msg.content || "" }],
        });
      });
    }

    // Append current message
    formattedContents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: config,
    });

    const text = response.text || "Desculpe, não consegui processar sua solicitação no momento.";
    res.json({ text });
  } catch (error: any) {
    console.error("Gemini API Error in /api/chat:", error);
    res.status(500).json({
      error: "Ocorreu um erro ao processar sua resposta com a Inteligência Artificial.",
      details: error.message,
    });
  }
});

// A simple contact/brochure request storage endpoint (mock database in memory)
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  message?: string;
  createdAt: string;
}
const submissions: ContactSubmission[] = [];

app.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const { name, email, phone, interest, message } = req.body;
    if (!name || !email || !phone || !interest) {
      res.status(400).json({ error: "Todos os campos obrigatórios devem ser preenchidos." });
      return;
    }

    const newSubmission: ContactSubmission = {
      id: Math.random().toString(36).substring(2, 11),
      name,
      email,
      phone,
      interest,
      message,
      createdAt: new Date().toISOString(),
    };

    submissions.push(newSubmission);
    console.log("New contact submission captured in-memory:", newSubmission);

    // Save to Supabase PostgreSQL database if available
    const pool = await getPgPool();
    if (pool) {
      try {
        await pool.query(
          "INSERT INTO contacts (id, name, email, phone, interest, message, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7)",
          [
            newSubmission.id,
            newSubmission.name,
            newSubmission.email,
            newSubmission.phone,
            newSubmission.interest,
            newSubmission.message || null,
            newSubmission.createdAt,
          ]
        );
        console.log("[Database] Captured and saved submission successfully in Supabase.");
      } catch (dbErr: any) {
        console.error("[Database Error] Failed to save contact submission to PostgreSQL:", dbErr.message);
      }
    }

    res.json({
      success: true,
      message: "Seus dados foram enviados com sucesso! Nosso corretor exclusivo entrará em contato em breve.",
      submissionId: newSubmission.id,
    });
  } catch (err: any) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Erro ao processar contato." });
  }
});

// Serve frontend with Vite integration
const startServer = async () => {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve production static assets compiled inside dist
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Fazenda Santa Cecília Dashboard] Server running on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error("Failure starting the app server:", err);
});
