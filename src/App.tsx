import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, X, Sparkles, MapPin, Droplets, Compass, ArrowDown, Map, 
  Landmark, Phone, Users, Shield, BookOpen, Volume2, VolumeX, Mail,
  MessageCircle
} from "lucide-react";
import { FeaturesData, FeatureCard } from "./types";
import FeatureModal from "./components/FeatureModal";
import InteractiveMap from "./components/InteractiveMap";
import InvestmentCalculator from "./components/InvestmentCalculator";
import ForestPage from "./components/ForestPage";
import PropertyAreaPage from "./components/PropertyAreaPage";
import CasaSedePage from "./components/CasaSedePage";
import AreaLazerPage from "./components/AreaLazerPage";
import RecursosHidricosPage from "./components/RecursosHidricosPage";
import ProducaoAgricolaPage from "./components/ProducaoAgricolaPage";
import PecuariaPage from "./components/PecuariaPage";
import InfraestruturaPage from "./components/InfraestruturaPage";

export default function App() {
  const [viewingForest, setViewingForest] = useState(false);
  const [viewingPropertyArea, setViewingPropertyArea] = useState(false);
  const [viewingCasaSede, setViewingCasaSede] = useState(false);
  const [viewingAreaLazer, setViewingAreaLazer] = useState(false);
  const [viewingRecursosHidricos, setViewingRecursosHidricos] = useState(false);
  const [viewingProducaoAgricola, setViewingProducaoAgricola] = useState(false);
  const [viewingPecuaria, setViewingPecuaria] = useState(false);
  const [viewingInfraestrutura, setViewingInfraestrutura] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureCard | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactSubject, setContactSubject] = useState<string>("Geral - Fazenda Santa Cecília");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Handle transparent to dark header blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToHome = (sectionId: string) => {
    setViewingForest(false);
    setViewingPropertyArea(false);
    setViewingCasaSede(false);
    setViewingAreaLazer(false);
    setViewingRecursosHidricos(false);
    setViewingProducaoAgricola(false);
    setViewingPecuaria(false);
    setViewingInfraestrutura(false);
    
    window.location.hash = sectionId;
    
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  // Support direct hash scrolling when mounting or toggling detail pages closed
  useEffect(() => {
    const isViewingAnyDetail = 
      viewingForest || 
      viewingPropertyArea || 
      viewingCasaSede || 
      viewingAreaLazer || 
      viewingRecursosHidricos || 
      viewingProducaoAgricola || 
      viewingPecuaria || 
      viewingInfraestrutura;

    if (!isViewingAnyDetail) {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#secao-")) {
        const id = hash.replace("#", "");
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 150);
      }
    }
  }, [
    viewingForest, 
    viewingPropertyArea, 
    viewingCasaSede, 
    viewingAreaLazer, 
    viewingRecursosHidricos, 
    viewingProducaoAgricola, 
    viewingPecuaria, 
    viewingInfraestrutura
  ]);

  const handleLearnMore = (id: string) => {
    const found = FeaturesData.find(f => f.id === id);
    if (found) {
      if (id === "floresta") {
        setViewingForest(true);
      } else if (id === "terreno") {
        setViewingPropertyArea(true);
      } else if (id === "sede") {
        setViewingCasaSede(true);
      } else if (id === "lazer") {
        setViewingAreaLazer(true);
      } else if (id === "hidricos") {
        setViewingRecursosHidricos(true);
      } else if (id === "agricola") {
        setViewingProducaoAgricola(true);
      } else if (id === "pecuaria") {
        setViewingPecuaria(true);
      } else if (id === "infraestrutura") {
        setViewingInfraestrutura(true);
      } else {
        setSelectedFeature(found);
      }
    }
  };

  const handleOpenContact = (topic: string) => {
    setContactSubject(topic);
    const contactSection = document.getElementById("agendar-visita");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  if (viewingForest) {
    return (
      <div className="min-h-screen bg-[#070808] text-white selection:bg-gold selection:text-dark">
        <ForestPage onBack={() => handleBackToHome("secao-01")} />
      </div>
    );
  }

  if (viewingPropertyArea) {
    return (
      <div className="min-h-screen bg-[#070808] text-white selection:bg-gold selection:text-dark">
        <PropertyAreaPage onBack={() => handleBackToHome("secao-02")} />
      </div>
    );
  }

  if (viewingCasaSede) {
    return (
      <div className="min-h-screen bg-[#070808] text-white selection:bg-gold selection:text-dark">
        <CasaSedePage onBack={() => handleBackToHome("secao-03")} />
      </div>
    );
  }

  if (viewingAreaLazer) {
    return (
      <div className="min-h-screen bg-[#070808] text-white selection:bg-gold selection:text-dark">
        <AreaLazerPage onBack={() => handleBackToHome("secao-04")} />
      </div>
    );
  }

  if (viewingRecursosHidricos) {
    return (
      <div className="min-h-screen bg-[#070808] text-white selection:bg-gold selection:text-dark">
        <RecursosHidricosPage onBack={() => handleBackToHome("secao-05")} />
      </div>
    );
  }

  if (viewingProducaoAgricola) {
    return (
      <div className="min-h-screen bg-[#070808] text-white selection:bg-gold selection:text-dark">
        <ProducaoAgricolaPage onBack={() => handleBackToHome("secao-06")} />
      </div>
    );
  }

  if (viewingPecuaria) {
    return (
      <div className="min-h-screen bg-[#070808] text-white selection:bg-gold selection:text-dark">
        <PecuariaPage onBack={() => handleBackToHome("secao-07")} />
      </div>
    );
  }

  if (viewingInfraestrutura) {
    return (
      <div className="min-h-screen bg-[#070808] text-white selection:bg-gold selection:text-dark">
        <InfraestruturaPage onBack={() => handleBackToHome("secao-08")} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1111] text-white font-sans antialiased relative selection:bg-gold selection:text-dark">
      
      {/* 1. Luxurious Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
        scrolled 
          ? "bg-dark/90 backdrop-blur-md border-b border-white/5 py-3" 
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}>
        {/* Brand/Owner Indicator */}
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-0.5">Propriedade</p>
          <p className="text-xs font-semibold tracking-wider flex items-center gap-1.5 uppercase text-white/95">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            À VENDA
          </p>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-widest font-semibold text-gray-300">
          <button onClick={() => scrollToSection("detalhes")} className="hover:text-gold transition-colors cursor-pointer">Recursos</button>
          <button onClick={() => scrollToSection("agendar-visita")} className="hover:text-gold transition-colors cursor-pointer text-gold">Agendar Visita</button>
        </nav>

        {/* Action Call & Menu Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleOpenContact("Contato Geral - Via Top Header")}
            className="hidden sm:inline-flex px-3.5 py-1.5 rounded bg-gold/10 border border-gold/30 hover:bg-gold hover:text-dark text-[9px] uppercase tracking-widest font-bold text-gold transition-all cursor-pointer"
          >
            Falar com Assessor VIP
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer"
            aria-label="Ativar Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* 1.1 Side Drawer Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop cover */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
            />
            {/* Nav sheet panel */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-dark-surface border-l border-white/10 z-50 p-6 shadow-2xl flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white tracking-wide">Menu de Navegação</h4>
                    <p className="text-[9px] uppercase tracking-wide text-gold mt-1">Fazenda Santa Cecília</p>
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                <div className="h-px bg-white/10 w-full" />

                <div className="space-y-3 flex flex-col">
                  {[
                    { label: "Reserva de Biodiversidade", id: "secao-01" },
                    { label: "Informações do Terreno", id: "secao-02" },
                    { label: "Casa Sede", id: "secao-03" },
                    { label: "Lazer e Convivência", id: "secao-04" },
                    { label: "Recursos Hídricos", id: "secao-05" },
                    { label: "Produção Agrícola", id: "secao-06" },
                    { label: "Pecuária", id: "secao-07" },
                    { label: "Infraestrutura", id: "secao-08" }
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={`/#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        const el = document.getElementById(item.id);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                        window.location.hash = item.id;
                      }}
                      className="w-full text-left px-3 py-2 rounded text-xs text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer font-light flex items-center justify-between group/item"
                    >
                      <span className="group-hover/item:text-gold transition-all">{item.label}</span>
                      <span className="text-[10px] text-gold font-mono">&rarr;</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom sales broker support information card */}
              <div className="p-4 rounded bg-white/5 border border-white/5 space-y-3">
                <p className="text-[9px] uppercase tracking-widest text-[#777] font-bold">ASSESSORIA DIRETA</p>
                <div className="space-y-2.5">
                  <a 
                    href="https://wa.me/5511994053670?text=Ol%C3%A1%21%20Acessei%20o%20site%20da%20Fazenda%20Santa%20Cec%C3%ADlia%20e%20gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-left py-1 group/contact hover:opacity-95 transition-opacity"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-gold shrink-0 transition-transform group-hover/contact:scale-110" />
                      <div>
                        <p className="text-[11px] font-semibold text-white/95 group-hover/contact:text-gold transition-colors">
                          Cristiane Lopes Kaulich
                        </p>
                        <p className="text-[9px] text-[#888] font-serif italic leading-none mt-0.5">
                          Proprietária
                        </p>
                      </div>
                    </div>
                  </a>

                  <div className="h-px bg-white/5 w-full" />

                  <a 
                    href="https://wa.me/5516982521234?text=Ol%C3%A1%21%20Acessei%20o%20site%20da%20Fazenda%20Santa%20Cec%C3%ADlia%20e%20gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-left py-1 group/contact hover:opacity-95 transition-opacity"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-gold shrink-0 transition-transform group-hover/contact:scale-110" />
                      <div>
                        <p className="text-[11px] font-semibold text-white/95 group-hover/contact:text-gold transition-colors">
                          Jez Bernardinelli
                        </p>
                        <p className="text-[9px] text-[#888] font-serif italic leading-none mt-0.5">
                          Corretor
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 2. Hero Presentation Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* Background MP4 Video with Image poster fallback */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/hero-video/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Dark luxury gradient overlay cover */}
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        {/* Content Box */}
        <div className="absolute top-[50%] bottom-[10%] left-0 right-0 px-6 max-w-7xl mx-auto flex flex-col items-start justify-center text-left z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 w-full"
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              Patrocínio Paulista - SP
            </span>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-none tracking-tight text-white max-w-2xl">
              Fazenda <br /> Santa Cecília
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-2">
              <div className="text-sm text-gray-300 font-light tracking-wide">
                <span className="text-white font-semibold font-serif italic">Um santuário de vida</span> no nordeste paulista
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating audio status label */}
        <div className="absolute bottom-8 right-6 z-20 hidden md:block">
          <p className="text-[10px] text-gray-400 font-mono tracking-wider bg-black/40 px-2.5 py-1.5 rounded border border-white/5 flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-gold shrink-0 animate-pulse" />
            Som Ambiente Desativado
          </p>
        </div>
      </section>

      {/* 2. DIVISOR "EXPLORAR" */}
      <section id="detalhes" className="py-12 px-6 bg-[#111111] border-b border-white/5">
        <div className="text-center relative max-w-xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 mb-3 w-full">
            <div className="h-[1px] w-20 bg-white/10" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9C2A6] font-semibold font-sans">
              Explorar
            </span>
            <div className="h-[1px] w-20 bg-white/10" />
          </div>
          <p className="text-sm text-gray-400 font-light">
            Conheça cada detalhe da propriedade
          </p>
        </div>
      </section>

      {/* 3. ESTRUTURA DAS SEÇÕES (Cards Panorâmicos Edge-to-Edge) */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-1 bg-black overflow-hidden">
        {FeaturesData.map((feature) => (
          <motion.article 
            key={feature.id}
            id={
              feature.id === "floresta" ? "secao-01" :
              feature.id === "terreno" ? "secao-02" :
              feature.id === "sede" ? "secao-03" :
              feature.id === "lazer" ? "secao-04" :
              feature.id === "hidricos" ? "secao-05" :
              feature.id === "agricola" ? "secao-06" :
              feature.id === "pecuaria" ? "secao-07" :
              feature.id === "infraestrutura" ? "secao-08" :
              feature.id === "maquinario" ? "secao-09" : undefined
            }
            onClick={() => handleLearnMore(feature.id)}
            className="relative h-[35vh] md:h-[45vh] lg:h-[55vh] min-h-[250px] w-full overflow-hidden group cursor-pointer bg-dark"
          >
            {/* Background image covering 100% */}
            {feature.id === "lazer" ? (
              <img 
                src="https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/capa-04/04-capa.jpg" 
                alt={feature.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 group-hover:scale-105"
              />
            ) : feature.id === "hidricos" ? (
              <img 
                src="https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/capa-sec-05/capa-sec-05.jpg" 
                alt={feature.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 group-hover:scale-105"
              />
            ) : feature.id === "pecuaria" ? (
              <img 
                src="https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/capa-sec-07/capa-sec-07.jpg" 
                alt={feature.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 group-hover:scale-105"
              />
            ) : feature.id === "infraestrutura" ? (
              <img 
                src="https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/capa-sec-08/capa_sec_08-3.jpg" 
                alt={feature.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 group-hover:scale-105"
              />
            ) : (
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000";
                }}
              />
            )}
            
            {/* Elegant dark overlay gradient */}
            <div className="absolute inset-0 bg-black/35 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity group-hover:opacity-90" />

            {/* Content box with absolute overlay */}
            <div className="absolute inset-0 pb-8 px-6 md:px-12 flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end gap-4 relative z-10 w-full h-full">
              
              {/* Left side: Category & Section Title */}
              <div className="space-y-1 md:space-y-2 text-left">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#C9C2A6] font-semibold font-sans block">
                  {feature.category}
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Right side: Elegant border action trigger button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation(); // prevent double modal triggering
                  handleLearnMore(feature.id);
                }}
                className="border border-white/30 px-5 py-2.5 text-[10px] tracking-widest font-semibold uppercase text-white rounded-none flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/55 transition duration-300 pointer-events-auto cursor-pointer whitespace-nowrap"
              >
                Saiba Mais
                <span className="text-[12px] transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </button>

            </div>
          </motion.article>
        ))}
      </div>

      {/* 8. Footer */}
      <footer id="agendar-visita" className="py-16 px-6 text-center bg-[#070808] border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl italic text-gray-300 tracking-wide">
            Fazenda Santa Cecília
          </h2>
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
            PATROCÍNIO PAULISTA - SP
          </p>

          <div className="pt-4 pb-2">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex px-8 py-3.5 bg-gold hover:bg-gold/85 text-dark text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-300 font-sans shadow-lg hover:shadow-gold/10 cursor-pointer"
            >
              Entrar em Contato
            </button>
          </div>

          <div className="h-px bg-white/5 w-16 mx-auto" />
          <p className="text-[9px] text-gray-600 font-mono pt-6">
            © {new Date().getFullYear()} Fazenda Santa Cecília. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Contact Selection Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsContactModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-md p-8 md:p-10 bg-[#0f1111] border border-white/10 shadow-2xl rounded-none text-center space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
                  Contato Direto
                </span>
                <h3 className="font-serif text-2xl italic text-gray-300">
                  Escolha com quem deseja falar:
                </h3>
              </div>

              <div className="space-y-4 pt-2">
                {/* Button 1 */}
                <a
                  href="https://wa.me/5511994053670?text=Ol%C3%A1%21%20Acessei%20o%20site%20da%20Fazenda%20Santa%20Cec%C3%ADlia%20e%20gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 transition-all duration-300 text-left group cursor-pointer"
                >
                  <div>
                    <p className="font-sans text-xs text-gray-400 uppercase tracking-widest font-semibold group-hover:text-gold transition-colors duration-300">
                      Cristiane Lopes Kaulich
                    </p>
                    <p className="font-serif italic text-sm text-gray-500">
                      Proprietária
                    </p>
                  </div>
                  <MessageCircle className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
                </a>

                {/* Button 2 */}
                <a
                  href="https://wa.me/5516982521234?text=Ol%C3%A1%21%20Acessei%20o%20site%20da%20Fazenda%20Santa%20Cec%C3%ADlia%20e%20gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 transition-all duration-300 text-left group cursor-pointer"
                >
                  <div>
                    <p className="font-sans text-xs text-gray-400 uppercase tracking-widest font-semibold group-hover:text-gold transition-colors duration-300">
                      Jez Bernardinelli
                    </p>
                    <p className="font-serif italic text-sm text-gray-500">
                      Corretor
                    </p>
                  </div>
                  <MessageCircle className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render detailed pop Details Modal block */}
      <AnimatePresence>
        {selectedFeature && (
          <FeatureModal 
            feature={selectedFeature} 
            onClose={() => setSelectedFeature(null)} 
            onOpenContact={handleOpenContact}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
