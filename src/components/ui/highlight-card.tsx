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

  // Dark theme
  return (
    <div className="group cursor-pointer">
      <Card className="text-white rounded-2xl border border-white/10 bg-[#0a1614] relative overflow-hidden hover:border-[#00C4A7]/30 transition-colors duration-300 w-full">
        <div className="p-8 flex flex-col items-center text-center">
          <div className="mb-6">
            <div className="p-5 rounded-full border border-white/15 bg-black/40 group-hover:border-[#00C4A7]/30 group-hover:scale-110 transition-all duration-300">
              {icon}
            </div>
          </div>

          <h3 className="mb-4 text-2xl font-bold font-playfair text-[#ffeda8]">
            {title}
          </h3>

          <div className="space-y-1 max-w-sm">
            {description.map((line, idx) => (
              <p key={idx} className="text-gray-300 text-sm leading-relaxed font-jakarta">
                {line}
              </p>
            ))}
          </div>

          <div className="mt-6 w-8 h-0.5 bg-[#ffeda8]/40 rounded-full group-hover:w-16 transition-all duration-300" />
        </div>
      </Card>
    </div>
  );
};

export default HighlightCard;
