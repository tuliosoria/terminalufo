import type { ReactNode } from "react";

interface RedactedProps {
  children: ReactNode;
}

export function Redacted({ children }: RedactedProps) {
  return (
    <span 
      tabIndex={0} 
      aria-label={typeof children === "string" ? children : "redacted content"} 
      className="group relative inline-block cursor-help"
    >
      <span className="opacity-0 transition group-hover:opacity-100 group-focus:opacity-100">
        {children}
      </span>
      <span 
        aria-hidden="true" 
        className="absolute inset-x-0 top-1/2 h-[0.9em] -translate-y-1/2 bg-black group-hover:hidden group-focus:hidden" 
      />
    </span>
  );
}
