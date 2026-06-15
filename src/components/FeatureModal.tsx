import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Sparkles, AlertCircle, Droplets, Leaf, Home, Eye, Trees } from "lucide-react";
import { FeatureCard } from "../types";

interface FeatureModalProps {
  feature: FeatureCard | null;
  onClose: () => void;
  onAskConcierge: (topic: string) => void;
  onOpenContact: (topic: string) => void;
}

export default function FeatureModal({ feature, onClose, onAskConcierge, onOpenContact }: FeatureModalProps) {
  if (!feature) return null;

  // Render responsive category helper icons
  const renderCategoryIcon = (id: string) => {
    switch (id) {
      case "floresta":
        return <Trees className="w-5 h-5 text-gold" />;
      case "hidricos":
        return <Droplets className="w-5 h-5 text-gold" />;
      case "agricola":
        return <Leaf className="w-5 h-5 text-gold" />;
      case "sede":
      case "lazer":
        return <Home className="w-5 h-5 text-gold" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-none overflow-y-auto">
        {/* Backdrop filter simulation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl bg-dark-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row text-white"
        >
          {/* Close button top right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-white/10 text-white/80 hover:text-white hover:bg-black/90 transition-all cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left panel: Image & Core Info Overlay */}
          <div className="relative w-full md:w-5/12 h-[200px] md:h-auto min-h-[250px] bg-dark flex-shrink-0">
            <img
              src={feature.image}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // If direct link fails, replace with high-end luxury placeholder
                e.currentTarget.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/40" />
            
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-semibold text-gold tracking-widest uppercase mb-3">
                {renderCategoryIcon(feature.id)}
                {feature.category}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">
                {feature.title}
              </h2>
              <p className="text-xs text-white/70 italic font-light">
                {feature.subtitle}
              </p>
            </div>
          </div>

          {/* Right panel: Details, Stats, Actions */}
          <div className="w-full md:w-7/12 p-6 md:p-8 overflow-y-auto flex flex-col justify-between max-h-[60vh] md:max-h-[85vh]">
            <div className="space-y-6">
              {/* Detailed narrative */}
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Visão Geral</h4>
                <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                  {feature.detailedDesc}
                </p>
              </div>

              {/* Grid with Key Metrics */}
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-3">Dados & Métricas</h4>
                <div className="grid grid-cols-2 gap-3">
                  {feature.metrics.map((metric, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-gold/20 transition-colors">
                      <p className="text-[10px] text-gray-400 capitalize tracking-wider font-light">{metric.label}</p>
                      <p className="text-[13px] text-white font-medium mt-0.5">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bullet style specifications */}
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-3">Destaques Técnicos</h4>
                <ul className="space-y-2 text-xs text-gray-300 font-light">
                  {feature.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-0.5 bg-gold/15 p-0.5 rounded text-gold shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky/bottom Action dock */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onAskConcierge(feature.title);
                  onClose();
                }}
                className="flex-1 px-4 py-3 rounded-lg bg-gold text-dark text-xs uppercase tracking-wider font-bold hover:bg-gold-light hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold/10"
              >
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                Perguntar à IA Cecília
              </button>

              <button
                onClick={() => {
                  onOpenContact(feature.title);
                  onClose();
                }}
                className="px-4 py-3 rounded-lg bg-transparent border border-white/20 text-white text-xs uppercase tracking-wider font-semibold hover:bg-white/5 hover:border-white/40 active:scale-95 transition-all text-center cursor-pointer"
              >
                Agendar Consulta Corretor
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
