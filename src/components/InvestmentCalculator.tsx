import React, { useState } from "react";
import { motion } from "motion/react";
import { DollarSign, ShieldCheck, Zap, Info, Landmark, HelpCircle } from "lucide-react";

export default function InvestmentCalculator() {
  const [estufaArea, setEstufaArea] = useState<number>(2200); // 2,200m² typical
  const [cattleHeads, setCattleHeads] = useState<number>(40); // 40 typical
  const [conserveHectares, setConserveHectares] = useState<number>(20); // 20 typical within Mata Atlântica

  // Financial Estimates Math Formulas
  const greenhouseAnnualYield = estufaArea * 180; // Estimated R$180 per m² from high-tech seedlings or cherry tomatoes
  const cattleAnnualYield = cattleHeads * 4800; // Estimated R$4,800 active revenue per head from premium dairy/vet genetics
  const carbonCreditsYield = conserveHectares * 720; // R$720 carbon credit valuation estimate per hectare of active forest canopy
  
  const totalAnnualEst = greenhouseAnnualYield + cattleAnnualYield + carbonCreditsYield;

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  });

  return (
    <div className="w-full bg-dark bg-[#111313] border border-white/5 rounded-2xl p-6 md:p-8 shadow-xl text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold bg-white/5 px-2.5 py-1 rounded">Simulador</span>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-white mt-2">
            Rentabilidade & Investimento
          </h3>
          <p className="text-xs text-gray-400 mt-1 font-light max-w-xl">
            Simule o potencial de rendimento baseado no aproveitamento agroecológico e de alta tecnologia da propriedade.
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-gold-light bg-gold/10 px-3 py-1.5 rounded-lg border border-gold/10 self-start md:self-auto">
          <Landmark className="w-4 h-4 text-gold shrink-0" />
          Retorno Sustentável
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sliders Area (8 cols on large screens) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Slider 1: Greenhouse */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-gray-300 font-medium">Área de Estufa Cultivada (m²)</label>
              <span className="font-mono text-gold font-semibold text-sm bg-white/5 px-2 py-0.5 rounded">
                {estufaArea.toLocaleString()} m²
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={estufaArea}
              onChange={(e) => setEstufaArea(Number(e.target.value))}
              className="w-full accent-gold h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
              <span>Mín: 500m²</span>
              <span>Estrutura Atual: 2.200m²</span>
              <span>Máx: 5.000m²</span>
            </div>
          </div>

          {/* Slider 2: Cattle Herd */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-gray-300 font-medium">Rebanho de Pecuária Seletiva (Cabeças)</label>
              <span className="font-mono text-gold font-semibold text-sm bg-white/5 px-2 py-0.5 rounded">
                {cattleHeads} animais
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="120"
              step="5"
              value={cattleHeads}
              onChange={(e) => setCattleHeads(Number(e.target.value))}
              className="w-full accent-gold h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
              <span>Mín: 10 cab.</span>
              <span>Capacidade S/ Expansão: 40 cab.</span>
              <span>Máx: 120 cab.</span>
            </div>
          </div>

          {/* Slider 3: Carbon Credits */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-gray-300 font-medium">Preservação Ambiental Monetizada (Hectares)</label>
              <span className="font-mono text-gold font-semibold text-sm bg-white/5 px-2 py-0.5 rounded">
                {conserveHectares} ha
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="63"
              step="1"
              value={conserveHectares}
              onChange={(e) => setConserveHectares(Number(e.target.value))}
              className="w-full accent-gold h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
              <span>Mín: 5 ha</span>
              <span>Reserva Ativa Mínima: 20 ha</span>
              <span>Máx: 63 ha</span>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-emerald-950/15 border border-emerald-500/10 text-[11px] text-emerald-300 flex gap-2">
            <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-400" />
            <p>
              <strong>Fator Ecológico Garantido:</strong> Os cálculos são projeções realistas ajustadas para o mercado de Patrocínio Paulista/SP, com foco em hortifrúti de alta densidade e pecuária leiteira rotacionada de excelência.
            </p>
          </div>

        </div>

        {/* Estimation Results Panel (5 cols on large screens) */}
        <div className="lg:col-span-5 bg-white/5 rounded-xl border border-white/5 p-6 flex flex-col justify-between">
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-widest text-[#777] font-bold">Faturamento Estimado</h4>
            
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-light">
                <span className="text-gray-400">Horticultura & Estufa</span>
                <span className="font-mono text-white">{formatter.format(greenhouseAnnualYield)}/ano</span>
              </div>
              <div className="flex justify-between text-xs font-light">
                <span className="text-gray-400">Pecuária Seletiva</span>
                <span className="font-mono text-white">{formatter.format(cattleAnnualYield)}/ano</span>
              </div>
              <div className="flex justify-between text-xs font-light">
                <span className="text-gray-400">Compensação Crédito Verde</span>
                <span className="font-mono text-white">{formatter.format(carbonCreditsYield)}/ano</span>
              </div>
              
              <div className="h-px bg-white/10 w-full pt-1" />
              
              <div className="pt-2">
                <span className="text-[10px] uppercase text-[#777] block font-semibold leading-none">Receita Operacional Anual Estimada</span>
                <span className="text-2xl font-serif font-bold text-gold inline-block mt-2">
                  {formatter.format(totalAnnualEst)}
                </span>
                <span className="text-[10px] text-emerald-400 block mt-1 font-mono">
                  • Retorno operacional projetado estável
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 text-[9px] text-gray-500 leading-normal flex gap-1 items-start">
            <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-gray-400" />
            <p>
              Estes valores são estimativas operacionais de negócios do agronegócio e não representam lucro financeiro líquido garantido. Os ativos fixos da propriedade possuem valor de mercado próprio de alta liquidez.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
