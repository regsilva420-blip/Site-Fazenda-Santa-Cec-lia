import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface RecursosHidricosPageProps {
  onBack: () => void;
}

const videoSrc = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-05/05-video-01-sec-05.mp4";

export default function RecursosHidricosPage({ onBack }: RecursosHidricosPageProps) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-[#070808] text-white font-sans antialiased relative selection:bg-gold selection:text-dark">
      {/* Upper breadcrumb navigation bar */}
      <header className="px-6 py-8 md:px-12 max-w-4xl mx-auto flex items-center justify-between">
        <a
          href="/#secao-05"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Imóvel
        </a>
        <div className="text-xs font-semibold uppercase tracking-widest text-gold/60 font-mono">
          &rarr; Recursos Hídricos
        </div>
      </header>

      {/* Main Container Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-24 space-y-16">
        
        {/* --- BLOCO DE CABEÇALHO --- */}
        <section className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-gold font-mono"
          >
            Riqueza e Autossuficiência
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3.5xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Recursos Hídricos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-3xl"
          >
            Um dos maiores tesouros da fazenda é sua impressionante abundância em recursos hídricos naturais — segurança hídrica estratégica e enorme potencial para lazer, paisagismo e atividades agroecológicas.
          </motion.p>
        </section>

        {/* --- BLOCO DE MÍDIA --- */}
        <section className="-mx-6 md:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
            className="relative overflow-hidden md:rounded-xl bg-neutral-900/40"
          >
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto aspect-auto md:aspect-video object-cover transition-all duration-700 ease-in-out hover:scale-[1.03]"
            />
          </motion.div>
        </section>

        {/* --- BLOCOS APENAS COM TEXTO --- */}
        <section className="space-y-12 pt-8 border-t border-white/10">
          
          {/* Tópico 1 */}
          <div className="space-y-2">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Nascentes Próprias
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Fontes de água pura que nascem dentro da propriedade.
            </p>
          </div>

          {/* Tópico 2 */}
          <div className="space-y-2 pt-6 border-t border-white/5">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Represa de 450 m²
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Espelho d'água imponente, perfeito para contemplação ou piscicultura. Represa de 450 m²
            </p>
          </div>

          {/* Tópico 3 */}
          <div className="space-y-2 pt-6 border-t border-white/5">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Riacho Natural
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Curso d'água que corta a propriedade, trazendo o som da natureza.
            </p>
          </div>

          {/* Tópico 4 */}
          <div className="space-y-2 pt-6 border-t border-white/5">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Abastecimento garantido
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Poço artesiano outorgado e captação direta em mina d'água protegida.
            </p>
          </div>

        </section>

        {/* Bottom footer back block */}
        <div className="flex flex-col items-center pt-16 border-t border-white/10">
          <motion.a
            href="/#secao-05"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold hover:text-white transition-colors cursor-pointer bg-transparent border-t-0 p-4"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Voltar para o Imóvel
          </motion.a>
        </div>
      </main>
    </div>
  );
}
