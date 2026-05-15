"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/game", label: "Play Game" },
  { href: "/varginha", label: "Varginha Case" },
  { href: "/files", label: "Classified Files" },
  { href: "/games", label: "Game Archive" },
  { href: "/press", label: "Press Kit" },
];

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <nav className="border-b border-[rgba(255,255,255,0.1)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="font-[var(--font-heading)] text-xl font-bold text-[var(--accent-green)] transition hover:text-[var(--text-primary)]"
          >
            TERMINAL_UFO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-sm text-[var(--text-secondary)] transition hover:text-[var(--accent-green)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className={`h-0.5 w-6 bg-[var(--text-primary)] transition ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`h-0.5 w-6 bg-[var(--text-primary)] transition ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-[var(--text-primary)] transition ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-[rgba(255,255,255,0.1)] py-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 font-mono text-sm text-[var(--text-secondary)] transition hover:text-[var(--accent-green)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
