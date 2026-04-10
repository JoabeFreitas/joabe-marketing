"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion";
import React, { ElementType, forwardRef, RefObject, useRef } from "react";

interface TimelineContentProps {
  children: React.ReactNode;
  animationNum: number;
  timelineRef?: RefObject<HTMLElement | null>;
  customVariants?: Variants;
  className?: string;
  as?: ElementType;
}

const defaultVariants: Variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: -20,
    opacity: 0,
  },
};

const TimelineContent = forwardRef<HTMLElement, TimelineContentProps>(
  (
    { children, animationNum, timelineRef, customVariants, className, as: Tag = "div" },
    ref
  ) => {
    const internalRef = useRef<HTMLElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLElement>) || internalRef;
    const isInView = useInView(timelineRef || resolvedRef, { once: true, margin: "0px 0px -100px 0px" });

    return (
      <motion.div
        ref={resolvedRef as React.RefObject<HTMLDivElement>}
        custom={animationNum}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={customVariants || defaultVariants}
        className={cn(className)}
      >
        {children}
      </motion.div>
    );
  }
);

TimelineContent.displayName = "TimelineContent";

export { TimelineContent };
