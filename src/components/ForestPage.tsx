import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import MediaReveal from "./MediaReveal";

interface ForestPageProps {
  onBack: () => void;
}

// Absolute direct URLs from client's public server
const media1 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-01/01-video-01-sec-01.mp4";
const media2 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-01/02-video-02-sec-01.mp4";
const media3 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-01/03-imagem-03-sec-01.jpg";
const media4 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-01/04-imagem-04-sec-01.jpg";
const media5 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-01/05-imagem-05-sec-01.jpg";
const media6 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-01/06-06-imagem-03-sec-01.jpg";

// Programmatic URLs for the Lightbox from 1 to 40
const galleryImages = Array.from({ length: 40 }, (_, i) => {
  const index = i + 1;
  const fileName = `GALERIA (${index}).jpg`;
  return `https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/galeria-do-site/${encodeURIComponent(fileName)}`;
});

export default function ForestPage({ onBack }: ForestPageProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Handle keyboard events for lightbox navigation
  useEffect(() => {
    if (!isGalleryOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsGalleryOpen(false);
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen]);

  // Lock body scroll of the app when lightbox is active
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isGalleryOpen]);

  return (
    <div className="min-h-screen bg-[#070808] text-white font-sans antialiased relative selection:bg-gold selection:text-dark">
      {/* Upper breadcrumb navigation bar */}
      <header className="px-6 py-8 md:px-12 max-w-4xl mx-auto flex items-center justify-between">
        <a
          href="/#secao-01"
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
          &rarr; Reserva de Biodiversidade
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
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            O encontro entre a <br className="hidden md:inline" /> Mata Atlântica e o Cerrado.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl"
          >
            Um dos mais importantes remanescentes naturais do nordeste paulista - mata nativa preservada, fonte de biodiversidade, água e equilíbrio para toda a região.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl"
          >
            A Reserva da Fazenda Santa Cecília é um corredor ecológico indispensável para a preservação ambiental. Com a presença de diferentes tipos de solos, se caracteriza como um mosaico único entre o Cerrado e a Mata Atlântica, proporcionando alta diversidade ecológica e biológica.
          </motion.p>
        </section>

        {/* 1. Main Immersive Upward Facing Trees Cover Image (Video) */}
        <MediaReveal type="video" src={media1} alt="Copas das árvores da floresta" />

        {/* Dynamic elegant back button block aligned centered */}
        <div className="flex flex-col items-center py-6">
          <motion.a
            href="/#secao-01"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-[10px] tracking-widest uppercase font-bold text-gray-200 hover:text-white transition-all cursor-pointer rounded-none"
          >
            <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform text-gold" />
            &lt; Voltar
          </motion.a>
        </div>

        {/* Subsection 01: Árvores nativas */}
        <section className="space-y-4 pt-4 border-t border-white/5">
          <h2 className="font-serif text-2xl md:text-3.5xl font-semibold text-white tracking-tight leading-snug max-w-2xl">
            Serviços da Floresta
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl">
            A Reserva da Fazenda Santa Cecília desempenha papel fundamental na conservação dos recursos hídricos regionais e funciona como um reservatório de biomassa, contribuindo para o armazenamento de carbono e equilíbrio climático.
          </p>
        </section>

        {/* Subsection 02: Fauna Refúgio (Video + content) */}
        <section className="space-y-6 pt-10 border-t border-white/5">
          <MediaReveal type="video" src={media2} alt="Aves e fauna silvestre" />
          
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3.5xl font-semibold text-white tracking-tight leading-snug">
              Fauna e Flora
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl">
              Com mais de 170 espécies de plantas registradas, a reserva possui árvores centenárias e ameaçadas e raras, como o jequitibá-rosa, a palmeira-juçara  e a peroba-rosa.
            </p>
          </div>
        </section>

        {/* Subsection 03: Trilhas e ecoturismo (Image + content) */}
        <section className="space-y-6 pt-10 border-t border-white/5">
          <MediaReveal type="image" src={media3} alt="Trilhas e caminhos na mata" />

          <div className="space-y-3">
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl">
              Refúgio para a fauna, a reserva é lar de animais icônicos e ameaçados como o papagaio-verdadeiro, o lobo-guará e o tamanduá-bandeira.
            </p>
          </div>
        </section>

        {/* Subsection 04: Crédito de Carbono (Image + content) */}
        <section className="space-y-6 pt-10 border-t border-white/5">
          <MediaReveal type="image" src={media4} alt="Folhas verdes tropicais" />

          <div className="space-y-3">
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl" id="aves-p">
              Mais de 180 espécies de aves encontram na reserva um local seguro para abrigo, alimentação e reprodução
            </p>

            {/* Espaço para imagem */}
            <div className="my-6" id="abelhas-img-space">
              <MediaReveal type="image" src={media5} alt="Abelha polinizadora em flor nativa" />
            </div>

            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl" id="abelhas-p">
              Já foram registradas 12 espécies de abelhas nativas, polinizadores que aumentam a produtividade das lavouras locais.
            </p>

            {/* Espaço para imagem de pesquisa */}
            <div className="my-6" id="pesquisa-img-space">
              <MediaReveal type="image" src={media6} alt="Estudos e pesquisa na floresta" />
            </div>

            <h2 className="font-serif text-2xl md:text-3.5xl font-semibold text-white tracking-tight leading-snug pt-2" id="pesquisa-h2">
              Pesquisa
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl" id="pesquisa-p">
              Utilizada como laboratório científico de campo por universidades, gerando conhecimento para o futuro da conservação.
            </p>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <div className="py-16 border-t border-white/5 space-y-6" id="galeria-fotos">
          <div className="flex flex-col items-center space-y-2 mb-8">
            <span className="font-mono text-[10px] tracking-widest uppercase text-gold/60">
              Registro Fotográfico
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight text-center">
              Galeria da Floresta
            </h2>
            <p className="text-xs text-gray-400 font-light max-w-sm text-center">
              Explore o acervo completo de fotografias da área de conservação. Clique em qualquer imagem para abrir a visualização em tela cheia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 max-w-6xl mx-auto px-4">
            {galleryImages.map((imgUrl, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsGalleryOpen(true);
                }}
                className="aspect-square relative overflow-hidden bg-white/5 border border-white/5 cursor-pointer group"
                id={`galeria-item-${index}`}
              >
                <img
                  src={imgUrl}
                  alt={`Foto da Galeria ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gold bg-black/85 px-3 py-1.5 border border-gold/20">
                    Ver Foto
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom footer back block */}
        <div className="flex flex-col items-center pt-16 border-t border-white/5">
          <motion.a
            href="/#secao-01"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 border border-white/10 hover:border-gold/30 bg-gold/5 hover:bg-gold hover:text-dark px-10 py-4 text-xs tracking-widest uppercase font-black text-gold transition-all duration-300 cursor-pointer rounded-none"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Voltar para o Imóvel
          </motion.a>
        </div>
      </main>

      {/* Lightbox Photo Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between select-none"
          >
            {/* Header with tools */}
            <div className="absolute top-0 inset-x-0 p-6 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
              <span className="font-mono text-xs text-gray-400">
                {currentImageIndex + 1} / {galleryImages.length}
              </span>
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="p-3 text-gray-400 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
                aria-label="Fechar galeria"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Stage with Image & Navigation */}
            <div className="flex-1 flex items-center justify-between px-4 md:px-12 relative">
              {/* Left Navigation Arrow */}
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
                }
                className="absolute left-4 md:left-8 z-10 p-3 md:p-4 text-gray-400 hover:text-white hover:bg-white/15 transition-colors cursor-pointer rounded-full bg-black/20"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              {/* Main Image Stage */}
              <div className="w-full h-full flex items-center justify-center p-4">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  src={galleryImages[currentImageIndex]}
                  alt={`Imagem da galeria ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[80vh] md:max-h-[82vh] object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Navigation Arrow */}
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
                }
                className="absolute right-4 md:right-8 z-10 p-3 md:p-4 text-gray-400 hover:text-white hover:bg-white/15 transition-colors cursor-pointer rounded-full bg-black/20"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </button>
            </div>

            {/* Footer containing Thumbnails navigation on desktop */}
            <div className="hidden md:flex justify-start md:justify-center gap-2 p-6 overflow-x-auto bg-gradient-to-t from-black/80 to-transparent max-w-full scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-12 h-12 flex-shrink-0 transition-all duration-300 rounded overflow-hidden border-2 ${
                    currentImageIndex === idx ? "border-gold scale-105" : "border-transparent opacity-40 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

