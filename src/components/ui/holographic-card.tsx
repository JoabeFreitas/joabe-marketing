"use client";
import React, { useRef, ReactNode, useState } from 'react';

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
}

const HolographicCard = ({ children, className = '' }: HolographicCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;
    setTransform(`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`);
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)');
    setGlowPos({ x: 50, y: 50 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{ transform, transformStyle: 'preserve-3d', transition: 'transform 0.2s ease-out' }}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-20 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(201,185,122,0.18) 0%, rgba(255,215,100,0.06) 40%, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};

export default HolographicCard;
