import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Info, ArrowUpRight, Check, Home, Droplets, Leaf, PawPrint, Trees, Sparkles } from "lucide-react";
import { EstateHotspots, MapHotspot } from "../types";

interface InteractiveMapProps {
  onLearnMore: (id: string) => void;
}

export default function InteractiveMap({ onLearnMore }: InteractiveMapProps) {
  const [selectedHotspot, setSelectedHotspot] = useState<MapHotspot>(EstateHotspots[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Home":
        return <Home className="w-4 h-4" />;
      case "Droplets":
        return <Droplets className="w-4 h-4" />;
      case "Leaf":
        return <Leaf className="w-4 h-4" />;
      case "PawPrint":
        return <PawPrint className="w-4 h-4 font-semibold" />;
      case "Trees":
        return <Trees className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full bg-dark-surface border border-white/5 rounded-2xl overflow-hidden shadow-xl p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left side: Interactive Blueprint Map Stage */}
        <div className="flex-1">
          <div className="relative w-full aspect-[4/3] rounded-xl border border-white/10 bg-[#0d0f0f] overflow-hidden">
            
            {/* Topographic concentric background curves for styled blueprint design */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-white/[0.015] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border border-white/[0.02] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full border border-white/[0.025] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] rounded-full border border-white/[0.03] pointer-events-none" />
            
            {/* Grid overlay */}
            <div className="absolute bottom-5 left-5 bg-white/5 font-mono text-[9px] tracking-widest text-[#777] p-1 rounded uppercase pointer-events-none">
              950m Altitude • Patrocínio Paulista, SP
            </div>

            <div className="absolute top-5 right-5 font-mono text-[9px] tracking-widest text-gold font-bold uppercase pointer-events-none flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
              Mapa Esquemático Ativo
            </div>

            {/* Render Pulsating Hotspots */}
            {EstateHotspots.map((hotspot) => {
              const isSelected = selectedHotspot && hotspot.id === selectedHotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setSelectedHotspot(hotspot)}
                  className="absolute group z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer focus:outline-none"
                  style={{ left: `${hotspot.coords.x}%`, top: `${hotspot.coords.y}%` }}
                >
                  {/* Ripple concentric animations */}
                  <span className={`absolute inline-flex h-10 w-10 rounded-full bg-gold/10 opacity-75 group-hover:scale-125 transition-transform ${isSelected ? 'animate-ping duration-1000' : ''}`} />
                  <span className={`absolute inline-flex h-6 w-6 rounded-full bg-gold/20 opacity-90`} />
                  
                  {/* Center pin container */}
                  <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 shadow-lg ${
                    isSelected 
                      ? "bg-gold text-dark border-gold scale-110" 
                      : "bg-[#111] text-gold border-white/20 group-hover:bg-gold group-hover:text-dark group-hover:border-gold"
                  }`}>
                    {getIcon(hotspot.iconName)}
                  </div>

                  {/* Pop text on desktop hover */}
                  <div className="absolute bottom-full mb-2 bg-[#111]/95 text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded border border-white/15 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                    {hotspot.name}
                  </div>
                </button>
              );
            })}

            {/* High visual presentation overlay for non-active background drawing */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 pointer-events-none">
              <span className="text-[10px] text-gray-500 font-mono tracking-wider">63 HECTARES TOTAIS</span>
            </div>
          </div>
        </div>

        {/* Right side: Selected Hotspot Details Console */}
        <div className="w-full lg:w-5/12 flex flex-col justify-between rounded-xl bg-white/5 border border-white/5 p-6 hover:border-gold/20 transition-all">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedHotspot.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gold/20 border border-gold/30 rounded-lg text-gold">
                  {getIcon(selectedHotspot.iconName)}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                    {selectedHotspot.name}
                  </h3>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-gold text-xs font-semibold">
                    Zona em Destaque
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/10 w-full" />

              <p className="text-xs text-gray-400 font-medium leading-relaxed italic">
                "{selectedHotspot.description}"
              </p>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#777] font-bold block mb-1">Especificações Logísticas</span>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {selectedHotspot.details}
                </p>
              </div>

              {/* Related tags for the zone */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-gray-300 font-mono border border-white/5">
                  Segurança 24h
                </span>
                <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-gray-300 font-mono border border-white/5">
                  Eco-Conectado
                </span>
                <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-gray-300 font-mono border border-white/5">
                  Mapeado por GPS
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action triggers */}
          <div className="mt-8 pt-4 border-t border-white/5 flex gap-2">
            <button
              onClick={() => {
                // Map local hotspot id back to card detailed view to match
                let mappedId = "floresta";
                if (selectedHotspot.id.includes("sede")) mappedId = "sede";
                else if (selectedHotspot.id.includes("represa")) mappedId = "hidricos";
                else if (selectedHotspot.id.includes("estufa")) mappedId = "agricola";
                else if (selectedHotspot.id.includes("pecuaria")) mappedId = "pecuaria";
                else if (selectedHotspot.id.includes("mata")) mappedId = "floresta";
                onLearnMore(mappedId);
              }}
              className="w-full flex items-center justify-center gap-1 px-4 py-2.5 rounded bg-transparent border border-white/10 hover:bg-white/5 hover:border-gold/40 text-[10px] uppercase tracking-widest font-bold text-gray-200 hover:text-white transition-all cursor-pointer"
            >
              Ver Detalhes Completos
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
