"use client";

import { motion, useReducedMotion } from "framer-motion";
import HeroWave from "@/components/ui/dynamic-wave-canvas-background";
import { Calendar, ArrowRight, GraduationCap, BarChart2, CheckCircle } from "lucide-react";

// ── Constants ──────────────────────────────────────────────────────────────────

const BARS = [28, 48, 36, 72, 58, 100] as const;

// ease-out-expo
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const PROOF_ITEMS = [
  { Icon: GraduationCap, text: "Graduando em Marketing · UNIFOR" },
  { Icon: BarChart2,     text: "Meta + Google Ads Certificado"  },
  { Icon: CheckCircle,   text: "Case B2B Documentado"           },
] as const;

// ── Component ──────────────────────────────────────────────────────────────────

export default function StrategyHero() {
  const prefersReduced = useReducedMotion();

  /** Card entrance — Jakub's recipe scaled up for a large element */
  const card = {
    hidden:  prefersReduced ? { opacity: 0 as number } : { opacity: 0 as number, y: 28, filter: "blur(6px)" },
    visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring" as const, duration: 0.75, bounce: 0 },
    },
  };

  /** Staggered content items */
  const item = (delay: number) => ({
    hidden:  prefersReduced ? { opacity: 0 as number } : { opacity: 0 as number, y: 10, filter: "blur(3px)" },
    visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring" as const, duration: 0.5, bounce: 0, delay },
    },
  });

  /** Peripheral floating chips */
  const chip = (xFrom: number, delay: number) => ({
    hidden:  prefersReduced ? { opacity: 0 as number, x: 0 } : { opacity: 0 as number, x: xFrom },
    visible: {
      opacity: 1, x: 0,
      transition: { type: "spring" as const, duration: 0.7, bounce: 0, delay },
    },
  });

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 pt-20 pb-8 md:px-8"
      aria-label="Hero"
    >

      {/* ── Background ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-[#001F1C]">
        <HeroWave />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001F1C]/70 via-transparent to-[#0D1A17]/90" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,237,168,0.05) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,237,168,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Peripheral chips (desktop only) ─────────────────────────────────── */}
      <motion.div
        variants={chip(-32, 0.5)}
        initial="hidden"
        animate="visible"
        style={{ rotate: -7, backgroundColor: "#091918", borderColor: "rgba(255,237,168,0.12)" }}
        className="absolute top-28 left-[8%] hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl z-20 border"
        aria-hidden="true"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#00C4A7] animate-pulse" />
        <span className="font-jakarta text-[11px] font-semibold text-[#ffeda8]/80 tracking-wide">
          750% ROI documentado
        </span>
      </motion.div>

      <motion.div
        variants={chip(32, 0.65)}
        initial="hidden"
        animate="visible"
        style={{ rotate: 6, backgroundColor: "#091918", borderColor: "rgba(0,196,167,0.15)" }}
        className="absolute bottom-28 right-[8%] hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl z-20 border"
        aria-hidden="true"
      >
        <CheckCircle className="w-3 h-3 text-[#00C4A7] flex-shrink-0" />
        <span className="font-jakarta text-[11px] font-semibold text-white/45 tracking-wide">
          Meta + Google Certificado
        </span>
      </motion.div>

      {/* ── Main card ───────────────────────────────────────────────────────── */}
      <motion.div
        variants={card}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        style={{
          backgroundColor: "#091A17",
          border: "1px solid rgba(255,237,168,0.08)",
          minHeight: "60vh",
        }}
      >

        {/* ── Left: copy ──────────────────────────────────────────────────── */}
        <div className="flex-1 p-8 md:p-10 lg:p-14 flex flex-col justify-center">

          <motion.span
            variants={item(0.22)}
            initial="hidden"
            animate="visible"
            className="mb-5 inline-flex items-center gap-2 font-jakarta text-[10px] font-bold tracking-[0.2em] text-[#00C4A7] uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C4A7] animate-pulse" />
            Estrategista Digital
          </motion.span>

          <motion.h1
            variants={item(0.32)}
            initial="hidden"
            animate="visible"
            className="font-playfair font-bold text-white leading-[1.08] mb-6
                       text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
          >
            Sua empresa merece uma{" "}
            <em className="not-italic text-[#ffeda8]">máquina de vendas</em>,{" "}
            não apostas de marketing
          </motion.h1>

          <motion.p
            variants={item(0.44)}
            initial="hidden"
            animate="visible"
            className="font-jakarta text-base text-white/50 max-w-lg mb-9 leading-relaxed"
          >
            Construo ecossistemas completos que convertem: do anúncio ao fechamento.
            Tráfego, funil, CRM e dashboards integrados.{" "}
            <span className="text-[#00C4A7] font-medium">Resultado previsível</span>, não sorte.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item(0.56)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-start gap-3"
          >
            <a
              href="https://wa.me/5585920017206?text=Ol%C3%A1%20Joabe%2C%20quero%20agendar%20uma%20consultoria%20estrat%C3%A9gica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                         bg-[#ffeda8] text-[#001F1C] font-bold text-sm font-jakarta
                         hover:bg-white transition-colors duration-150
                         shadow-lg shadow-[#ffeda8]/15 active:scale-[0.97]"
            >
              <Calendar className="w-4 h-4 flex-shrink-0" />
              Agendar Consultoria Gratuita
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full
                         border border-white/15 text-white/60 text-sm font-jakarta font-medium
                         hover:border-white/30 hover:text-white/90
                         transition-all duration-150 active:scale-[0.97]"
            >
              Ver Metodologia
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
            </a>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            variants={item(0.7)}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2.5"
          >
            {PROOF_ITEMS.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-white/30 text-xs font-jakarta">
                <Icon className="w-3.5 h-3.5 text-[#00C4A7] flex-shrink-0" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: dashboard visual ──────────────────────────────────────── */}
        <div
          className="w-full md:w-72 lg:w-80 xl:w-96 relative flex-shrink-0
                     flex items-center justify-center overflow-hidden
                     border-t md:border-t-0 md:border-l"
          style={{
            backgroundColor: "#061210",
            borderColor: "rgba(255,237,168,0.06)",
          }}
        >
          {/* Bar chart — full height of the panel */}
          <div className="absolute inset-0 flex items-end justify-center px-8 pb-14 pt-8 gap-2">
            {BARS.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: `${h}%`,
                  opacity: prefersReduced ? 0.35 : 0.12 + (h / 100) * 0.5,
                }}
                transition={
                  prefersReduced
                    ? { duration: 0 }
                    : { duration: 0.75, delay: 0.55 + i * 0.07, ease: EASE_EXPO }
                }
                className="flex-1 max-w-9 rounded-t-md"
                style={{ backgroundColor: "#00C4A7" }}
              />
            ))}
          </div>

          {/* Axis label */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
            <span className="font-jakarta text-[10px] text-white/18 tracking-[0.18em] uppercase">
              Resultado por mês
            </span>
          </div>

          {/* Central dial */}
          <motion.div
            className="relative z-30 w-32 h-32 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "#0D2420",
              border: "5px solid #061210",
              boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
            }}
            whileHover={prefersReduced ? {} : { scale: 1.05 }}
            transition={{ duration: 0.15 }}
          >
            {/* Rotating ring with glowing indicator */}
            {!prefersReduced && (
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, ease: "linear", repeat: Infinity }}
              >
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#00C4A7",
                    boxShadow: "0 0 8px 2px #00C4A7",
                  }}
                />
              </motion.div>
            )}

            {/* Metric */}
            <div className="text-center z-10 select-none">
              <div className="font-playfair text-[1.75rem] font-bold text-[#ffeda8] leading-none">
                750%
              </div>
              <div className="font-jakarta text-[9px] text-white/35 tracking-[0.2em] uppercase mt-1">
                ROI
              </div>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
