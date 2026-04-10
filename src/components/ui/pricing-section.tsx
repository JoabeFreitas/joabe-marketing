"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Share2, Zap } from "lucide-react";
import { useRef, useState, MouseEvent } from "react";

const plans = [
  {
    name: "Tráfego Pago",
    description: "Ideal para nutricionistas que querem atrair pacientes qualificados com anúncios estratégicos no Meta e Google Ads.",
    price: 797,
    period: "mensal",
    buttonText: "Quero mais pacientes",
    popular: false,
    icon: TrendingUp,
    spotlightColor: "rgba(255,255,255,0.08)",
    includes: [
      "O que está incluso:",
      "Configuração de BM e Pixel",
      "Gestão de Anúncios (Meta Ads)",
      "Gestão de Anúncios (Google Ads)",
      "Relatórios mensais detalhados",
      "Busca pelo melhor Custo por Lead",
    ],
  },
  {
    name: "Social Media",
    description: "Para nutricionistas que querem construir autoridade online, engajar seguidores e converter perfil em pacientes.",
    price: 797,
    period: "mensal",
    buttonText: "Quero autoridade digital",
    popular: false,
    icon: Share2,
    spotlightColor: "rgba(255,255,255,0.08)",
    includes: [
      "O que está incluso:",
      "Calendário editorial mensal",
      "Escrita de Copys persuasivas",
      "Interação no Direct e Comentários",
      "Análise de métricas mensais",
      "Posicionamento de autoridade",
    ],
  },
  {
    name: "Marketing Digital Completo",
    description: "A solução integrada para nutricionistas que querem agenda lotada, autoridade digital e faturamento previsível.",
    price: 1347,
    period: "mensal",
    buttonText: "Quero a solução completa",
    popular: true,
    icon: Zap,
    spotlightColor: "rgba(74,222,128,0.18)",
    includes: [
      "Tudo dos planos anteriores, mais:",
      "Tráfego Pago + Social Media",
      "Dashboards de métricas personalizados",
      "CRM e fluxos automatizados",
      "Suporte total e Gestão Integrada",
    ],
  },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const Icon = plan.icon;
  const divRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const whatsappMessage = encodeURIComponent(
    `Olá Joabe, vi sua proposta e tenho interesse no plano de ${plan.name}`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="h-full"
    >
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        className={cn(
          "relative rounded-xl overflow-hidden h-full flex flex-col text-white border",
          plan.popular
            ? "border-green-500 shadow-[0px_-8px_200px_0px_#16a34a60] z-20"
            : "border-neutral-800 z-10"
        )}
      >
        {/* Background layer */}
        <div
          className={cn(
            "absolute inset-0 z-0",
            plan.popular
              ? "bg-gradient-to-b from-green-950 via-neutral-900 to-neutral-900"
              : "bg-gradient-to-b from-neutral-900 to-neutral-950"
          )}
        />

        {/* Spotlight layer */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-300 rounded-xl"
          style={{
            opacity,
            background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, ${plan.spotlightColor}, transparent 40%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-[2] flex flex-col h-full">
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-green-400 text-black text-xs font-black px-5 py-2 rounded-full uppercase tracking-wider shadow-lg">
                Mais Completo
              </span>
            </div>
          )}

          <div className="text-left pt-8 px-6 pb-4">
            <div className="flex items-center gap-3 mb-4">
              <div
                className={cn(
                  "p-2.5 rounded-xl",
                  plan.popular
                    ? "bg-green-400/20 border border-green-400/30"
                    : "bg-neutral-800"
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5",
                    plan.popular ? "text-green-400" : "text-neutral-400"
                  )}
                />
              </div>
              <h3 className="text-xl font-bold">{plan.name}</h3>
            </div>

            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-gray-400 text-lg">R$</span>
              <span className="text-5xl font-black text-white">
                {plan.price.toLocaleString("pt-BR")}
              </span>
              <span className="text-gray-400 text-sm">/{plan.period}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{plan.description}</p>
          </div>

          <div className="px-6 pb-4 flex flex-col flex-1">
            <a
              href={`https://wa.me/5585920017206?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "w-full mb-6 p-4 text-base font-bold rounded-xl text-center block transition-all",
                plan.popular
                  ? "bg-green-400 text-black hover:bg-green-300 shadow-lg shadow-green-400/30"
                  : "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700"
              )}
            >
              {plan.buttonText}
            </a>

            <div className="space-y-3 pt-4 border-t border-neutral-800 flex-1">
              <h4 className="font-semibold text-sm text-gray-300 mb-3">
                {plan.includes[0]}
              </h4>
              <ul className="space-y-2.5">
                {plan.includes.slice(1).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle
                      className={cn(
                        "w-4 h-4 flex-shrink-0 mt-0.5",
                        plan.popular ? "text-green-400" : "text-neutral-500"
                      )}
                    />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  return (
    <section id="planos" className="min-h-screen mx-auto relative bg-black overflow-x-hidden py-24 px-4">
      {/* Background grid */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Glow effect */}
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-[60%] z-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, #166534 0%, transparent 70%)`,
          opacity: 0.3,
        }}
      />

      <div className="relative z-10 text-center mb-16 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-green-400/10 border border-green-400/30 text-green-400 text-sm font-semibold mb-6">
            Planos e Investimento
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Escolha o plano ideal para lotar sua agenda
          </h2>
          <p className="text-gray-400 text-lg">
            Investimento direto, sem taxas ocultas. Você escolhe o plano que faz sentido para o momento da sua clínica.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 max-w-5xl gap-6 mx-auto relative z-10">
        {plans.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} index={index} />
        ))}
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12 relative z-10"
      >
        <p className="text-gray-500 text-sm">
          Tem dúvidas sobre qual plano escolher?{" "}
          <a
            href="https://wa.me/5585920017206?text=Ol%C3%A1%20Joabe%2C%20vi%20sua%20proposta%20e%20tenho%20d%C3%BAvidas%20sobre%20os%20planos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 font-semibold transition-colors"
          >
            Fale comigo no WhatsApp
          </a>
        </p>
      </motion.div>
    </section>
  );
}
