import React from "react";
import { ArrowRight } from "lucide-react";

interface SlideArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  primaryColor?: string;
}

export default function SlideArrowButton({
  text = "Contact Me",
  className = "",
  ...props
}: SlideArrowButtonProps) {
  return (
    <button
      className={`group relative rounded-full border border-foreground bg-background p-2 cursor-pointer text-xl font-semibold ${className}`}
      {...props}
    >
      <div
        className="absolute left-0 top-0 flex h-full w-11 items-center justify-end rounded-full transition-all duration-200 ease-in-out group-hover:w-full bg-accent-foreground"
      >
        <span className="mr-3 text-accent transition-all duration-200 ease-in-out">
          <ArrowRight size={20} />
        </span>
      </div>
      <span className="relative left-4 z-10 whitespace-nowrap px-8 font-semibold text-foreground transition-all duration-200 ease-in-out group-hover:-left-3 group-hover:text-accent">
        {text}
      </span>
    </button>
  );
}
