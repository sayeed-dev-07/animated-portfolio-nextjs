"use client";
import React from "react";
import { Download, MoveRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor?: string;
  buttonOverlayColor?: string;
  borderColor?: string;
  iconColor?: string;
  className?: string;
}

export default function ArrowButton({
  text = "Resume",
  className,
  ...props
}: ArrowButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "group relative border-foreground cursor-pointer inline-flex items-center justify-center overflow-hidden rounded-lg border-2  bg-background px-6 py-3 font-medium shadow-md transition duration-300 ease-out",
        className,
      )}
    >
      <span
        
        className={cn(
          "ease absolute inset-0 flex h-full w-full -translate-x-full text-accent-foreground items-center justify-center bg-accent  duration-300 group-hover:translate-x-0",
        )}
      >
        <Download size={24}/>
      </span>
      <span
        className={cn(
          "absolute flex bg-accent-foreground text-accent h-full w-full transform items-center justify-center font-bold transition-all duration-300 ease-in-out group-hover:translate-x-full",
        )}
      >
        {text}
      </span>
      <span className="invisible relative">Button</span>
    </button>
  );
}
