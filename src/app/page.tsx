"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroWave from "@/components/ui/dynamic-wave-canvas-background";
import HighlightCard from "@/components/ui/highlight-card";
import HolographicCard from "@/components/ui/holographic-card";
import ProfileCard, { WhatsAppIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/profile-card";
import {
  Eye, BarChart2, TrendingUp,
  Search, Network, Megaphone, LineChart,
  Zap, Share2, GitBranch, Globe, PieChart,
  MessageCircle, ChevronDown, Star, CheckCircle,
  ArrowRight, Calendar, GraduationCap, BookOpen,
  Target, Database, Menu, X
} from "lucide-react";

// ── Inline styles reutilizáveis ──────────────────────────────────────────────

const GRID_DARK = {
  backgroundColor: "#0F1A18",
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
} as const;

const GRID_LIGHT = {
  backgroundColor: "#F5F2ED",
  backgroundImage:
    "linear-gradient(rgba(0,54,49,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,54,49,0.05) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
} as const;

// ── DATA ─────────────────────────────────────────────────────────────────────

const benefits = [
  {
    title: "Visão 360° do Negócio",
    icon: <Eye className="w-8 h-8 text-[#00C4A7]" />,
    description: [
      "Não existe campanha isolada.",
      "Analiso todo o funil de vendas para identificar onde você perde dinheiro e onde pode escalar com segurança.",
    ],
  },
  {
    title: "Estratégia Customizada",
    icon: <Target className="w-8 h-8 text-[#00C4A7]" />,
    description: [
      "Nunca aplico templates.",
      "A estratégia nasce dos seus dados, do seu mercado e do perfil real dos seus clientes.",
    ],
  },
  {
    title: "Dados Rigorosos",
    icon: <BarChart2 className="w-8 h-8 text-[#00C4A7]" />,
    description: [
      "Toda decisão tem uma métrica.",
      "Dashboards em tempo real. Você vê exatamente onde cada real foi investido e o que retornou.",
    ],
  },
  {
    title: "Lucro Previsível",
    icon: <TrendingUp className="w-8 h-8 text-[#00C4A7]" />,
    description: [
      "O objetivo não é vaidade. Curtidas e seguidores não pagam boleto.",
      "É criar um sistema que gera receita previsível mês após mês.",
    ],
  },
];

const metodo = [
  {
    num: "01",
    title: "Diagnóstico",
    icon: <Search className="w-6 h-6 text-[#00C4A7]" />,
    descricao:
      "Antes de fazer qualquer coisa, preciso entender onde você está. Olhamos para o seu negócio, os seus concorrentes e quem são os seus clientes de verdade. Isso define tudo que vem depois.",
    tags: ["Auditoria", "Benchmark", "ICP"],
  },
  {
    num: "02",
    title: "Ecossistema",
    icon: <Network className="w-6 h-6 text-[#00C4A7]" />,
    descricao:
      "Com base no que encontramos, montamos as peças do seu sistema de vendas: funil, página de captura, CRM e automações de acompanhamento. Cada parte no lugar certo, conectada às outras.",
    tags: ["Funil", "Landing Pages", "CRM"],
  },
  {
    num: "03",
    title: "Aquisição",
    icon: <Megaphone className="w-6 h-6 text-[#00C4A7]" />,
    descricao:
      "Aqui a gente vai buscar clientes para o seu negócio. Anúncios no Meta e Google, mais o trabalho nas redes sociais. Tudo apontando para o mesmo lugar, com a mesma mensagem.",
    tags: ["Meta Ads", "Google Ads", "Social Media"],
  },
  {
    num: "04",
    title: "Otimização",
    icon: <LineChart className="w-6 h-6 text-[#00C4A7]" />,
    descricao:
      "Acompanhamos os números toda semana. O que está gerando resultado, escalamos. O que não está funcionando, ajustamos antes de continuar gastando. Sem desperdício.",
    tags: ["Dashboards", "Relatórios", "A/B Tests"],
  },
];

const servicos = [
  {
    title: "Tráfego Pago",
    icon: <Zap className="w-7 h-7 text-[#003631]" />,
    description: [
      "Meta Ads + Google Ads estrategicamente configurados.",
      "Campanhas que convertem, não que apenas aparecem.",
    ],
  },
  {
    title: "Social Media",
    icon: <Share2 className="w-7 h-7 text-[#003631]" />,
    description: [
      "Conteúdo com propósito de venda, não de entretenimento.",
      "Autoridade que vira oportunidade.",
    ],
  },
  {
    title: "Funil de Vendas",
    icon: <GitBranch className="w-7 h-7 text-[#003631]" />,
    description: [
      "Jornada completa do desconhecido ao cliente pagante.",
      "Cada etapa mapeada e otimizada.",
    ],
  },
  {
    title: "Sites e LPs",
    icon: <Globe className="w-7 h-7 text-[#003631]" />,
    description: [
      "Páginas construídas para converter, não para impressionar.",
      "Copy + design + velocidade.",
    ],
  },
  {
    title: "Planilhas e Dashboards",
    icon: <PieChart className="w-7 h-7 text-[#003631]" />,
    description: [
      "Gestão visual dos seus números em tempo real.",
      "Decisões baseadas em dados, não em intuição.",
    ],
  },
  {
    title: "CRM",
    icon: <Database className="w-7 h-7 text-[#003631]" />,
    description: [
      "Sistema de relacionamento que não deixa lead escapar.",
      "Automação de acompanhamento inteligente.",
    ],
  },
];

const faqs = [
  {
    q: "Você faz só tráfego pago, ou serviços isolados também?",
    a: "Sim, também trabalho com serviços isolados. Gestão de tráfego pago, social media ou qualquer outra frente pode ser contratada separadamente. Mas se puder, recomendo o ecossistema completo. Um anúncio que leva para uma página que não converte, ou um lead que cai num CRM que ninguém acompanha, é verba jogada fora. O resultado real aparece quando as peças trabalham juntas.",
  },
  {
    q: "Qual o investimento mínimo para começar?",
    a: "Não existe um número fixo porque cada negócio tem uma realidade diferente. O investimento é definido após o diagnóstico inicial (gratuito), onde identificamos o tamanho do seu mercado, seu ticket médio e o potencial de retorno. O que posso garantir: nunca recomendarei uma verba que não faça sentido financeiro para o seu momento.",
  },
  {
    q: "Como acompanho os resultados?",
    a: "Você tem acesso a um dashboard em tempo real com as principais métricas da sua operação. Além disso, enviamos relatórios semanais com análise do período, comparativo com metas e próximos passos. Transparência total: você vê exatamente para onde cada real está indo.",
  },
  {
    q: "Funciona para qualquer nicho?",
    a: "Atendo quase todos os nichos. A metodologia se adapta bem a negócios de serviço, comércio local, B2B e vendas de alto ticket. As exceções são dropshipping e nichos black. Fora isso, se o seu negócio tem produto ou serviço com valor real para o cliente, consigo ajudar.",
  },
  {
    q: "Existe contrato?",
    a: "Sim, trabalhamos com contrato. Ele protege os dois lados: define escopo, prazos, entregas e responsabilidades. Não é uma prisão, é uma garantia de que estamos alinhados desde o início. A continuidade da parceria depende dos resultados, não de cláusulas.",
  },
];

const caseStats = [
  { label: "Total Investido", value: "R$2K", sub: "aprox. R$450 por mês" },
  { label: "Receita Gerada", value: "R$17K", sub: "Vendas atribuídas" },
  { label: "Pico de ROAS", value: "10×", sub: "Em um mês específico" },
  { label: "ROI Total", value: "750%", sub: "Período completo" },
];

const profileSocials = [
  {
    icon: <WhatsAppIcon />,
    href: "https://wa.me/5585920017206",
    label: "WhatsApp",
  },
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/joabeofreitas/",
    label: "Instagram",
  },
  {
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/joabe-freitas-38951a299/",
    label: "LinkedIn",
  },
];

// ── PAGE ──────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Case", href: "#case" },
  { label: "Contato", href: "#contato" },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative">

      {/* ── Sticky Navbar ────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#001F1C]/95 backdrop-blur-sm border-b border-white/8 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-playfair text-xl font-bold text-[#ffeda8] tracking-tight select-none"
          >
            JF
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-lg text-white/60 text-sm font-jakarta font-medium hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5585920017206?text=Ol%C3%A1%20Joabe%2C%20quero%20agendar%20uma%20consultoria%20estrat%C3%A9gica"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 rounded-lg bg-[#ffeda8] text-[#001F1C] text-sm font-jakarta font-bold hover:bg-white transition-colors"
            >
              Consultoria
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/15 text-white hover:bg-white/8 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#001F1C]/98 border-b border-white/8 overflow-hidden"
            >
              <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-white/70 font-jakarta font-medium hover:text-white hover:bg-white/8 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/5585920017206?text=Ol%C3%A1%20Joabe%2C%20quero%20agendar%20uma%20consultoria%20estrat%C3%A9gica"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 px-4 py-3 rounded-lg bg-[#ffeda8] text-[#001F1C] font-jakarta font-bold text-center hover:bg-white transition-colors"
                >
                  Agendar Consultoria Gratuita
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Floating WhatsApp Button ──────────────────── */}
      <motion.a
        href="https://wa.me/5585920017206?text=Ol%C3%A1%20Joabe%2C%20quero%20agendar%20uma%20consultoria%20estrat%C3%A9gica"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-200"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>

      {/* ══════════════════════════════════════════════
          1. HERO — Dark
      ══════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={GRID_DARK}
      >
        {/* Animated canvas background */}
        <div className="absolute inset-0">
          <HeroWave />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001F1C]/80 via-[#001F1C]/60 to-[#0F1A18]/95" />
        </div>

        {/* Grid reinforcement */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,237,168,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,237,168,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C4A7]/30 bg-[#00C4A7]/10 text-[#00C4A7] text-xs font-bold tracking-widest uppercase font-jakarta mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C4A7] animate-pulse" />
              Marketing Digital que já mostrou resultado
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Sua empresa merece uma{" "}
            <span className="mark-d">máquina de vendas</span>,{" "}
            não apostas de marketing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-jakarta text-base sm:text-lg text-white/65 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Construo ecossistemas completos que convertem: do anúncio ao fechamento.
            Tráfego, funil, CRM e dashboards integrados.{" "}
            <span className="mark-r">Resultado previsível</span>, não sorte.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/5585920017206?text=Ol%C3%A1%20Joabe%2C%20quero%20agendar%20uma%20consultoria%20estrat%C3%A9gica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ffeda8] text-[#001F1C] font-bold text-base font-jakarta hover:bg-white transition-colors shadow-xl shadow-[#ffeda8]/20"
            >
              <Calendar className="w-5 h-5" />
              Agendar Consultoria Gratuita
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 text-white/80 font-semibold text-base font-jakarta hover:border-white/40 hover:text-white transition-all"
            >
              Ver Metodologia
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
          >
            {[
              { icon: GraduationCap, text: "Graduando em Marketing · UNIFOR" },
              { icon: BarChart2, text: "Meta + Google Ads Certificado" },
              { icon: CheckCircle, text: "Case B2B Documentado" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/40 text-xs font-jakarta">
                <Icon className="w-3.5 h-3.5 text-[#00C4A7]" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. SOBRE — Claro
      ══════════════════════════════════════════════ */}
      <section id="sobre" className="py-24 px-6" style={GRID_LIGHT}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B5E4B] font-jakarta">
              Quem está por trás da estratégia
            </span>
          </motion.div>

          <ProfileCard
            name="Joabe Freitas"
            role="Estrategista Digital | Ecossistemas de Vendas B2B"
            bio="Fui formado para entender marketing como ciência, não arte. Cada projeto que assumo começa com análise de dados e termina com lucro mensurável. Não vendo presença digital. Construo sistemas que geram receita previsível. Especializado em arquitetar ecossistemas completos: tráfego pago, funis de conversão, CRM e dashboards integrados. Meu critério de sucesso é simples: crescimento real no seu faturamento."
            imageUrl={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/joabe-avatar.webp`}
            tags={["Tráfego Pago", "Funis de Vendas", "CRM", "Dashboards", "Meta Ads", "Google Ads", "Social Media"]}
            socials={profileSocials}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#003631]/10 rounded-2xl overflow-hidden border border-[#003631]/10"
          >
            {[
              { num: "750%", label: "ROI documentado" },
              { num: "6+", label: "Frentes de atuação" },
              { num: "100%", label: "Foco em lucro real" },
              { num: "0", label: "Achismos. Só dados." },
            ].map((stat) => (
              <div key={stat.label} className="bg-white px-6 py-8 text-center">
                <p className="font-playfair text-3xl font-bold text-[#003631] mb-1">{stat.num}</p>
                <p className="text-[#6B5E4B] text-xs font-jakarta">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. BENEFÍCIOS — Dark
      ══════════════════════════════════════════════ */}
      <section id="beneficios" className="py-24 px-6" style={GRID_DARK}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#00C4A7]/30 bg-[#00C4A7]/10 text-[#00C4A7] text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
              Por que funciona
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
              O que você ganha quando{" "}
              <span className="mark-d">sistemas substituem achismos</span>
            </h2>
            <p className="text-white/50 font-jakarta text-base max-w-xl mx-auto">
              Cada benefício é consequência direta de uma metodologia estruturada, não de sorte ou volume de posts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
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

      {/* ══════════════════════════════════════════════
          4. AUTORIDADE — Claro
      ══════════════════════════════════════════════ */}
      <section id="autoridade" className="py-24 px-6" style={GRID_LIGHT}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B5E4B] font-jakarta mb-4 block">
                Base de Autoridade
              </span>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#001F1C] mb-6 leading-tight">
                Marketing aprendido na teoria.{" "}
                <span className="mark-l">Refinado na prática.</span>
              </h2>
              <div className="space-y-4 font-jakarta text-[#6B5E4B] text-base leading-relaxed">
                <p>
                  Graduando em Marketing na UNIFOR, 6ª melhor universidade particular do Brasil, com foco em comportamento do consumidor, estratégia de comunicação e marketing digital. A academia me deu o mapa; os projetos reais me ensinaram a navegar.
                </p>
                <p>
                  Membro ativo da Comunidade Subido de Tráfego, o maior ecossistema de gestores de tráfego do Brasil. Certificações ativas em Meta Ads e Google Ads, atualizadas continuamente com estratégias validadas em campanhas reais.
                </p>
                <p>
                  Antes do marketing, anos preparando concursos públicos desenvolveram o que nenhum curso ensina:{" "}
                  <strong className="text-[#003631]">rigor analítico, consistência e foco extremo em resultado</strong>. A mesma disciplina aplicada hoje em cada estratégia que entrego.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                {
                  icon: GraduationCap,
                  title: "Graduando em Marketing",
                  sub: "UNIFOR · 6ª melhor universidade particular do Brasil",
                  color: "#003631",
                },
                {
                  icon: CheckCircle,
                  title: "Certificação Meta Ads",
                  sub: "Comunidade Subido de Tráfego · Cód. XSY2UQ",
                  color: "#00C4A7",
                },
                {
                  icon: CheckCircle,
                  title: "Certificação Google Ads",
                  sub: "Comunidade Subido de Tráfego · Cód. HX7ARS",
                  color: "#00C4A7",
                },
                {
                  icon: BookOpen,
                  title: "Formação Multidisciplinar",
                  sub: "Tráfego · Copy · Posicionamento · CRM · Finanças",
                  color: "#6B5E4B",
                },
              ].map(({ icon: Icon, title, sub, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#003631]/10 hover:border-[#003631]/25 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <p className="font-playfair font-bold text-[#001F1C] text-base">{title}</p>
                    <p className="font-jakarta text-[#6B5E4B] text-xs mt-0.5">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. MÉTODO — Dark
      ══════════════════════════════════════════════ */}
      <section id="metodo" className="py-24 px-6" style={GRID_DARK}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#ffeda8]/20 bg-[#ffeda8]/8 text-[#ffeda8] text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
              Processo
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
              O método que transforma{" "}
              <span className="mark-d">tráfego em receita</span>
            </h2>
            <p className="text-white/50 font-jakarta text-base max-w-xl mx-auto">
              Quatro etapas sequenciais. Cada uma depende da anterior. Nenhuma é pulada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {metodo.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative p-8 rounded-2xl border border-white/8 bg-[#001F1C]/60 hover:border-[#00C4A7]/30 hover:bg-[#001F1C]/80 transition-all duration-300"
              >
                <div className="absolute top-6 right-6 font-playfair text-5xl font-black text-white/5 group-hover:text-[#003631]/40 transition-colors duration-300 select-none leading-none">
                  {step.num}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg border border-[#00C4A7]/20 bg-[#00C4A7]/8">
                    {step.icon}
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-white">{step.title}</h3>
                </div>

                <p className="font-jakarta text-white/55 text-sm leading-relaxed mb-5">
                  {step.descricao}
                </p>

                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-jakarta bg-[#ffeda8]/8 border border-[#ffeda8]/15 text-[#ffeda8]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. SERVIÇOS — Claro
      ══════════════════════════════════════════════ */}
      <section id="servicos" className="py-24 px-6" style={GRID_LIGHT}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B5E4B] font-jakarta mb-4 block">
              Frentes de Atuação
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#001F1C] mb-4">
              Seis frentes.{" "}
              <span className="mark-l">Um ecossistema integrado.</span>
            </h2>
            <p className="text-[#6B5E4B] font-jakarta text-base max-w-xl mx-auto">
              Cada serviço pode atuar isolado, mas o resultado real vem quando eles trabalham em conjunto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicos.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <HighlightCard
                  title={s.title}
                  description={s.description}
                  icon={s.icon}
                  theme="light"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. CASE — Dark
      ══════════════════════════════════════════════ */}
      <section id="case" className="py-24 px-6" style={GRID_DARK}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#ffeda8]/30 text-[#ffeda8] text-xs font-bold tracking-widest uppercase font-jakarta mb-8">
              <Star className="w-3 h-3 fill-[#ffeda8]" />
              Case Real — Barroso Veículos
            </span>

            <div className="mb-3">
              <span
                className="font-playfair font-black leading-none tracking-tight"
                style={{
                  fontSize: "clamp(5rem, 18vw, 140px)",
                  color: "#ffeda8",
                  display: "block",
                }}
              >
                750%
              </span>
            </div>
            <p className="text-white/60 font-jakarta text-base">
              ROI total no período. <span className="mark-r">Pico de 10× em um único mês.</span>
            </p>
          </motion.div>

          <HolographicCard className="rounded-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/10"
            >
              {caseStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-[#001F1C]/80 px-6 py-8 flex flex-col gap-2 text-center"
                >
                  <p className="text-[#ffeda8]/60 text-[10px] font-bold uppercase tracking-widest font-jakarta">
                    {stat.label}
                  </p>
                  <p className="font-playfair font-black text-[#ffeda8] leading-tight text-3xl md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="text-white/35 text-xs font-jakarta">{stat.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </HolographicCard>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {[
              { icon: Target, text: "Foco em leads para veículos de alto valor. Público qualificado, não volume." },
              { icon: Network, text: "Estratégia integrada Meta Ads + Google Ads. Sem dispersão de verba." },
              { icon: LineChart, text: "Cada venda atribuída documentada. Planilha disponível para verificação." },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex gap-3 p-5 rounded-xl border border-white/8 bg-white/4">
                <Icon className="w-5 h-5 text-[#00C4A7] flex-shrink-0 mt-0.5" />
                <p className="text-white/55 text-sm font-jakarta leading-relaxed">{text}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-center text-[#ffeda8]/30 text-xs italic mt-8 font-jakarta"
          >
            Planilha disponível para quem quiser verificar cada venda atribuída.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. FAQ — Gradiente
      ══════════════════════════════════════════════ */}
      <section
        id="faq"
        className="relative py-24 px-6 overflow-hidden"
        style={{ background: "linear-gradient(165deg, #001F1C, #003631, #1A6B5A)" }}
      >
        {/* Grid overlay for gradient section */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/15 text-white/60 text-xs font-bold tracking-widest uppercase font-jakarta mb-5">
              Perguntas Frequentes
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
              Antes de decidir,{" "}
              <span className="mark-d">veja o que perguntam</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-white/15 overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-playfair font-semibold text-white text-base leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#ffeda8] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-white/10 mb-4" />
                        <p className="font-jakarta text-white/65 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          9. CTA FINAL — Dark
      ══════════════════════════════════════════════ */}
      <section id="contato" className="py-28 px-6" style={GRID_DARK}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#E24B4A]/30 bg-[#E24B4A]/10 text-[#E24B4A] text-xs font-bold tracking-widest uppercase font-jakarta mb-8">
              Você ainda está deixando dinheiro na mesa
            </span>

            <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Cada mês sem um sistema é um mês{" "}
              <span className="mark-d italic">pagando para aprender sozinho</span>.
            </h2>

            <p className="font-jakarta text-white/55 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-4">
              Anúncio sem funil. Funil sem CRM. CRM sem follow-up. Cada peça solta é verba desperdiçada e oportunidade perdida.
            </p>
            <p className="font-jakarta text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12">
              A consultoria é gratuita. Em 30 minutos você sai com um diagnóstico real do que está trancando o crescimento do seu negócio.
            </p>

            <a
              href="https://wa.me/5585920017206?text=Ol%C3%A1%20Joabe%2C%20quero%20agendar%20minha%20consultoria%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-[#ffeda8] text-[#001F1C] font-bold text-lg font-jakarta hover:bg-white transition-colors shadow-2xl shadow-[#ffeda8]/20 mb-4"
            >
              <MessageCircle className="w-6 h-6" />
              Quero minha consultoria gratuita
            </a>

            <p className="text-white/25 text-xs font-jakarta mb-12">
              30 minutos. Sem enrolação. Sem compromisso.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-10 border-t border-white/8">
              {[
                { num: "750%", label: "ROI documentado" },
                { num: "R$17K", label: "Receita gerada para cliente" },
                { num: "6", label: "Frentes de atuação integradas" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-playfair text-2xl font-bold text-[#ffeda8] mb-0.5">{stat.num}</p>
                  <p className="text-white/35 text-xs font-jakarta">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-6 border-t border-white/5"
        style={{ backgroundColor: "#001F1C" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-jakarta">
            © 2026 Joabe Freitas · Estrategista Digital
          </p>
          <a
            href="mailto:gestorjoabeofreitas@gmail.com"
            className="text-white/30 text-xs font-jakarta hover:text-[#00C4A7] transition-colors"
          >
            gestorjoabeofreitas@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
