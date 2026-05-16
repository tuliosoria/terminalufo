"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  defaultLocale,
  isLocale,
  localeNames,
  locales,
  localizedPath,
  type Locale
} from "@/lib/i18n/config";
import { messages, t } from "@/lib/i18n/messages";

type NavItem = { href: string; labelKey: keyof typeof messages.en };

const navItems: NavItem[] = [
  { href: "/game", labelKey: "nav.game" },
  { href: "/varginha", labelKey: "nav.varginha" },
  { href: "/files", labelKey: "nav.files" },
  { href: "/games", labelKey: "nav.games" },
  { href: "/press", labelKey: "nav.press" }
];

/** Parse pathname → { locale, canonicalPath }. */
function useCurrentRoute(): { locale: Locale; canonicalPath: string } {
  const pathname = usePathname() ?? "/";
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && isLocale(parts[0])) {
    const loc = parts[0] as Locale;
    const rest = "/" + parts.slice(1).join("/");
    return { locale: loc, canonicalPath: rest === "/" ? "/" : rest };
  }
  return { locale: defaultLocale, canonicalPath: pathname };
}

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, canonicalPath } = useCurrentRoute();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const homeHref = localizedPath(locale, "/");

  return (
    <nav className="border-b border-[rgba(255,255,255,0.1)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href={homeHref}
            className="font-[var(--font-heading)] text-xl font-bold text-[var(--accent-green)] transition hover:text-[var(--text-primary)]"
          >
            {t(locale, "nav.brand")}
          </Link>

          <div className="hidden flex-1 items-center justify-end gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={localizedPath(locale, item.href)}
                className="font-mono text-sm text-[var(--text-secondary)] transition hover:text-[var(--accent-green)]"
              >
                {t(locale, item.labelKey)}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} currentPath={canonicalPath} />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 md:hidden"
            aria-label={t(locale, "nav.toggleMenu")}
            aria-expanded={isOpen}
          >
            <span className={`h-0.5 w-6 bg-[var(--text-primary)] transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`h-0.5 w-6 bg-[var(--text-primary)] transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-[var(--text-primary)] transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-[rgba(255,255,255,0.1)] py-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={localizedPath(locale, item.href)}
                className="block py-2 font-mono text-sm text-[var(--text-secondary)] transition hover:text-[var(--accent-green)]"
                onClick={() => setIsOpen(false)}
              >
                {t(locale, item.labelKey)}
              </Link>
            ))}
            <div className="mt-3 border-t border-[rgba(255,255,255,0.1)] pt-3">
              <LanguageSwitcher
                locale={locale}
                currentPath={canonicalPath}
                onSelect={() => setIsOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function LanguageSwitcher({
  locale,
  currentPath,
  onSelect
}: {
  locale: Locale;
  currentPath: string;
  onSelect?: () => void;
}) {
  return (
    <div
      className="flex items-center gap-1 rounded border border-[rgba(255,255,255,0.1)] px-1.5 py-1"
      role="group"
      aria-label={t(locale, "nav.languageLabel")}
    >
      {locales.map((l) => {
        const isActive = l === locale;
        const href = localizedPath(l, currentPath);
        return (
          <Link
            key={l}
            href={href}
            hrefLang={l}
            onClick={onSelect}
            aria-current={isActive ? "true" : undefined}
            className={`px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider transition ${
              isActive
                ? "bg-[var(--accent-green)] text-[var(--bg-primary)]"
                : "text-[var(--text-secondary)] hover:text-[var(--accent-green)]"
            }`}
            title={localeNames[l]}
          >
            {l === defaultLocale ? "EN" : l.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
