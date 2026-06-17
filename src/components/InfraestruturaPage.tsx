import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface InfraestruturaPageProps {
  onBack: () => void;
}

const videoSrc1 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-08/sec-08-saiba-mais-01.mp4";
const videoSrc2 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-08/sec-08-saiba-mais-02.mp4";

export default function InfraestruturaPage({ onBack }: InfraestruturaPageProps) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-[#070808] text-white font-sans antialiased relative selection:bg-gold selection:text-dark">
      {/* Top Header without interactive Back button to strictly obey back button placement rules */}
      <header className="px-6 py-8 md:px-12 max-w-4xl mx-auto flex items-center justify-end">
        <div className="text-xs font-semibold uppercase tracking-widest text-gold/60 font-mono">
          &rarr; Infraestrutura
        </div>
      </header>

      {/* Main Container Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-24 space-y-16">
        
        {/* --- BLOCO DE CABEÇALHO E TEXTOS (Renderizar no topo) --- */}
        <section className="space-y-6">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest text-gold font-mono"
            >
              Infraestrutura
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3.5xl md:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Autossuficiência e Segurança
            </motion.h1>
          </div>

          <div className="space-y-12 pt-8 border-t border-white/10">
            {/* Tópico 1 */}
            <div className="space-y-2">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Sistemas Prontos para Eventos
              </h2>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                Instalações hidráulicas e elétricas dimensionadas para alta demanda, internet e segurança.
              </p>
            </div>

            {/* Tópico 2 */}
            <div className="space-y-2 pt-6 border-t border-white/5">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Abastecimento Garantido
              </h2>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                Poço artesiano outorgado e captação direta em mina d'água protegida.
              </p>
            </div>

            {/* Tópico 3 */}
            <div className="space-y-2 pt-6 border-t border-white/5">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Charme Histórico
              </h2>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                Moinho de pedra autêntico e antiga usina hidrelétrica com roda d'água — patrimônio com potencial de restauração.
              </p>
            </div>
          </div>
        </section>

        {/* --- BLOCOS DE MÍDIA (Renderizar após os textos) --- */}
        <section className="space-y-12">
          {/* [Mídia 1 - Vídeo Oficial] */}
          <div className="-mx-6 md:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
              className="relative overflow-hidden md:rounded-xl aspect-video bg-neutral-900/40"
            >
              <video
                src={videoSrc1}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-[1.03]"
              />
            </motion.div>
          </div>

          {/* [Mídia 2 - Placeholder do Vídeo 02] */}
          <div className="-mx-6 md:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
              className="relative overflow-hidden md:rounded-xl aspect-[9/16] md:aspect-video bg-neutral-900"
            >
              <video
                src={videoSrc2}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-[1.03]"
              />
            </motion.div>
          </div>
        </section>

        {/* --- BOTÃO VOLTAR NO FINAL ABSOLUTO DA PÁGINA --- */}
        <div className="flex flex-col items-center pt-16 border-t border-white/10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold hover:text-white transition-colors cursor-pointer bg-transparent border-t-0 p-4"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Voltar para o Imóvel
          </motion.button>
        </div>

      </main>
    </div>
  );
}
