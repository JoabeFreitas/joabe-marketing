"use client";

import { FC, RefObject } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Brand SVG icons
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  tags?: string[];
  socials?: SocialLink[];
  imageRef?: RefObject<HTMLDivElement>;
  hideImage?: boolean;
}

const ProfileCard: FC<ProfileCardProps> = ({
  name,
  role,
  bio,
  imageUrl,
  tags = [],
  socials = [],
  imageRef,
  hideImage = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start"
    >
      {/* Photo block */}
      <div ref={imageRef} className="relative flex-shrink-0" style={{ opacity: hideImage ? 0 : 1, transition: "opacity 0.3s ease" }}>
        <div className="relative w-56 h-64 sm:w-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            style={{ objectPosition: "50% 0%", transform: "scale(1.15) translateY(-6%)" }}
            sizes="(max-width: 640px) 224px, 288px"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001F1C]/30 via-transparent to-transparent" />
        </div>
        <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#003631]/25 -z-10" />
        <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#ffeda8]" />
      </div>

      {/* Content */}
      <div className="flex-1 text-center lg:text-left">
        <p className="text-[#6B5E4B] text-xs font-bold uppercase tracking-[0.2em] mb-3 font-jakarta">
          Estrategista Digital
        </p>
        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#001F1C] mb-2 leading-tight">
          {name}
        </h2>
        <p className="text-[#003631] text-base font-medium mb-6 font-jakarta italic">
          {role}
        </p>
        <p className="text-[#6B5E4B] text-base leading-relaxed mb-8 font-jakarta max-w-xl">
          {bio}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold font-jakarta bg-[#003631]/10 text-[#003631] border border-[#003631]/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {socials.length > 0 && (
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#003631]/30 text-[#003631] hover:bg-[#003631] hover:text-[#ffeda8] hover:border-[#003631] transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export { WhatsAppIcon, InstagramIcon, LinkedInIcon };
export default ProfileCard;
