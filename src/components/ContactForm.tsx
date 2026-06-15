import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Phone, Clock, FileCheck2, AlertCircle, ChevronDown } from "lucide-react";

interface ContactFormProps {
  initialSubject?: string;
  onSuccessClose?: () => void;
}

export default function ContactForm({ initialSubject = "Geral - Fazenda Santa Cecília", onSuccessClose }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(initialSubject);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !interest) {
      setErrorMsg("Por favor, preencha todos os campos obrigatórios (*).");
      return;
    }

    try {
      setLoading(true);
      setErrorMsg("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, interest, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        // Clear inputs
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        
        if (onSuccessClose) {
          setTimeout(() => {
            onSuccessClose();
          }, 3500);
        }
      } else {
        setErrorMsg(data.error || "Erro desconhecido ao enviar formulário.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Ocorreu uma falha na conexão de rede. Verifique seu servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-dark-surface border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl text-white">
      <AnimatePresence mode="wait">
        {!success ? (
          <motion.form
            key="contact-form-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Contato Exclusivo</span>
              <h3 className="font-serif text-2xl font-bold text-white tracking-tight mt-1">Solicitar Pasta Completa</h3>
              <p className="text-xs text-gray-400 mt-1 font-light leading-relaxed">
                Preencha seus dados para receber a brochure digital HD do imóvel, laudo de recursos hídricos, matrícula atualizada e agendar uma assessoria personalizada com nosso corretor VIP.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 rounded bg-red-950/20 border border-red-500/20 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block">Nome Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block">E-mail *</label>
                <input
                  type="email"
                  required
                  placeholder="Ex: investidor@luxury.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block">Telefone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: (11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all"
                />
              </div>

              {/* Interest Selector */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block">Área de Principal Interesse *</label>
                <div className="relative">
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/15 text-sm text-white appearance-none focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all cursor-pointer"
                  >
                    <option value="Geral - Fazenda Santa Cecília">Geral - Aquisição da Fazenda</option>
                    <option value="Serviços da Floresta">Preservação & Créditos de Carbono</option>
                    <option value="Estufa Agrícola Climatizada">Produção Agrícola (Estufas)</option>
                    <option value="Complexo de Pecuária">Pecuária Automação (Gado Leiteiro)</option>
                    <option value="Casa Sede & Lazer">Lazer, Mansão & Spa Privado</option>
                    <option value="Recursos Hídricos">Recursos Hídricos & Outorgas</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block">Detalhes Adicionais ou Horário para Ligação (Opcional)</label>
              <textarea
                rows={3}
                placeholder="Ex de preferência: Gostaria de receber a matrícula HD ou agendar visita para a próxima sexta-feira à tarde."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded bg-white/5 border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:bg-white/[0.08] transition-all resize-none"
              />
            </div>

            {/* Submission triggers */}
            <div className="pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-mono">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Atendimento VIP em até 15 minutos úteis.</span>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 rounded bg-gold text-dark text-xs uppercase tracking-widest font-bold hover:bg-gold-light active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold/20 ${loading ? "opacity-65 cursor-not-allowed" : ""}`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-dark shrink-0" />
                    Enviar Proposta Exclusiva
                  </>
                )}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="contact-form-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 text-center space-y-4"
          >
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/5">
              <FileCheck2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-tight">Proposta Registrada!</h3>
              <p className="text-sm text-gray-300 mt-2 max-w-md mx-auto font-light leading-relaxed">
                Agradecemos seu contato. Sua pasta completa da <strong>Fazenda Santa Cecília</strong> está sendo separada e um corretor VIP exclusivo entrará em contato via telefone ou WhatsApp em instantes.
              </p>
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
              Região Serrana • Assessoria Imobiliária de Alto Padrão
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
