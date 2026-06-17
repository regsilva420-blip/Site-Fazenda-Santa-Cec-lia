import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, X } from "lucide-react";

interface MaquinariosPageProps {
  onBack: () => void;
}

export default function MaquinariosPage({ onBack }: MaquinariosPageProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-[#070808] text-white font-sans antialiased relative selection:bg-gold selection:text-dark">
      {/* Upper breadcrumb navigation bar */}
      <header className="px-6 py-8 md:px-12 max-w-4xl mx-auto flex items-center justify-between">
        <a
          href="/#secao-09"
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
          &rarr; Maquinários
        </div>
      </header>

      {/* Main Container Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-24 space-y-16">
        
        {/* --- BLOCO DE CABEÇALHO --- */}
        <section className="space-y-6">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest text-gold font-mono"
            >
              Operação porteira fechada
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3.5xl md:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Maquinários e Equipamentos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-base text-gray-300 font-light leading-relaxed pt-2"
            >
              A propriedade é entregue com uma frota de maquinários e ferramentas essenciais para a manutenção de pastos, gramados, lavouras e segurança contra sinistros.
            </motion.p>
          </div>
        </section>

        {/* --- IMAGEM DE DESTAQUE (MÍDIA 1) --- */}
        <section className="-mx-6 md:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
            className="relative overflow-hidden md:rounded-xl bg-neutral-900/40"
          >
            <img
              src="https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-09/09_MIDIA01.jpg"
              alt="Maquinários de Destaque"
              onClick={() => setActiveImage("https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-09/09_MIDIA01.jpg")}
              className="w-full h-auto aspect-auto md:aspect-video object-cover transition-all duration-700 ease-in-out hover:scale-105 cursor-zoom-in"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* --- BLOCOS DE CONTEÚDO --- */}
        <section className="space-y-16 pt-8 border-t border-white/10">
          
          {/* [Bloco 1] */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Patrulha Mecanizada
              </h2>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                Trator agrícola com arado, grade niveladora e roçadeira.
              </p>
            </div>
            
            <div className="-mx-6 md:mx-0">
              <div className="relative overflow-hidden md:rounded-xl bg-neutral-900/40">
                <img
                  src="https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-09/09_MIDIA02.jpg"
                  alt="Patrulha Mecanizada"
                  onClick={() => setActiveImage("https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-09/09_MIDIA02.jpg")}
                  className="w-full h-auto aspect-auto md:aspect-video object-cover transition-all duration-700 ease-in-out hover:scale-105 cursor-zoom-in"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* [Bloco 2] */}
          <div className="flex flex-col space-y-6 pt-12 border-t border-white/5">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Paisagismo
              </h2>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                Trator cortador de grama a gasolina e duas roçadeiras manuais.
              </p>
            </div>
            
            <div className="-mx-6 md:mx-0">
              <div className="relative overflow-hidden md:rounded-xl bg-neutral-900/40">
                <img
                  src="https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-09/09_MIDIA03.jpg"
                  alt="Paisagismo"
                  onClick={() => setActiveImage("https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-09/09_MIDIA03.jpg")}
                  className="w-full h-auto aspect-auto md:aspect-video object-cover transition-all duration-700 ease-in-out hover:scale-105 cursor-zoom-in"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* [Bloco 3] */}
          <div className="flex flex-col space-y-6 pt-12 border-t border-white/5">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Segurança Patrimonial
              </h2>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                Tanque agrícola de combate a incêndio para proteção da propriedade.
              </p>
            </div>
            
            <div className="-mx-6 md:mx-0">
              <div className="relative overflow-hidden md:rounded-xl bg-neutral-900/40">
                <img
                  src="https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-09/09_MIDIA04.jpg"
                  alt="Segurança Patrimonial"
                  onClick={() => setActiveImage("https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-09/09_MIDIA04.jpg")}
                  className="w-full h-auto aspect-auto md:aspect-video object-cover transition-all duration-700 ease-in-out hover:scale-105 cursor-zoom-in"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </section>

        {/* --- BOTÃO VOLTAR NO FINAL ABSOLUTO DA PÁGINA (APÓS A ÚLTIMA FOTO) --- */}
        <div className="flex flex-col items-center pt-16 border-t border-white/10">
          <motion.a
            href="/#secao-09"
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

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 focus:outline-none transition-colors"
              onClick={() => setActiveImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={activeImage} 
              alt="Visualização ampliada" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
