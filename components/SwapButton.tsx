"use client";

import { motion } from "motion/react";

type HoverFillButtonProps = {
  label: string;
};

export default function HoverFillButton({ label }: HoverFillButtonProps) {
  return (
    <motion.button
      className="relative cursor-pointer overflow-hidden px-6 py-1.5 border-2 border-foreground text-2xl font-medium text-background"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Animated fill */}
      <motion.span
        variants={{
          rest: { x: "-101%" },
          hover: { x: "0%" },
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="absolute  inset-0 bg-foreground"
      />

      {/* Button text */}
      <span className="relative z-10 dark:text-white mix-blend-difference">
        {label}
      </span>
    </motion.button>
  );
}
