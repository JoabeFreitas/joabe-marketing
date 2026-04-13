"use client";

import Image from "next/image";
import { motion, MotionValue } from "framer-motion";

interface FloatingAvatarProps {
  imageUrl: string;
  floatLeft: MotionValue<number>;
  floatTop: MotionValue<number>;
  floatOpacity: MotionValue<number>;
}

export default function FloatingAvatar({ imageUrl, floatLeft, floatTop, floatOpacity }: FloatingAvatarProps) {
  return (
    <motion.div
      className="fixed z-40 pointer-events-none"
      style={{ left: floatLeft, top: floatTop, width: 288, height: 320, opacity: floatOpacity }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={imageUrl}
          alt="Joabe Freitas"
          fill
          className="object-cover"
          style={{ objectPosition: "50% 0%", transform: "scale(1.15) translateY(-6%)" }}
          sizes="288px"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001F1C]/30 via-transparent to-transparent" />
      </div>
      <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#003631]/25 -z-10" />
      <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#ffeda8]" />
    </motion.div>
  );
}
