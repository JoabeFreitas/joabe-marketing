"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/ui/hero-section";
import PricingSection from "@/components/ui/pricing-section";
import HighlightCard from "@/components/ui/highlight-card";
import { CardStack } from "@/components/ui/card-stack";
import {
  Eye, Target, BarChart2, TrendingUp,
  GraduationCap, Users2, BookOpen, Award, BadgeCheck,
} from "lucide-react";

// ── Methodology data ──────────────────────────────────────────────────────────
const methodology = [
  {
    title: "Diagnóstico",
    description: [
      "Antes de fazer qualquer coisa, entendo onde você está.",
      "Auditoria do negócio, concorrentes e perfil real dos seus pacientes.",
    ],
    icon: <Eye className="w-8 h-8 text-[#00C4A7]" />,
  },
  {
    title: "Ecossistema",
    description: [
      "Montamos as peças do seu sistema de vendas.",
      "Funil, landing page, CRM e automações conectados.",
    ],
    icon: <Target className="w-8 h-8 text-[#00C4A7]" />,
  },
  {
    title: "Aquisição",
    description: [
      "Anúncios no Meta e Google + redes sociais.",
      "Tudo apontando para o mesmo lugar, com a mesma mensagem.",
    ],
    icon: <TrendingUp className="w-8 h-8 text-[#00C4A7]" />,
  },
  {
    title: "Otimização",
    description: [
      "Acompanho os números toda semana.",
      "O que funciona escalamos. O que não funciona, ajustamos.",
    ],
    icon: <BarChart2 className="w-8 h-8 text-[#00C4A7]" />,
  },
];

// ── Mentors data ──────────────────────────────────────────────────────────────
const mentors = [
  { name: "Pedro Sobral",      role: "Tráfego Pago",           course: "Subido de Tráfego",      tags: "Meta Ads · Google Ads · Estratégia", image: "/mentors/Pedro Sobral.webp" },
  { name: "Rafael Kiso",       role: "Tráfego Orgânico",       course: "Tráfego Orgânico Pro",   tags: "SEO · Instagram · Autoridade",        image: "/mentors/Rafael Kiso.webp" },
  { name: "Ícaro de Carvalho", role: "Copywriting",            course: "Copy que Converte",      tags: "Persuasão · Texto · Conversão",       image: "/mentors/Icaro de Carvalho.webp" },
  { name: "Samer Agi",         role: "Comunicação",            course: "Comunicação Magnética",  tags: "Posicionamento · Voz · Marca",        image: "/mentors/Samer Agi.webp" },
  { name: "Giullya Becker",    role: "Posicionamento",         course: "Posicionamento Premium", tags: "Nicho · Autoridade · Identidade",     image: "/mentors/Giullya Becker.webp" },
  { name: "Carlos Busch",      role: "Vendas",                 course: "Vendas na Prática",      tags: "Funil · Fechamento · CRM",            image: "/mentors/Carlos Busch.webp" },
  { name: "Fabio Ricotta",     role: "Inteligência Artificial",course: "IA na Prática",          tags: "Automação · Produtividade · IA",      image: "/mentors/Fabio Ricotta.webp" },
  { name: "Wendell Carvalho",  role: "Dev. Pessoal",           course: "Alta Performance",       tags: "Hábitos · Foco · Disciplina",         image: "/mentors/Wendell Carvalho.webp" },
  { name: "Eduardo Mira",      role: "Finanças",               course: "Finanças Digitais",      tags: "Gestão · Lucro · Precificação",       image: "/mentors/Eduardo Mira.webp" },
  { name: "Priscila Zillo",    role: "Lançamentos",            course: "Lançamentos Digitais",   tags: "Produto · Oferta · Campanha",         image: "/mentors/Priscila Zillo.webp" },
];

// ── Credentials data ──────────────────────────────────────────────────────────
const credentials = [
  {
    id: 1,
    title: "Graduando em Marketing",
    description: "Universidade de Fortaleza — UNIFOR",
    imageSrc: "/credentials/Unifor.webp",
    tag: "Formação",
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "Comunidade Subido de Tráfego",
    description: "Mentoria avançada de tráfego pago",
    imageSrc: "/credentials/Comunidade Subido.webp",
    tag: "Mentoria",
    icon: Users2,
  },
  {
    id: 3,
    title: "Disciplina de Concurseiro",
    description: "Metodologia de alta performance e foco",
    imageSrc: "/credentials/Concurseiro.webp",
    tag: "Metodologia",
    icon: BookOpen,
    gradient: null,
  },
  {
    id: 4,
    title: "Certificação Meta Ads",
    description: "Meta Certified Digital Marketing Associate",
    imageSrc: null,
    tag: "Certificação Oficial",
    icon: Award,
    gradient: "from-blue-950 via-[#1a1040] to-neutral-950",
    cert: "XSY2UQ",
    platform: "Meta",
  },
  {
    id: 5,
    title: "Certificação Google Ads",
    description: "Google Ads Search Certification — CST",
    imageSrc: null,
    tag: "Certificação Oficial",
    icon: Award,
    gradient: "from-[#0d2a1a] via-neutral-950 to-[#0d1a2a]",
    cert: "HX7ARS",
    platform: "Google",
  },
];

// ── Grid background ───────────────────────────────────────────────────────────
const GRID = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
} as const;

// ── Types ─────────────────────────────────────────────────────────────────────
type CredentialItem = (typeof credentials)[number];

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* 1. HERO */}
      <HeroSection />

      {/* 2. METHODOLOGY */}
      <section
        id="metodologia"
        className="py-24 px-6 md:px-12 bg-black"
        style={GRID}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-green-400/30 text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Metodologia
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Como transformamos sua{" "}
              <span className="text-green-400">presença digital</span> em pacientes
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base">
              Um sistema em 4 etapas que elimina achismos e gera previsibilidade real na sua agenda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {methodology.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <HighlightCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  theme="dark"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MENTORS */}
      <section
        id="resultados"
        className="py-24 px-6 md:px-12 bg-neutral-950"
        style={GRID}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-green-400/30 text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Formação
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Formado pelos{" "}
              <em className="text-green-400 not-italic">melhores do Brasil.</em>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base">
              Membro da Década Milionária, o ecossistema de mentoria mais completo do marketing digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {mentors.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400/40 hover:bg-white/10 transition-all duration-300 overflow-hidden cursor-default"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 bg-neutral-800 group-hover:border-green-400/50 transition-colors duration-300">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white text-xs font-bold leading-tight">{mentor.name}</p>
                  <p className="text-green-400 text-[10px] mt-0.5 leading-tight font-semibold">{mentor.role}</p>
                </div>

                {/* Hover overlay with details */}
                <div className="absolute inset-0 rounded-2xl bg-black/95 border border-green-400/30 flex flex-col items-center justify-center gap-2 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-black text-center leading-tight">{mentor.name}</p>
                  <p className="text-green-400 text-[10px] font-bold text-center">{mentor.role}</p>
                  <div className="w-8 h-px bg-green-400/40 my-0.5" />
                  <p className="text-white/60 text-[9px] text-center leading-tight">{mentor.course}</p>
                  <p className="text-white/40 text-[9px] text-center leading-tight">{mentor.tags}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CREDENTIALS */}
      <section
        id="credenciais"
        className="py-24 px-6 md:px-12 bg-neutral-950"
        style={GRID}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-green-400/30 text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Credenciais
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Preparado para <span className="text-green-400">gerar resultados reais</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base">
              Formação sólida, certificações oficiais e metodologia comprovada.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <CardStack
              items={credentials}
              cardWidth={540}
              cardHeight={340}
              overlap={0.44}
              autoAdvance
              intervalMs={3500}
              showDots
              renderCard={(item: CredentialItem) => {
                const Icon = item.icon;
                if (!item.imageSrc) {
                  // Certificate card
                  return (
                    <div className={`relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} border border-white/10 p-8 flex flex-col justify-between`}>
                      {/* Decorative corner lines */}
                      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg" />
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg" />
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-lg" />

                      <div className="flex items-start justify-between">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-semibold mb-3">
                            {item.tag}
                          </span>
                          <h3 className="text-white text-xl font-black">{item.title}</h3>
                          <p className="text-white/60 text-sm mt-1">{item.description}</p>
                        </div>
                        <BadgeCheck className="w-10 h-10 text-green-400 flex-shrink-0 ml-4" />
                      </div>

                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-white/30 text-xs font-mono uppercase tracking-widest">Código</p>
                          <p className="text-white font-mono text-lg font-bold tracking-widest">{item.cert}</p>
                        </div>
                        <Icon className="w-8 h-8 text-white/20" />
                      </div>
                    </div>
                  );
                }
                // Photo card
                return (
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-semibold mb-2">
                        {item.tag}
                      </span>
                      <h3 className="text-white text-lg font-black">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </section>

      {/* 5. PRICING */}
      <section id="planos" className="bg-black" style={GRID}>

        {/* Sales bridge */}
        <div className="pt-24 pb-20 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-6">A decisão que muda a agenda</p>

              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-8">
                Toda semana você perde pacientes<br />
                para quem faz marketing{" "}
                <span className="relative inline-block">
                  <span className="text-white/30 line-through decoration-red-500">pior</span>
                  {" "}que você.
                </span>
              </h2>

              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                Não porque eles são melhores profissionais.<br />
                Porque eles têm sistema e você ainda não tem.
              </p>

              {/* Contrast list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                {[
                  { sem: "Posts sem retorno", com: "Conteúdo que converte antes da consulta" },
                  { sem: "Anúncios sem resultado", com: "Tráfego qualificado para quem já quer pagar" },
                  { sem: "Agenda dependente de indicação", com: "Previsibilidade real mês a mês" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="flex flex-col gap-1 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-400/30 transition-colors duration-200 cursor-default"
                  >
                    <p className="text-white/30 text-xs line-through">{item.sem}</p>
                    <p className="text-green-400 text-sm font-semibold">{item.com}</p>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-center justify-center p-4 rounded-xl bg-green-400/10 border border-green-400/30"
                >
                  <p className="text-green-400 text-sm font-black text-center">Abaixo está o sistema.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pricing cards */}
        <PricingSection />
      </section>

      {/* 6. CTA */}
      <section className="py-24 px-6 md:px-12 bg-black border-t border-white/5" style={GRID}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Pronto para lotar{" "}
              <span className="text-green-400">sua agenda?</span>
            </h2>
            <p className="text-white/50 text-base mb-10 max-w-xl mx-auto">
              Entre em contato agora e descubra qual estratégia faz mais sentido para o seu momento.
            </p>
            <a
              href="https://wa.me/5585920017206?text=Ol%C3%A1%20Joabe%2C%20vi%20sua%20proposta%20e%20quero%20lotar%20minha%20agenda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-green-400 text-black font-bold text-lg hover:bg-green-300 transition-colors shadow-2xl shadow-green-400/20"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar com Joabe agora
            </a>
          </motion.div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-8 px-6 border-t border-white/5 bg-black">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© 2026 Joabe Freitas · Gestor de Marketing Digital</p>
          <a
            href="mailto:gestorjoabeofreitas@gmail.com"
            className="text-white/30 text-xs hover:text-green-400 transition-colors"
          >
            gestorjoabeofreitas@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
