import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, X } from "lucide-react";

interface PecuariaPageProps {
  onBack: () => void;
}

const mainVideo = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-07/01-aerea-curral.mp4";
const imgCurral = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-07/02-img-curral.jpg";
const videoAprisco = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-07/03-aprisco.mp4";
const videoCoelheira = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-07/04-coelheira.mp4";
const videoPastagens = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-07/05-drone_pasto.mp4";

export default function PecuariaPage({ onBack }: PecuariaPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Handle keyboard events (Escape to close lightbox)
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Lock body scroll of the app when lightbox is active
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-[#070808] text-white font-sans antialiased relative selection:bg-gold selection:text-dark">
      {/* Upper breadcrumb navigation bar */}
      <header className="px-6 py-8 md:px-12 max-w-4xl mx-auto flex items-center justify-between">
        <a
          href="/#secao-07"
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
          &rarr; Pecuária
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
            Estrutura para animais
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3.5xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Pecuária
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-3xl"
          >
            Estruturas versáteis, prontas para o manejo de diferentes espécies, da produção comercial à vivência rural.
          </motion.p>
        </section>

        {/* --- MÍDIA DE DESTAQUE --- */}
        <section className="-mx-6 md:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
            className="relative overflow-hidden md:rounded-xl aspect-video bg-neutral-900/40"
          >
            <video
              src={mainVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-[1.03]"
            />
          </motion.div>
        </section>

        {/* --- BLOCOS DE TÓPICOS COM MÍDIA --- */}
        <section className="pt-8 border-t border-white/10 space-y-16">
          
          {/* [Bloco 1] */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Curral
              </h3>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                Espaço robusto para manejo seguro, vacinação e trato de bovinos.
              </p>
            </div>
            <div className="-mx-6 md:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden md:rounded-xl aspect-video bg-neutral-900/40 cursor-pointer group"
                onClick={() => setSelectedImage(imgCurral)}
              >
                <img
                  src={imgCurral}
                  alt="Curral para manejo de bovinos"
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

          {/* [Bloco 2] */}
          <div className="space-y-4 pt-12 border-t border-white/5">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Aprisco
              </h3>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                Instalação protegida para criação e manejo de ovinos e caprinos.
              </p>
            </div>
            <div className="-mx-6 md:mx-0">
              <div className="relative overflow-hidden md:rounded-xl bg-neutral-900/40">
                <video
                  src={videoAprisco}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto aspect-auto md:aspect-video object-cover"
                />
              </div>
            </div>
          </div>

          {/* [Bloco 3] */}
          <div className="space-y-4 pt-12 border-t border-white/5">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Coelheira
              </h3>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                Espaço organizado para cunicultura.
              </p>
            </div>
            <div className="-mx-6 md:mx-0">
              <div className="relative overflow-hidden md:rounded-xl bg-neutral-900/40">
                <video
                  src={videoCoelheira}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto aspect-auto md:aspect-video object-cover"
                />
              </div>
            </div>
          </div>

          {/* [Bloco 4] */}
          <div className="space-y-4 pt-12 border-t border-white/5">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Pastagens
              </h3>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                10 hectares de pastagem de excelente qualidade, formados em terra fértil de pastana para o manejo de gado de corte, leite ou criação de equinos.
              </p>
            </div>
            <div className="-mx-6 md:mx-0">
              <div className="relative overflow-hidden md:rounded-xl bg-neutral-900/40">
                <video
                  src={videoPastagens}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto aspect-auto md:aspect-video object-cover"
                />
              </div>
            </div>
          </div>

        </section>

        {/* --- BLOCOS APENAS COM TEXTO (Final da página) --- */}
        <section className="space-y-12 pt-16 border-t border-white/10">
          
          {/* [Bloco 5] */}
          <div className="space-y-2">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Sala de Ordenha
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Espaço dedicado para atividade leiteira e produção de laticínios.
            </p>
          </div>

          {/* [Bloco 6] */}
          <div className="space-y-2 pt-6 border-t border-white/5">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Galinheiro
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Estrutura segura para produção de ovos caipiras e aves de corte.
            </p>
          </div>

        </section>

        {/* Bottom footer back block */}
        <div className="flex flex-col items-center pt-16 border-t border-white/10">
          <motion.a
            href="/#secao-07"
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

      {/* Full Screen Image Zoom Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center cursor-zoom-out p-4 md:p-8"
          >
            {/* Elegant close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer"
              aria-label="Fechar ampliação"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Centered Image */}
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              src={selectedImage}
              alt="Visualização ampliada da Pecuária"
              className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain select-none"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
