import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, X } from "lucide-react";
import MediaReveal from "./MediaReveal";

interface PropertyAreaPageProps {
  onBack: () => void;
}

// Absolute direct URLs from Supabase for Section 2
const media1 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-02/02_MIDIA01.jpg";
const media2 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-02/02_MIDIA02.png";

export default function PropertyAreaPage({ onBack }: PropertyAreaPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Handle keyboard events for escape key to close lightbox
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
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Imóvel
        </button>
        <div className="text-xs font-semibold uppercase tracking-widest text-gold/60 font-mono">
          &rarr; Área da Propriedade
        </div>
      </header>

      {/* Main Container Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-24 space-y-12">
        {/* Bloco 1: Intro & Image 1 */}
        <section className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Área da propriedade
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl"
          >
            Com uma área total de 63 hectares disponíveis para venda, a fazenda se destaca pelo equilíbrio entre conservação ecológica, lazer e áreas produtivas prontas para gerar receita. Toda a propriedade está em estrita conformidade com a legislação ambiental vigente, garantindo uma transação jurídica segura e sem pendências.
          </motion.p>
        </section>

        {/* Imagem 1 */}
        <MediaReveal 
          type="image" 
          src={media1} 
          alt="Área da propriedade" 
          className="cursor-pointer rounded-xl w-full"
          onClick={() => setSelectedImage(media1)} 
        />

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

        {/* Bloco 2: Image 2 & Split Specs */}
        <section className="space-y-8 pt-6 border-t border-white/5">
          <MediaReveal 
            type="image" 
            src={media2} 
            alt="Infraestrutura e repartições do terreno" 
            className="cursor-pointer rounded-xl w-full"
            onClick={() => setSelectedImage(media2)} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Spec 1 */}
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-semibold text-white tracking-tight">
                Área Agricultável
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                10 hectares de terras férteis prontas para pecuária, cultivo de lavouras, agroflorestas ou expansão agrícola
              </p>
            </div>

            {/* Spec 2 */}
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-semibold text-white tracking-tight">
                Sede e área de lazer
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                2 hectares totalmente estruturados para a vivência, bem-estar, paisagismo e infraestrutura social da propriedade
              </p>
            </div>

            {/* Spec 3 */}
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-semibold text-white tracking-tight">
                Área de Preservação Permanente
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                10 hectares dedicados à proteção dos recursos hídricos.
              </p>
            </div>

            {/* Spec 4 */}
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-semibold text-white tracking-tight">
                Reserva Legal
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                41 hectares de mata nativa preservada, funcionando como um valioso ativo ambiental.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom footer back block */}
        <div className="flex flex-col items-center pt-16 border-t border-white/5">
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
              alt="Visualização ampliada do mapa"
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
