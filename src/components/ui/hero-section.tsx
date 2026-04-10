"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, BarChart3, CheckCircle, ShieldCheck } from 'lucide-react';
import FeatureShaderCards from '@/components/ui/feature-shader-cards';
import HeroWave from '@/components/ui/dynamic-wave-canvas-background';

export const HeroSection = () => {
  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-green-400 selection:text-black overflow-hidden w-full bg-[#020c07]">
      {/* Animated canvas background */}
      <div className="absolute inset-0 z-0">
        <HeroWave />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>
      {/* Checkered mesh overlay on top of canvas */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 max-w-7xl mx-auto w-full">
        {/* Left: social links */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/joabeofreitas/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-white text-black font-black tracking-tight text-sm px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm hover:bg-gray-100 transition-colors"
          >
            {/* Instagram icon */}
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
          <a
            href="https://wa.me/5585920017206?text=Ol%C3%A1%20Joabe%2C%20vi%20sua%20proposta%20e%20gostaria%20de%20conversar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-400 text-black font-black text-sm px-4 py-2 rounded-full border-[1.5px] border-white/30 shadow-sm hover:bg-green-300 transition-colors"
          >
            {/* WhatsApp icon */}
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Center: anchor links */}
        <div className="hidden md:flex items-center space-x-2">
          {[
            { label: 'Metodologia', href: '#metodologia' },
            { label: 'Resultados', href: '#resultados' },
            { label: 'Credenciais', href: '#credenciais' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 rounded-full border border-white/30 text-white text-xs font-semibold hover:bg-white/10 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <a
          href="#planos"
          className="px-6 py-2 rounded-full bg-green-400 text-black text-xs md:text-sm font-bold hover:bg-green-300 transition-colors shadow-lg"
        >
          Ver Planos
        </a>
      </nav>

      {/* Hero Main */}
      <main className="flex-1 relative z-10 pt-4 pb-24 md:pt-8 md:pb-40 px-4 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center z-10 mt-4 mb-16">

          {/* Subtitle badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
          >
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-white/90 text-sm font-medium">Gestor de Marketing Digital para Nutricionistas</span>
          </motion.div>

          {/* Text Stack */}
          <div className="w-full flex flex-col items-center relative z-10 space-y-2 md:space-y-3">
            {/* #CLINICA */}
            <div className="w-full flex justify-start pl-[5%] md:pl-[18%] relative z-30">
              <h1
                className="text-[clamp(4rem,10vw,140px)] font-black leading-[0.85] tracking-tighter text-green-400 m-0 p-0 uppercase"
                style={{
                  fontFamily: '"Arial Black", Impact, sans-serif',
                  textShadow: '1px 1px 0 #14532d, 2px 2px 0 #14532d, 3px 3px 0 #14532d, 4px 4px 0 #14532d, 5px 5px 0 #14532d, 6px 6px 0 #14532d, 8px 8px 0 #14532d, 10px 10px 0 #14532d, 12px 12px 0 #14532d'
                }}
              >
                #CL&#205;NICA
              </h1>
            </div>

            {/* PACIENTES */}
            <div className="w-full flex justify-center relative z-20">
              <h1
                className="text-[clamp(4.5rem,13vw,200px)] font-black leading-[0.85] tracking-tighter text-white m-0 p-0 uppercase"
                style={{
                  fontFamily: '"Arial Black", Impact, sans-serif',
                  textShadow: '1px 1px 0 #1e3a5f, 2px 2px 0 #1e3a5f, 3px 3px 0 #1e3a5f, 4px 4px 0 #1e3a5f, 5px 5px 0 #1e3a5f, 6px 6px 0 #1e3a5f, 8px 8px 0 #1e3a5f, 10px 10px 0 #1e3a5f, 12px 12px 0 #1e3a5f'
                }}
              >
                PACIENTES
              </h1>
            </div>

            {/* LOTADA */}
            <div className="w-full flex justify-end pr-[5%] md:pr-[18%] relative z-10">
              <h1
                className="text-[clamp(4rem,10vw,140px)] font-black leading-[0.85] tracking-tighter text-white m-0 p-0 uppercase"
                style={{
                  fontFamily: '"Arial Black", Impact, sans-serif',
                  textShadow: '1px 1px 0 #1e3a5f, 2px 2px 0 #1e3a5f, 3px 3px 0 #1e3a5f, 4px 4px 0 #1e3a5f, 5px 5px 0 #1e3a5f, 6px 6px 0 #1e3a5f, 8px 8px 0 #1e3a5f, 10px 10px 0 #1e3a5f, 12px 12px 0 #1e3a5f'
                }}
              >
                LOTADA
              </h1>
            </div>
          </div>

          {/* Floating Cards - absolute overlays */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Card 1 - Joabe Freitas */}
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ y: [0, -15, 0] }}
              whileHover={{ rotate: 0, scale: 1.04, y: 0 }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 0.4, ease: "easeOut" },
                scale: { duration: 0.3 },
              }}
              className="absolute bottom-[5%] left-[2%] md:left-[12%] z-30 pointer-events-auto cursor-default"
            >
              <div className="w-44 md:w-56 aspect-[3/3.5] bg-neutral-900/95 border border-white/20 rounded-[2rem] p-5 flex flex-col items-center justify-center shadow-2xl">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-3 shadow-inner border-[3px] border-white/50 overflow-hidden bg-green-600">
                  <img
                    src="/joabe-avatar.webp"
                    alt="Joabe Freitas"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white m-auto mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>';
                    }}
                  />
                </div>
                <div className="text-center mt-1">
                  <p className="font-bold text-sm md:text-base text-white">Joabe Freitas</p>
                  <p className="text-[10px] md:text-xs text-white/80 mt-1">Gestor de Marketing</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-[9px] text-green-400 font-semibold">Dispon&#237;vel</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Nutricionista Cliente (placeholder) */}
            <motion.div
              initial={{ rotate: 10 }}
              animate={{ y: [0, -20, 0] }}
              whileHover={{ rotate: 0, scale: 1.04, y: 0 }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
                rotate: { duration: 0.4, ease: "easeOut" },
                scale: { duration: 0.3 },
              }}
              className="absolute top-[10%] right-[2%] md:right-[12%] z-30 pointer-events-auto cursor-default"
            >
              <div className="w-44 md:w-56 aspect-[3/3.5] bg-neutral-900/95 border border-white/20 rounded-[2rem] p-5 flex flex-col items-center justify-center shadow-2xl">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center mb-3 shadow-inner border-[3px] border-white/50 overflow-hidden">
                  {/* Placeholder for nutritionist client photo */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-600 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white/60" />
                  </div>
                </div>
                <div className="text-center mt-1">
                  <p className="font-bold text-sm md:text-base text-white/60 italic">Sua foto aqui</p>
                  <p className="text-[10px] md:text-xs text-white/50 mt-1">Nutricionista</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <BarChart3 className="w-3 h-3 text-green-400" />
                    <span className="text-[9px] text-green-400 font-semibold">Agenda Lotada</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Metric floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [12, 10, 12] }}
              whileHover={{ rotate: 0, scale: 1.06, y: 0 }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                rotate: { duration: 0.4, ease: "easeOut" },
                scale: { duration: 0.3 },
              }}
              className="absolute bottom-[-14%] right-[1%] md:right-[12%] z-40 pointer-events-auto cursor-default"
            >
              <div className="bg-neutral-900/95 text-white rounded-2xl px-5 py-4 shadow-xl border border-white/15">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <p className="text-[10px] font-bold uppercase tracking-wider text-green-300">Marketing que já provou resultado</p>
                </div>
                <p className="text-sm font-black text-white leading-tight">Estratégia comprovada</p>
                <p className="text-[9px] font-medium text-white/70 mt-0.5">Tráfego · Social Media · Funil</p>
              </div>
            </motion.div>

            {/* Check badges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-[5%] left-[2%] md:left-[8%] z-30"
            >
              <div className="flex flex-col gap-2">
                {['Estratégias personalizadas', 'Relatórios semanais', 'Suporte direto'].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
                    <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                    <span className="text-white text-xs font-medium" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-20 text-center max-w-2xl mx-auto mt-8"
        >
          <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed">
            Nutricionistas que <span className="text-green-400 font-bold">n&#227;o conseguem pacientes particulares</span> pelo digital deixam dinheiro na mesa todos os dias.
          </p>
          <p className="text-white/60 text-sm md:text-base mt-3">
            Eu resolvo isso com estrat&#233;gia, tr&#225;fego pago e posicionamento que gera previsibilidade real na sua agenda.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#planos"
              className="px-8 py-4 rounded-full bg-green-400 text-black font-bold text-base hover:bg-green-300 transition-colors shadow-xl shadow-green-400/20"
            >
              Quero lotar minha agenda
            </a>
            <a
              href="#metodologia"
              className="px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors"
            >
              Como funciona
            </a>
          </div>
        </motion.div>
      </main>

      {/* Bottom features panel — shader cards */}
      <section className="bg-black/90 backdrop-blur-sm px-6 py-12 md:px-10 md:py-16 relative z-20 border-t border-white/10 w-full">
        <div className="max-w-6xl mx-auto">
          <FeatureShaderCards />
        </div>
      </section>
    </div>
  );
};
