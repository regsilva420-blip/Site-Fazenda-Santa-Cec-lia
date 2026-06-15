import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Sparkles, Send, RefreshCw, Bot, User, CornerDownLeft, HelpCircle, X } from "lucide-react";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function ConciergeChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Olá! Sou a Cecília, concierge exclusiva da Fazenda Santa Cecília. Como posso ajudá-lo hoje? Posso falar sobre a luxuosa Casa Sede, o potencial da estufa climatizada, nossas 3 nascentes minerais, ou agendar uma visita vip.",
    },
  ]);
  const [inputMsg, setInputMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestionChips = [
    "Quantos quartos tem a sede?",
    "Me conte sobre as 3 nascentes.",
    "Potencial da estufa de 2.200 m²",
    "Como agendar uma palestra VIP?"
  ];

  // Auto scroll
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputMsg;
    if (!textToSend.trim()) return;

    if (!customText) {
      setInputMsg("");
    }

    const newMsg: Message = { role: "user", text: textToSend };
    const updatedMessages = [...messages, newMsg];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const chatHistory = updatedMessages.slice(1, -1); // ignore greeting and current message

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: chatHistory,
        }),
      });

      const data = await response.json();
      if (response.ok && data.text) {
        setMessages((prev) => [...prev, { role: "model", text: data.text }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "model",
            text: "Peço desculpas, mas enfrentei uma pequena instabilidade momentânea no sinal da fazenda. Por favor, tente enviar novamente.",
          },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Peço desculpas, não consegui me conectar ao servidor central da fazenda. Por favor, verifique se a conexão está ativa.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "model",
        text: "Histórico redefinido. Como posso ajudá-lo a explorar a Fazenda Santa Cecília agora?",
      },
    ]);
  };

  return (
    <>
      {/* Floating Messenger bubble trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gold text-dark rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all border border-gold-light/20 relative group"
          aria-label="Toggle concierge concierge assistant"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-dark" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 text-dark animate-pulse" />
              <span className="absolute right-0 top-0 w-3 h-3 bg-emerald-500 rounded-full border border-gold" />
            </>
          )}

          {/* Prompt tooltip */}
          <span className="absolute right-full mr-3 bg-dark-surface border border-white/10 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline-block pointer-events-none">
            Fale com a IA Cecília
          </span>
        </motion.button>
      </div>

      {/* Floating luxurious Chat dialogue window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="fixed bottom-24 right-4 left-4 md:left-auto md:right-6 w-auto md:w-[420px] h-[550px] bg-dark-surface border border-white/10 rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden text-white"
          >
            {/* Header portion */}
            <div className="bg-dark/85 px-4 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold relative">
                  <Bot className="w-5.5 h-5.5 text-gold" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-dark-surface" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white tracking-wide">IA Cecília</h4>
                  <p className="text-[9px] text-emerald-400 font-mono tracking-widest uppercase flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Consultora Virtual Exclusiva
                  </p>
                </div>
              </div>

              {/* Reset logs */}
              <button
                onClick={clearChat}
                title="Limpar conversa"
                className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Conversation Logs Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0c0e0e]/50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {/* Icon left for model */}
                  {msg.role === "model" && (
                    <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0 self-start">
                      <Bot className="w-3.5 h-3.5 text-gold" />
                    </div>
                  )}

                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed font-light ${
                      msg.role === "user"
                        ? "bg-gold text-dark rounded-tr-none font-medium shadow-md shadow-gold/5"
                        : "bg-white/5 border border-white/5 text-gray-200 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Icon right for user */}
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 self-start">
                      <User className="w-3.5 h-3.5 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}

              {/* Loading active indicator */}
              {loading && (
                <div className="flex gap-2.5 justify-start">
                  <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <div className="bg-white/5 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggesions Chips Area */}
            <div className="p-3 bg-dark/40 border-t border-white/5 flex gap-1.5 overflow-x-auto scrollbar-hide shrink-0 scroll-smooth">
              {suggestionChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip)}
                  disabled={loading}
                  className="px-2.5 py-1.5 rounded-full border border-white/10 text-[10px] text-gray-300 hover:text-white hover:border-gold/40 hover:bg-gold/5 font-light shrink-0 transition-all cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Footer Input Area */}
            <div className="p-3 bg-dark border-t border-white/10 flex gap-2">
              <input
                type="text"
                placeholder="Pergunte sobre as águas, sede, estufa..."
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !loading) {
                    handleSendMessage();
                  }
                }}
                disabled={loading}
                className="flex-1 bg-white/5 border border-white/15 px-3.5 py-2.5 rounded-lg text-xs placeholder-gray-500 focus:outline-none focus:border-gold focus:scale-[1.01] transition-all disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={loading || !inputMsg.trim()}
                className="p-3 bg-gold text-dark rounded-lg hover:bg-gold-light active:scale-95 transition-all flex items-center justify-center cursor-pointer disabled:bg-white/15 disabled:text-gray-500 disabled:scale-100 disabled:pointer-events-none shadow-md shadow-gold/5"
              >
                <Send className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
