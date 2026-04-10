"use client";

import { Warp } from "@paper-design/shaders-react";
import { TrendingUp, Share2, BarChart2, Pencil } from "lucide-react";

const features = [
  {
    title: "Tráfego Pago",
    description:
      "Campanhas de Meta e Google Ads criadas para atrair pacientes que já buscam atendimento nutricional particular. Cada anúncio otimizado para o menor custo por consulta.",
    icon: <TrendingUp className="w-10 h-10 text-white" />,
    shader: {
      proportion: 0.3,
      softness: 0.8,
      distortion: 0.15,
      swirl: 0.6,
      swirlIterations: 8,
      shape: "checks" as const,
      shapeScale: 0.08,
      colors: ["hsl(280, 100%, 30%)", "hsl(320, 100%, 60%)", "hsl(340, 90%, 40%)", "hsl(300, 100%, 70%)"],
    },
  },
  {
    title: "Social Media",
    description:
      "Calendário editorial estratégico que constrói autoridade no Instagram e converte seguidores em pacientes. Copys, posts e interação gerenciados para você.",
    icon: <Share2 className="w-10 h-10 text-white" />,
    shader: {
      proportion: 0.4,
      softness: 1.2,
      distortion: 0.2,
      swirl: 0.9,
      swirlIterations: 12,
      shape: "dots" as const,
      shapeScale: 0.12,
      colors: ["hsl(200, 100%, 25%)", "hsl(180, 100%, 65%)", "hsl(160, 90%, 35%)", "hsl(190, 100%, 75%)"],
    },
  },
  {
    title: "Análise de Dados",
    description:
      "Dashboards em tempo real com custo por lead, custo por paciente e ROI comprovado. Cada real investido rastreado, sem achismos e sem desperdício de verba.",
    icon: <BarChart2 className="w-10 h-10 text-white" />,
    shader: {
      proportion: 0.35,
      softness: 0.9,
      distortion: 0.18,
      swirl: 0.7,
      swirlIterations: 10,
      shape: "checks" as const,
      shapeScale: 0.1,
      colors: ["hsl(120, 100%, 22%)", "hsl(140, 100%, 55%)", "hsl(100, 90%, 28%)", "hsl(130, 100%, 65%)"],
    },
  },
  {
    title: "Copy e Funis",
    description:
      "Mensagens persuasivas e funis de vendas validados que transformam sua presença online em agenda lotada. Do primeiro clique ao paciente agendado.",
    icon: <Pencil className="w-10 h-10 text-white" />,
    shader: {
      proportion: 0.45,
      softness: 1.1,
      distortion: 0.22,
      swirl: 0.8,
      swirlIterations: 15,
      shape: "dots" as const,
      shapeScale: 0.09,
      colors: ["hsl(30, 100%, 35%)", "hsl(50, 100%, 65%)", "hsl(40, 90%, 40%)", "hsl(45, 100%, 75%)"],
    },
  },
];

export default function FeatureShaderCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {features.map((feature, index) => (
        <div key={index} className="relative h-72">
          {/* Shader background */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Warp
              style={{ height: "100%", width: "100%" }}
              proportion={feature.shader.proportion}
              softness={feature.shader.softness}
              distortion={feature.shader.distortion}
              swirl={feature.shader.swirl}
              swirlIterations={feature.shader.swirlIterations}
              shape={feature.shader.shape}
              shapeScale={feature.shader.shapeScale}
              scale={1}
              rotation={0}
              speed={0.6}
              colors={feature.shader.colors}
            />
          </div>

          {/* Content overlay */}
          <div className="relative z-10 p-6 rounded-2xl h-full flex flex-col bg-black/75 border border-white/15 hover:bg-black/65 transition-colors duration-300">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-200 leading-relaxed flex-grow">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
