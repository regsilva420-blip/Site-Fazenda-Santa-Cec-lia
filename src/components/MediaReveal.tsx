import React from "react";
import { motion } from "motion/react";

interface MediaRevealProps {
  src: string;
  alt: string;
  type?: "image" | "video";
  // Responsive layout: -mx-6 on mobile stretches it edge-to-edge, cancelling out parent padding
  className?: string; 
  aspectClass?: string;
  onClick?: () => void;
}

export default function MediaReveal({ 
  src, 
  alt, 
  type = "image", 
  className = "-mx-6 md:mx-0 md:rounded-xl",
  aspectClass = "aspect-[3/4] md:aspect-video md:h-[600px]",
  onClick
}: MediaRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`relative overflow-hidden ${className} ${aspectClass} bg-neutral-900/40`}
      onClick={onClick}
    >
      {type === "video" ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out hover:scale-105"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out hover:scale-105"
          referrerPolicy="no-referrer"
        />
      )}
    </motion.div>
  );
}
