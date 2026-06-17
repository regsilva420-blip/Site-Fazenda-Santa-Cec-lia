import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, X } from "lucide-react";
import MediaReveal from "./MediaReveal";

interface CasaSedePageProps {
  onBack: () => void;
}

// Absolute direct URLs from Supabase for Section 3 (Casa Sede)
const img1 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-03/01-imagem_sec-03.jpg";
const img2 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-03/02-imagem_sec-03.jpg";
const img3 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-03/03-imagem_sec-03.jpg";
const img4 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-03/04-imagem_sec-03.jpg";
const img5 = "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/saiba-mais-sec-03/05-imagem_sec-03.jpg";

export default function CasaSedePage({ onBack }: CasaSedePageProps) {
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
          href="/#secao-03"
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
          &rarr; Casa Sede
        </div>
      </header>

      {/* Main Container Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-24 space-y-20">
        
        {/* --- BLOCOS COM IMAGEM (Renderizar Primeiro) --- */}

        {/* Bloco 1 */}
        <section className="space-y-6">
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
            >
              Casa Sede
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm md:text-base text-gray-300 font-light leading-relaxed"
            >
              Fundada em 1930 e reformada entre 2020 e 2021, a residência mantém sua arquitetura tradicional preservada, combinando o charme das grandes propriedades históricas com o conforto e funcionalidade das atualizações modernas.
            </motion.p>
          </div>
          <MediaReveal 
            type="image" 
            src={img1} 
            alt="Casa Sede" 
            className="-mx-6 md:mx-0 md:rounded-xl cursor-pointer w-screen max-w-none md:w-full md:max-w-full"
            onClick={() => setSelectedImage(img1)} 
          />
        </section>

        {/* Bloco 2 */}
        <section className="space-y-6 pt-6 border-t border-white/5">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Área Social
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Sala de estar e jantar independentes, para criar memórias e acolher com conforto.
            </p>
          </div>
          <MediaReveal 
            type="image" 
            src={img2} 
            alt="Área Social" 
            className="-mx-6 md:mx-0 md:rounded-xl cursor-pointer w-screen max-w-none md:w-full md:max-w-full"
            onClick={() => setSelectedImage(img2)} 
          />
        </section>

        {/* Bloco 3 */}
        <section className="space-y-6 pt-6 border-t border-white/5">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Acomodações
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Sete quartos que oferecem privacidade, atendidos por dois banheiros completos.
            </p>
          </div>
          <MediaReveal 
            type="image" 
            src={img3} 
            alt="Acomodações" 
            className="-mx-6 md:mx-0 md:rounded-xl cursor-pointer w-screen max-w-none md:w-full md:max-w-full"
            onClick={() => setSelectedImage(img3)} 
          />
        </section>

        {/* Bloco 4 */}
        <section className="space-y-6 pt-6 border-t border-white/5">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Contemplação
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Duas varandas charmosas que oferecem o espaço perfeito para relaxar e desfrutar da vista.
            </p>
          </div>
          <MediaReveal 
            type="image" 
            src={img4} 
            alt="Contemplação" 
            className="-mx-6 md:mx-0 md:rounded-xl cursor-pointer w-screen max-w-none md:w-full md:max-w-full"
            onClick={() => setSelectedImage(img4)} 
          />
        </section>

        {/* Bloco 5 */}
        <section className="space-y-6 pt-6 border-t border-white/5">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Cozinha de Fazenda
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
              Um espaço autêntico e apaixonante equipado com despensa, armários, cooktop, bancadas, fornalha e o tradicional fogão à lenha.
            </p>
          </div>
          <MediaReveal 
            type="image" 
            src={img5} 
            alt="Cozinha de Fazenda" 
            className="-mx-6 md:mx-0 md:rounded-xl cursor-pointer w-screen max-w-none md:w-full md:max-w-full"
            onClick={() => setSelectedImage(img5)} 
          />
        </section>

        {/* --- BLOCOS APENAS COM TEXTO (Renderizar no Final) --- */}

        {/* Bloco 6 */}
        <section className="space-y-3 pt-12 border-t border-white/10">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Home Office / Negócios
          </h2>
          <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
            Escritório privativo, ideal para gestão da propriedade ou trabalho remoto.
          </p>
        </section>

        {/* Bloco 7 */}
        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Praticidade
          </h2>
          <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
            Lavanderia ampla com excelente ventilação e uma sala de ferramentas dedicada à organização e manutenção.
          </p>
        </section>

        {/* Bloco 8 */}
        <section className="space-y-3 pt-6 border-t border-white/5">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Estacionamento
          </h2>
          <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
            A propriedade conta com garagem coberta para um veículo, além de um amplo estacionamento descoberto com capacidade para receber confortavelmente os automóveis de visitantes para eventos e familiares.
          </p>
        </section>

        {/* Bottom footer back block */}
        <div className="flex flex-col items-center pt-16 border-t border-white/10">
          <motion.a
            href="/#secao-03"
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
              alt="Visualização ampliada do cômodo ou mapa"
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
