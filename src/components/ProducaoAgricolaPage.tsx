import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, X } from "lucide-react";

interface ProducaoAgricolaPageProps {
  onBack: () => void;
}

const videoSrc = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-06/video-01-sec-06.mp4";
const img1 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-06/06_MIDIA02.jpg";
const img2 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-06/06_MIDIA03.jpg";

export default function ProducaoAgricolaPage({ onBack }: ProducaoAgricolaPageProps) {
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
          href="/#secao-06"
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
          &rarr; Produção Agrícola
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
            Tecnologia e Versatilidade
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3.5xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Produção Agrícola
          </motion.h1>
        </section>

        {/* --- BLOCO DE MÍDIA 1 (VÍDEO) --- */}
        <section className="-mx-6 md:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
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

        {/* --- BLOCOS APENAS COM TEXTO (Renderizar abaixo do vídeo) --- */}
        <section className="space-y-12 pt-8 border-t border-white/10">
          
          {/* Tópico 1 */}
          <div className="space-y-2">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Estufa Agrícola de Alta Tecnologia (2.200 m²)
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Estufa profissional de última geração, com engenharia de precisão para máxima produtividade e controle climático em todas as estações.
            </p>
          </div>

          {/* Tópico 2 */}
          <div className="space-y-2 pt-6 border-t border-white/5">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Estrutura Premium
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Estrutura metálica galvanizada com cortinas em telas móveis frontais e laterais.
            </p>
          </div>

          {/* Tópico 3 */}
          <div className="space-y-2 pt-6 border-t border-white/5">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Tecnologia de Cobertura
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Filme de polietileno tricapa difusor de luz (150 micras), com tratamento anti-UV.
            </p>
          </div>

          {/* Tópico 4 */}
          <div className="space-y-2 pt-6 border-t border-white/5">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Proteção Fotométrica
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Telas Chromatinet Leno 20% vermelha para otimizar o espectro de luz.
            </p>
          </div>

          {/* Tópico 5 */}
          <div className="space-y-2 pt-6 border-t border-white/5">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Automação
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Sistema de irrigação totalmente automatizado, com precisão no manejo hídrico.
            </p>
          </div>

          {/* Tópico 6 */}
          <div className="space-y-2 pt-6 border-t border-white/5">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Localização Ideal
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Em frente à Reserva de Mata Atlântica, garantindo clima ideal para as plantas.
            </p>
          </div>

          {/* Tópico 7 */}
          <div className="space-y-2 pt-6 border-t border-white/5">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Potencial Comercial
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Até 120.000 kg de tomates ou 20.000 kg de morangos por ano.
            </p>
          </div>

        </section>

        {/* --- BLOCO DE MÍDIA 2 E 3 (IMAGENS FINAIS) --- */}
        <section className="space-y-8 pt-8 border-t border-white/10">
          
          {/* Imagem 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative overflow-hidden -mx-6 md:mx-0 md:rounded-xl aspect-video bg-neutral-900/40 cursor-pointer group"
            onClick={() => setSelectedImage(img1)}
          >
            <img
              src={img1}
              alt="Estufa e produção agrícola"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Imagem 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative overflow-hidden -mx-6 md:mx-0 md:rounded-xl aspect-video bg-neutral-900/40 cursor-pointer group"
            onClick={() => setSelectedImage(img2)}
          >
            <img
              src={img2}
              alt="Detalhes do controle de plantio e automação"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>

        </section>

        {/* Bottom footer back block */}
        <div className="flex flex-col items-center pt-16 border-t border-white/10">
          <motion.a
            href="/#secao-06"
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
              alt="Visualização ampliada da produção agrícola"
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
