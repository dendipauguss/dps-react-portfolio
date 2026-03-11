import React from "react";
import "./HeroFrame.css";

const HeroFrame = ({ image }) => {
  return (
    <div className="relative group w-full max-w-[500px] md:ml-auto select-none animate-float">
      {/* Glow Effect Layer */}
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-[2rem] blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

      {/* Main Container with Rotating Border */}
      <div className="hero-frame-container relative p-1 rounded-[2rem] overflow-hidden" 
           style={{ backgroundColor: 'var(--card-bg)' }}>
        {/* Animated Rotating Border */}
        <div className="border-animator absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_20%,#fbbf24_40%,#facc15_50%,#fbbf24_60%,transparent_80%)] animate-spin-slow"></div>

        {/* Content Wrapper (Glassmorphism) */}
        <div className="relative backdrop-blur-xl rounded-[1.9rem] p-2 overflow-hidden z-10 h-full flex items-center justify-center"
             style={{ backgroundColor: 'var(--card-bg)' }}>
          <img
            src={image}
            alt="Hero Image"
            className="w-full h-full object-cover rounded-[1.5rem] transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Futuristic Overlay Brackets */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-yellow-400 rounded-tl-lg opacity-60 pointer-events-none group-hover:scale-110 transition-all"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-400 rounded-tr-lg opacity-60 pointer-events-none group-hover:scale-110 transition-all"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-400 rounded-bl-lg opacity-60 pointer-events-none group-hover:scale-110 transition-all"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-yellow-400 rounded-br-lg opacity-60 pointer-events-none group-hover:scale-110 transition-all"></div>

          {/* Subtle Scanning Mesh */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(250,204,21,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,4px_100%] pointer-events-none opacity-20"></div>
        </div>
      </div>

      {/* Floating Particles or accents */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-500/20 blur-xl rounded-full group-hover:bg-yellow-500/40 transition-all duration-700"></div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-500/20 blur-xl rounded-full group-hover:bg-yellow-500/40 transition-all duration-700"></div>
    </div>
  );
};

export default HeroFrame;
