import type { ElementType, ReactNode } from "react";

interface GlitchTextProps {
  text: string;
  as?: ElementType;
}

export function GlitchText({ text, as = "span" }: GlitchTextProps) {
  const Component = as;

  return (
    <Component className="group relative inline-block cursor-default">
      <span className="relative z-10">{text}</span>
      <span 
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition group-hover:animate-[glitch-shift_0.3s_ease-in-out] group-hover:opacity-70"
        aria-hidden="true"
      >
        {text}
      </span>
    </Component>
  );
}
