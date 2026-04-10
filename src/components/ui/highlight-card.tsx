"use client";

import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ComponentProps {
  title: string;
  description: string[];
  icon?: ReactNode;
  theme?: "dark" | "light";
}

const HighlightCard: FC<ComponentProps> = ({ title, description, icon, theme = "dark" }) => {
  if (theme === "light") {
    return (
      <div className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
        <div className="relative rounded-2xl border border-[#003631]/15 bg-white shadow-lg overflow-hidden hover:border-[#003631]/40 hover:shadow-xl transition-all duration-300 w-full h-full">
          {/* Subtle top border accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#003631] via-[#00C4A7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="p-8 flex flex-col items-center text-center">
            {/* Icon */}
            <div className="mb-5 p-4 rounded-2xl bg-[#003631]/8 border border-[#003631]/20 group-hover:bg-[#003631]/15 group-hover:border-[#003631]/40 transition-all duration-300">
              <div className="text-[#003631]">
                {icon}
              </div>
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#001F1C] font-playfair group-hover:text-[#003631] transition-colors duration-200">
              {title}
            </h3>

            <div className="space-y-1">
              {description.map((line, idx) => (
                <p key={idx} className="text-[#6B5E4B] text-sm leading-relaxed font-jakarta">
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-5 w-8 h-0.5 bg-[#ffeda8] rounded-full group-hover:w-16 transition-all duration-300" />
          </div>
        </div>
      </div>
    );
  }

  // Dark theme (original)
  return (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
      <Card className="text-white rounded-2xl border border-white/10 bg-gradient-to-br from-[#010101] via-[#090909] to-[#010101] shadow-2xl relative overflow-hidden hover:border-white/25 w-full">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-[#003631]/20 to-transparent blur-3xl opacity-30 group-hover:opacity-60 transform group-hover:scale-110 transition-all duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>

        <div className="p-8 relative z-10 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-[#00C4A7]/20 animate-ping"></div>
            <div className="p-6 rounded-full border border-white/20 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              <div className="transform group-hover:rotate-180 transition-transform duration-700">
                {icon}
              </div>
            </div>
          </div>

          <h3 className="mb-4 text-2xl font-bold font-playfair text-[#ffeda8] transform group-hover:scale-105 transition-transform duration-300">
            {title}
          </h3>

          <div className="space-y-1 max-w-sm">
            {description.map((line, idx) => (
              <p key={idx} className="text-gray-300 text-sm leading-relaxed font-jakarta group-hover:text-gray-200 transition-colors duration-300">
                {line}
              </p>
            ))}
          </div>

          <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-[#ffeda8]/60 to-transparent rounded-full transform group-hover:w-1/2 transition-all duration-500"></div>
        </div>

        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#003631]/20 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#00C4A7]/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Card>
    </div>
  );
};

export default HighlightCard;
