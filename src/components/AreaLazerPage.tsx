import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, X } from "lucide-react";

interface AreaLazerPageProps {
  onBack: () => void;
}

const video1 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-04/04-video-01-sec-04.mp4";
const video2 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-04/04-video-02-sec-04.mp4";
const img3 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-04/3.jpg";
const img4 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-04/4.jpg";
const img5 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-04/5.jpg";
const img6 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-04/6.jpg";

export default function AreaLazerPage({ onBack }: AreaLazerPageProps) {
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
          href="/#secao-04"
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
          &rarr; Lazer e Convivência
        </div>
      </header>

      {/* Main Container Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-24 space-y-20">
        
        {/* Bloco 1 - VÍDEO */}
        <section className="space-y-6">
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
            >
              Área de Lazer e Convivência
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm md:text-base text-gray-300 font-light leading-relaxed"
            >
              Um verdadeiro oásis verde, planejado detalhadamente para proporcionar momentos inesquecíveis para toda a família e amigos.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative overflow-hidden -mx-6 md:mx-0 md:rounded-xl bg-neutral-900/40"
          >
            <video
              src={video1}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto aspect-auto md:aspect-video object-cover transition-all duration-700 ease-in-out hover:scale-105"
            />
          </motion.div>
        </section>

        {/* Bloco 2 - VÍDEO */}
        <section className="space-y-6 pt-6 border-t border-white/5">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Campo de Futebol
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Gramado excelente, mantido para o lazer de adultos e crianças.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative overflow-hidden -mx-6 md:mx-0 md:rounded-xl bg-neutral-900/40"
          >
            <video
              src={video2}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto aspect-auto md:aspect-video object-cover transition-all duration-700 ease-in-out hover:scale-105"
            />
          </motion.div>
        </section>

        {/* Bloco 3 - IMAGEM */}
        <section className="space-y-6 pt-6 border-t border-white/5">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Espaço Gourmet
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Equipado com forno de pizza, cozinha semi-industrial e churrasqueira.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative overflow-hidden -mx-6 md:mx-0 md:rounded-xl aspect-video bg-neutral-900/40 cursor-pointer group"
            onClick={() => setSelectedImage(img3)}
          >
            <img
              src={img3}
              alt="Espaço Gourmet"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* Bloco 4 - IMAGEM */}
        <section className="space-y-6 pt-6 border-t border-white/5">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Horta e Pomar Orgânico
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Cultive o frescor na sua casa! Horta já em plena produção e pomar com diversas árvores frutíferas adultas, colhidas direto do pé para a mesa todos os dias.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative overflow-hidden -mx-6 md:mx-0 md:rounded-xl aspect-video bg-neutral-900/40 cursor-pointer group"
            onClick={() => setSelectedImage(img4)}
          >
            <img
              src={img4}
              alt="Horta e Pomar Orgânico"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* Bloco 5 - IMAGEM */}
        <section className="space-y-6 pt-6 border-t border-white/5">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Quiosque com redário e deck ao ar livre
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Instalação rústica em quiosque, perfeito para meditação, apoiar as redes e descanso dos moradores.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative overflow-hidden -mx-6 md:mx-0 md:rounded-xl aspect-video bg-neutral-900/40 cursor-pointer group"
            onClick={() => setSelectedImage(img5)}
          >
            <img
              src={img5}
              alt="Quiosque com redário e deck"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* Bloco 6 - IMAGEM */}
        <section className="space-y-6 pt-6 border-t border-white/5">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Quiosque à Margem do Riacho
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              O refúgio perfeito, ideal para relaxar ao som da água corrente.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative overflow-hidden -mx-6 md:mx-0 md:rounded-xl aspect-video bg-neutral-900/40 cursor-pointer group"
            onClick={() => setSelectedImage(img6)}
          >
            <img
              src={img6}
              alt="Quiosque à Margem do Riacho"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* Bottom footer back block */}
        <div className="flex flex-col items-center pt-16 border-t border-white/10">
          <motion.a
            href="/#secao-04"
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
              alt="Visualização ampliada do espaço de lazer"
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
