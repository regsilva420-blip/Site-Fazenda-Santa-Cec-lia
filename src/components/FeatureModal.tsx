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
              {feature.subtitle && feature.id !== "pecuaria" && (
                <p className="text-xs text-white/70 italic font-light">
                  {feature.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right panel: Details, Stats, Actions */}
          <div className="w-full md:w-7/12 p-6 md:p-8 overflow-y-auto flex flex-col justify-between max-h-[60vh] md:max-h-[85vh]">
            <div className="space-y-6">
              {/* Detailed narrative */}
              <div>
                {feature.id !== "pecuaria" && feature.id !== "hidricos" && (
                  <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">
                    {feature.id === "agricola" ? "Estufa Agrícola de Alta Tecnologia (2.200 m²)" : "Visão Geral"}
                  </h4>
                )}
                {feature.id !== "hidricos" && (
                  <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                    {feature.id === "pecuaria"
                      ? "Uma Estrutura zootécnica versátil, pronta para o manejo de diferentes espécies, da produção comercial à vivência rural."
                      : feature.detailedDesc}
                  </p>
                )}

                {feature.id === "sede" && (
                  <div className="mt-8 space-y-8 pt-6 border-t border-white/10">
                    {/* Item 1 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Área Social</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Sala de estar e jantar independentes, para criar memórias e acolher com conforto.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
                          alt="Área Social"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Área Social
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Acomodações</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Sete quartos que oferecem privacidade, atendidos por dois banheiros completos.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800"
                          alt="Acomodações"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Acomodações
                        </div>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Contemplação</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Duas varandas charmosas que oferecem o espaço perfeito para relaxar e desfrutar da vista.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1549294413-26f195afcbce?auto=format&fit=crop&q=80&w=800"
                          alt="Contemplação"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Contemplação
                        </div>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Cozinha de Fazenda</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Um espaço autêntico e apaixonante equipado com despensa, armários, cooktop, bancadas, fornalha e o tradicional fogão à lenha.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
                          alt="Cozinha de Fazenda"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Cozinha de Fazenda
                        </div>
                      </div>
                    </div>

                    {/* Sem imagem: Item 5 */}
                    <div className="space-y-1 pt-4 border-t border-white/5">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Home Office / Negócios</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Escritório privativo, ideal para gestão da propriedade ou trabalho remoto.
                      </p>
                    </div>

                    {/* Sem imagem: Item 6 */}
                    <div className="space-y-1">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Praticidade</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Lavanderia ampla com excelente ventilação e uma sala de ferramentas dedicada à organização e manutenção.
                      </p>
                    </div>

                    {/* Sem imagem: Item 7 */}
                    <div className="space-y-1">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Estacionamento</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        A propriedade conta com garagem coberta para um veículo, além de um amplo estacionamento descoberto com capacidade para receber confortavelmente os automóveis de visitantes para eventos e familiares.
                      </p>
                    </div>
                  </div>
                )}

                {feature.id === "lazer" && (
                  <div className="mt-8 space-y-8 pt-6 border-t border-white/10">
                    {/* Item 1 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Campo de Futebol</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Gramado excelente e pronto para o lazer de adultos e crianças.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800"
                          alt="Campo de Futebol"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Campo de Futebol
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Espaço Gourmet</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Equipado com forno de pizza, cozinha semi-industrial e bar local estruturado.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
                          alt="Espaço Gourmet"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Espaço Gourmet
                        </div>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Horta e Pomar Próprios</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Consumo fresco e a autossuficiência da propriedade, a horta e o pomar garantem alimentos saudáveis, colhidos direto do pé para a mesa todos os dias.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=800"
                          alt="Horta e Pomar Próprios"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Horta e Pomar Próprios
                        </div>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Gramado com Mesas e Quiosques</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Amplo gramado com quiosques, perfeito para eventos ou apenas relaxar nos dias ensolarados.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&q=80&w=800"
                          alt="Gramado com Mesas e Quiosques"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Gramado com Mesas e Quiosques
                        </div>
                      </div>
                    </div>

                    {/* Item 5 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Quiosque à Margem do Riacho</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        O refúgio perfeito, ideal para banho de riacho e relaxar ao som da água corrente.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
                          alt="Quiosque à Margem do Riacho"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Quiosque à Margem do Riacho
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {feature.id === "hidricos" && (
                  <div className="mt-8 space-y-8 pt-6 border-t border-white/10">
                    {/* Item 1 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Sistemas Prontos para Eventos</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Instalações hidráulicas e elétricas dimensionadas para alta demanda, internet e segurança.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
                          alt="Sistemas Prontos para Eventos"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Sistemas Prontos para Eventos
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Abastecimento Garantido</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Poço artesiano outorgado e captação direta em mina d’água protegida.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&q=80&w=800"
                          alt="Abastecimento Garantido"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Abastecimento Garantido
                        </div>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Charme Histórico</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Moinho de pedra autêntico e antiga usina hidrelétrica com roda d’água — patrimônio com potencial de restauração.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&q=80&w=800"
                          alt="Charme Histórico"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Charme Histórico
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {feature.id === "agricola" && (
                  <div className="mt-8 space-y-8 pt-6 border-t border-white/10">
                    {/* Item 1 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Estrutura Premium</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Estrutura metálica galvanizada com cortinas em telas móveis frontais e laterais.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
                          alt="Estrutura Premium"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Estrutura Premium
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Tecnologia de Cobertura</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Filme de polietileno tricapa difusor de luz (150 micras), com tratamento anti-UV.
                      </p>
                    </div>

                    {/* Item 3 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Proteção Fotométrica</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Telas Chromatinet Leno 20% vermelha para otimizar o espectro de luz.
                      </p>
                    </div>

                    {/* Item 4 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Automação</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Sistema de irrigação totalmente automatizado, com precisão no manejo hídrico.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=800"
                          alt="Automação"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Automação
                        </div>
                      </div>
                    </div>

                    {/* Item 5 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Localização Ideal</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Em frente à Reserva de Mata Atlântica, garantindo clima ideal para as plantas.
                      </p>
                    </div>

                    {/* Item 6 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Potencial Comercial</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Até 120.000 kg de tomates ou 20.000 kg de morangos por ano.
                      </p>
                    </div>
                  </div>
                )}

                {feature.id === "pecuaria" && (
                  <div className="mt-8 space-y-8 pt-6 border-t border-white/10">
                    {/* Item 1 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Curral</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Espaço robusto para manejo seguro, vacinação e trato de bovinos.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&q=80&w=800"
                          alt="Curral"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Curral
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Aprisco</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Instalação protegida para criação e manejo de ovinos e caprinos.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1484557985045-defc319417c6?auto=format&fit=crop&q=80&w=800"
                          alt="Aprisco"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Aprisco
                        </div>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Coelheira</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Espaço organizado para cunicultura.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=800"
                          alt="Coelheira"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Coelheira
                        </div>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Pastagens</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        10 hectares de pastagem de excelente qualidade, formados em terra fértil e prontos para o manejo de gado de corte, leite ou criação de equinos.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
                          alt="Pastagens"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Pastagens
                        </div>
                      </div>
                    </div>

                    {/* Item 5 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Galinheiro</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Estrutura segura para produção de ovos caipiras e aves de corte.
                      </p>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-dark-card group">
                        <img 
                          src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800"
                          alt="Galinheiro"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-2 py-1 text-[10px] text-gray-300">
                          Espaço para Foto - Galinheiro
                        </div>
                      </div>
                    </div>

                    {/* Item 6 */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-serif font-semibold text-white tracking-tight">Sala de Ordenha</h2>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                        Espaço dedicado para atividade leiteira e produção de laticínios.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky/bottom Action dock */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onOpenContact(feature.title);
                  onClose();
                }}
                className="flex-1 px-4 py-3 rounded-lg bg-gold text-dark text-xs uppercase tracking-wider font-bold hover:bg-gold-light hover:scale-[1.01] active:scale-95 transition-all text-center cursor-pointer shadow-lg shadow-gold/10"
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
