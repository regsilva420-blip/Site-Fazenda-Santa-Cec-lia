import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, X, Sparkles, MapPin, Droplets, Compass, ArrowDown, Map, 
  Landmark, Phone, Users, Shield, BookOpen, Volume2, VolumeX, Mail
} from "lucide-react";
import { FeaturesData, FeatureCard } from "./types";
import FeatureModal from "./components/FeatureModal";
import InteractiveMap from "./components/InteractiveMap";
import InvestmentCalculator from "./components/InvestmentCalculator";
import ContactForm from "./components/ContactForm";
import ConciergeChat from "./components/ConciergeChat";

export default function App() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureCard | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [conciergeTopic, setConciergeTopic] = useState<string | null>(null);
  const [contactSubject, setContactSubject] = useState<string>("Geral - Fazenda Santa Cecília");

  // Handle transparent to dark header blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLearnMore = (id: string) => {
    const found = FeaturesData.find(f => f.id === id);
    if (found) {
      setSelectedFeature(found);
    }
  };

  const handleAskConcierge = (topic: string) => {
    // Open chat floating trigger and pre-populate context or set state
    setConciergeTopic(topic);
    // Find the chat button and click if existing, or trigger state inside ConciergeChat
    const chatbotTrigger = document.querySelector('[aria-label="Toggle concierge concierge assistant"]') as HTMLButtonElement;
    if (chatbotTrigger) {
      chatbotTrigger.click();
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
          <button onClick={() => scrollToSection("zoneamento")} className="hover:text-gold transition-colors cursor-pointer">Mapa do Imóvel</button>
          <button onClick={() => scrollToSection("financeiro")} className="hover:text-gold transition-colors cursor-pointer">Rentabilidade</button>
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
                    { label: "Visão Geral & Recursos", id: "detalhes" },
                    { label: "Zoneamento & Mapa", id: "zoneamento" },
                    { label: "Rentabilidade de Cultivo", id: "financeiro" },
                    { label: "Estufa de Tecnologia", id: "detalhes", subId: "agricola" },
                    { label: "Casa Sede & Lazer", id: "detalhes", subId: "sede" },
                    { label: "Recursos Hídricos", id: "detalhes", subId: "hidricos" },
                    { label: "Agendar Visita Físico", id: "agendar-visita" }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        scrollToSection(item.id);
                        if (item.subId) {
                          setTimeout(() => handleLearnMore(item.subId!), 400);
                        }
                      }}
                      className="w-full text-left px-3 py-2 rounded text-xs text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer font-light flex items-center justify-between"
                    >
                      {item.label}
                      <span className="text-[10px] text-gold font-mono">&rarr;</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom sales broker support information card */}
              <div className="p-4 rounded bg-white/5 border border-white/5 space-y-2">
                <p className="text-[9px] uppercase tracking-widest text-[#777] font-bold">ASSESSORIA DIRECTA</p>
                <p className="text-xs text-white font-medium flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                  +55 (16) 99842-1200
                </p>
                <p className="text-[10px] text-gray-400 font-light font-mono flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                  vendas@santaseciliaserrana.com.br
                </p>
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
          poster="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1500"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://quzsjtcvkdzmhzvosunn.supabase.co/storage/v1/object/public/midias-site//hero.mp4" type="video/mp4" />
        </video>
        
        {/* Dark luxury gradient overlay cover */}
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        {/* Content Box */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-20 md:pb-24 max-w-7xl mx-auto flex flex-col items-start text-left z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 w-full"
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              Patrocínio Paulista - SP (Mantiqueira/Serrana)
            </span>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-none tracking-tight text-white max-w-2xl">
              Fazenda <br /> Santa Cecília
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-2">
              <div className="text-sm text-gray-300 font-light tracking-wide">
                <span className="text-white font-semibold">63 Hectares</span> de Terras Produtivas
              </div>
              <div className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="text-sm text-gray-300 font-light tracking-wide">
                Bioma <span className="text-white font-semibold">Mata Atlântica</span> Preservada
              </div>
              <div className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="text-sm text-gray-300 font-light tracking-wide">
                <span className="text-white font-semibold">3 Nascentes</span> Minerais Próprias
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
      <section className="w-full px-0 mx-0 flex flex-col gap-1 bg-[#0f1111] overflow-hidden">
        {FeaturesData.map((feature) => (
          <motion.article 
            key={feature.id}
            onClick={() => setSelectedFeature(feature)}
            className="relative h-[30vh] lg:h-[45vh] min-h-[250px] w-full overflow-hidden group cursor-pointer bg-dark"
          >
            {/* Background image covering 100% */}
            <img 
              src={feature.image} 
              alt={feature.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-102"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000";
              }}
            />
            
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
                  setSelectedFeature(feature);
                }}
                className="border border-white/30 px-5 py-2.5 text-[10px] tracking-widest font-semibold uppercase text-white rounded-none flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/55 transition duration-300 pointer-events-auto cursor-pointer whitespace-nowrap"
              >
                Saiba Mais
                <span className="text-[12px] transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </button>

            </div>
          </motion.article>
        ))}
      </section>

      {/* 5. Architectural Map Area */}
      <section id="zoneamento" className="py-16 md:py-24 px-6 bg-[#0c0d0d] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-gold block">
              GEOLOCALIZAÇÃO & ZONEAMENTO
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white">
              Visualização de Implantação do Imóvel
            </h2>
            <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
              Explore a distribuição topofísica das divisórias ecológicas, poços, estufas e construções no mapa interativo. Toque nos marcados pulsadores para decifrar a logística.
            </p>
          </div>

          <InteractiveMap onLearnMore={handleLearnMore} />
        </div>
      </section>

      {/* 6. Investment Simulator Area */}
      <section id="financeiro" className="py-16 md:py-24 px-6 bg-[#0f1111]">
        <div className="max-w-7xl mx-auto">
          <InvestmentCalculator />
        </div>
      </section>

      {/* 7. Contact Consultation Dock */}
      <section id="agendar-visita" className="py-16 md:py-24 px-6 bg-gradient-to-b from-[#0c0d0d] to-[#0a0b0b] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <ContactForm initialSubject={contactSubject} />
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="py-16 px-6 text-center bg-[#070808] border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl italic text-gray-300 tracking-wide">
            Fazenda Santa Cecília
          </h2>
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
            Região Serrana • São Paulo, Brasil
          </p>
          <div className="h-px bg-white/5 w-16 mx-auto" />
          <p className="text-xs text-gray-500 font-light max-w-sm mx-auto leading-relaxed">
            Uma joia exclusiva do agronegócio e lazer do interior do estado. Documentações 100% em perfeita ordem jurídica.
          </p>
          <p className="text-[9px] text-gray-600 font-mono pt-6">
            © {new Date().getFullYear()} Fazenda Santa Cecília. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating virtual AI Concierge helper */}
      <ConciergeChat />

      {/* Render detailed pop Details Modal block */}
      <AnimatePresence>
        {selectedFeature && (
          <FeatureModal 
            feature={selectedFeature} 
            onClose={() => setSelectedFeature(null)} 
            onAskConcierge={handleAskConcierge}
            onOpenContact={handleOpenContact}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
