"use client";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const NAV_LINKS: { label: string; href: string; active?: boolean }[] = [
  { label: "Início",   href: "#",         active: true },
  { label: "Sobre",    href: "#sobre"                  },
  { label: "Método",   href: "#metodo"                 },
  { label: "Serviços", href: "#servicos"               },
  { label: "Case",     href: "#case"                   },
  { label: "Contato",  href: "#contato"                },
];

export default function StrategyHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden" aria-label="Hero">

      {/* ── Background video ──────────────────────────────────────────────── */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src={VIDEO_SRC}
        aria-hidden="true"
      />

      {/* Subtle dark wash — video provides the depth, this just ensures legibility */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* ── All content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ── Navigation ────────────────────────────────────────────────── */}
        <nav className="w-full px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">

            {/* Logo */}
            <a
              href="#"
              className="text-3xl tracking-tight text-white select-none"
              style={{ fontFamily: "var(--font-display, 'Instrument Serif', serif)" }}
            >
              JF<sup className="text-xs align-super ml-0.5">®</sup>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map(({ label, href, active }) => (
                <a
                  key={label}
                  href={href}
                  className={`text-sm transition-colors duration-150 font-body ${
                    active ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-body, 'Inter', sans-serif)" }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5585920017206?text=Ol%C3%A1%20Joabe%2C%20quero%20agendar%20uma%20consultoria%20estrat%C3%A9gica"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] transition-transform duration-150 hidden md:inline-flex items-center"
              style={{ fontFamily: "var(--font-body, 'Inter', sans-serif)" }}
            >
              Consultoria
            </a>
          </div>
        </nav>

        {/* ── Hero copy — vertically centered in remaining space ─────────── */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">

          <h1
            className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl font-normal text-white max-w-5xl"
            style={{
              fontFamily: "var(--font-display, 'Instrument Serif', serif)",
              lineHeight: 0.95,
              letterSpacing: "-2.46px",
            }}
          >
            Sua empresa merece uma{" "}
            <em className="not-italic text-white/45">máquina de vendas</em>,{" "}
            não{" "}
            <em className="not-italic text-white/45">apostas de marketing</em>
          </h1>

          <p
            className="animate-fade-rise-delay text-white/55 text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
            style={{ fontFamily: "var(--font-body, 'Inter', sans-serif)" }}
          >
            Construo ecossistemas completos que convertem: do anúncio ao fechamento.
            Tráfego, funil, CRM e dashboards integrados. Resultado previsível, não sorte.
          </p>

          <a
            href="https://wa.me/5585920017206?text=Ol%C3%A1%20Joabe%2C%20quero%20agendar%20uma%20consultoria%20estrat%C3%A9gica"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-white mt-12 hover:scale-[1.03] transition-transform duration-150 inline-block"
            style={{ fontFamily: "var(--font-body, 'Inter', sans-serif)" }}
          >
            Agendar Consultoria Gratuita
          </a>

          {/* Proof row */}
          <div
            className="animate-fade-rise-delay-2 mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/30 text-xs"
            style={{ fontFamily: "var(--font-body, 'Inter', sans-serif)" }}
          >
            <span>Graduando em Marketing · UNIFOR</span>
            <span>Meta + Google Ads Certificado</span>
            <span>Case B2B Documentado</span>
          </div>
        </div>

      </div>
    </section>
  );
}
