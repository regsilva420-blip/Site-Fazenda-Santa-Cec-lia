import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Volume2, Shield } from "lucide-react";

interface ForestPageProps {
  onBack: () => void;
}

export default function ForestPage({ onBack }: ForestPageProps) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-[#070808] text-white font-sans antialiased relative selection:bg-gold selection:text-dark">
      {/* Upper breadcrumb navigation bar */}
      <header className="px-6 py-8 md:px-12 max-w-4xl mx-auto flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Imóvel
        </button>
        <div className="text-xs font-semibold uppercase tracking-widest text-gold/60 font-mono">
          &rarr; Serviços
        </div>
      </header>

      {/* Main Container Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-24 space-y-12">
        {/* Title and main introductory copy */}
        <section className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Serviços da <br className="hidden md:inline" /> Floresta
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl"
          >
            A Mata Atlântica da fazenda funciona como um ecossistema vivo — gerando recursos, atraindo fauna silvestre e garantindo serviços ambientais de alto valor para o proprietário.
          </motion.p>
        </section>

        {/* 1. Main Immersive Upward Facing Trees Cover Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[50vh] md:h-[60vh] rounded-none overflow-hidden relative"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY30spNZiLlmScVAJw6ZkSysxAxxGNa8OmlBUIITk_0-vhk6VgpNCe2SZ-c0hSMZOXwLRZFCkTT7WR61q7pkEVXr5NKM8bYan16EgGyWcHOhR7MqWEiBVp8gAWg1EZptH-cqcChRuBBWLFv8HjXstJ3CYuaJrTs1miixtz0O4phhQeyItWIe9ueA-_vsU6k0cwiyTj28-F9kA2p2UPy17hP_FGqSMXN4_cY5sqodU4rZ0tfS5f-yQxGc8RVSqq6B1lsplg1rYncLLQk7o"
            alt="Copas das árvores da floresta"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* Dynamic elegant back button block aligned centered */}
        <div className="flex flex-col items-center py-6">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="group flex items-center gap-2 border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-[10px] tracking-widest uppercase font-bold text-gray-200 hover:text-white transition-all cursor-pointer rounded-none"
          >
            <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform text-gold" />
            &lt; Voltar
          </motion.button>
        </div>

        {/* Subsection 01: Árvores nativas */}
        <section className="space-y-4 pt-4 border-t border-white/5">
          <h2 className="font-serif text-2xl md:text-3.5xl font-semibold text-white tracking-tight leading-snug max-w-2xl">
            Mais de 80 espécies de árvores nativas
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl">
            Levantamento florístico identificou 84 espécies arbóreas, incluindo ipê-amarelo, cedro, jequitibá e canela. A floresta em estágio avançado de regeneração garante serviços ecossistêmicos permanentes.
          </p>
        </section>

        {/* Subsection 02: Fauna Refúgio (Image + content) */}
        <section className="space-y-6 pt-10 border-t border-white/5">
          <div className="w-full h-[30vh] md:h-[45vh] overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1552728089-57bdde30ebd3?auto=format&fit=crop&q=80&w=1200"
              alt="Fauna exótica Mata Atlântica"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9C2A6] font-semibold font-sans block">
              02 — FAUNA
            </span>
            <h2 className="font-serif text-2xl md:text-3.5xl font-semibold text-white tracking-tight leading-snug">
              Refúgio para a fauna silvestre
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl">
              Registros fotográficos confirmam a presença de queixada, paca, tatu-galinha e mais de 60 espécies de aves, incluindo o tucano-toco e a jacutinga — espécies ameaçadas de extinção.
            </p>
          </div>
        </section>

        {/* Subsection 03: Trilhas e ecoturismo (Image + content) */}
        <section className="space-y-6 pt-10 border-t border-white/5">
          <div className="w-full h-[30vh] md:h-[45vh] overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200"
              alt="Trilhas e caminhos na mata"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9C2A6] font-semibold font-sans block">
              03 — ECOTURISMO
            </span>
            <h2 className="font-serif text-2xl md:text-3.5xl font-semibold text-white tracking-tight leading-snug">
              Trilhas e observação de pássaros
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl">
              Mais de 3 km de trilhas demarcadas percorrem a reserva, com mirantes naturais e pontos de observação de aves. Alto potencial para turismo de natureza, retiros e atividades de educação ambiental.
            </p>
          </div>
        </section>

        {/* Subsection 04: Crédito de Carbono (Image + content) */}
        <section className="space-y-6 pt-10 border-t border-white/5">
          <div className="w-full h-[30vh] md:h-[45vh] overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200"
              alt="Folhas verdes tropicais"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9C2A6] font-semibold font-sans block">
              04 — CRÉDITOS DE CARBONO
            </span>
            <h2 className="font-serif text-2xl md:text-3.5xl font-semibold text-white tracking-tight leading-snug">
              Ativo ambiental certificável
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl">
              A biomassa florestal e a reserva legal permanente qualificam a propriedade para programas de créditos de carbono e pagamentos por serviços ambientais, gerando receita adicional sem intervenção.
            </p>
          </div>
        </section>

        {/* Bottom footer back block */}
        <div className="flex flex-col items-center pt-16 border-t border-white/5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="group flex items-center gap-2 border border-white/10 hover:border-gold/30 bg-gold/5 hover:bg-gold hover:text-dark px-10 py-4 text-xs tracking-widest uppercase font-black text-gold transition-all duration-300 cursor-pointer rounded-none"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Voltar para o Imóvel
          </motion.button>
        </div>
      </main>
    </div>
  );
}
