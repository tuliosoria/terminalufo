/**
 * UI chrome strings (nav labels, CTAs, section eyebrows, paper-card labels).
 *
 * Each locale exports a flat object with the same set of keys. The English
 * dictionary is the source of truth — when adding a new key, add it to `en`
 * first, then translate to the other locales. Missing keys fall back to
 * English at runtime via `t()`.
 *
 * Long-form content (page bodies, file summaries) lives in `lib/content/i18n`
 * — NOT here. This file is for short repeated UI labels only.
 */

import type { Locale } from "./config";
import { defaultLocale } from "./config";

export type Messages = {
  // Navigation
  "nav.game": string;
  "nav.varginha": string;
  "nav.files": string;
  "nav.games": string;
  "nav.press": string;
  "nav.brand": string;
  "nav.toggleMenu": string;
  "nav.languageLabel": string;

  // Calls to action
  "cta.playGame": string;
  "cta.readFiles": string;

  // Home page
  "home.heroLead": string;
  "home.statusEyebrow": string;
  "home.statusTitle": string;
  "home.exposureLevel": string;
  "home.systemTrace": string;
  "home.alertThreshold": string;

  // Game page
  "game.eyebrow": string;
  "game.howEyebrow": string;
  "game.howTitle": string;

  // Games page
  "games.eyebrow": string;
  "games.title": string;
  "games.activeBadge": string;
  "games.redactedBadge": string;
  "games.comingSoon": string;
  "games.varginhaTitle": string;
  "games.varginhaBody": string;
  "games.viewDetails": string;

  // Press page
  "press.eyebrow": string;
  "press.title": string;
  "press.keyFacts": string;
  "press.downloads": string;
  "press.contact": string;
  "press.contactBody": string;
  "press.download": string;

  // Files index
  "files.eyebrow": string;
  "files.title": string;
  "files.openCard": string;
  "files.openFull": string;

  // File detail page
  "fileDetail.back": string;
  "fileDetail.caseFile": string;
  "fileDetail.type": string;
  "fileDetail.dateOfRecord": string;
  "fileDetail.source": string;
  "fileDetail.abstract": string;
  "fileDetail.artifacts": string;
  "fileDetail.handlerNote": string;
  "fileDetail.related": string;

  // Varginha page
  "varginha.sourceNotes": string;
  "varginha.use": string;

  // Footer / misc
  "fileNotFound.title": string;
  "fileNotFound.body": string;
};

export const messages: Record<Locale, Messages> = {
  en: {
    "nav.game": "Play Game",
    "nav.varginha": "Varginha Case",
    "nav.files": "Classified Files",
    "nav.games": "Game Archive",
    "nav.press": "Press Kit",
    "nav.brand": "TERMINAL_UFO",
    "nav.toggleMenu": "Toggle navigation menu",
    "nav.languageLabel": "Language",

    "cta.playGame": "Play the Game",
    "cta.readFiles": "Read the Files",

    "home.heroLead":
      "A command-line investigation into classified UFO files, government secrecy, and the fragile line between documentation and truth.",
    "home.statusEyebrow": "System Status",
    "home.statusTitle": "Detection Risk",
    "home.exposureLevel": "EXPOSURE_LEVEL",
    "home.systemTrace": "SYSTEM_TRACE",
    "home.alertThreshold": "ALERT_THRESHOLD",

    "game.eyebrow": "Play",
    "game.howEyebrow": "How it Works",
    "game.howTitle": "Game Mechanics",

    "games.eyebrow": "Series",
    "games.title": "Terminal Games",
    "games.activeBadge": "Active",
    "games.redactedBadge": "Redacted",
    "games.comingSoon": "COMING SOON",
    "games.varginhaTitle": "Terminal Varginha",
    "games.varginhaBody":
      "Investigate the 1996 Varginha UFO incident through classified terminal access.",
    "games.viewDetails": "View Details →",

    "press.eyebrow": "Media",
    "press.title": "Press Kit",
    "press.keyFacts": "Key Facts",
    "press.downloads": "Downloads",
    "press.contact": "Contact",
    "press.contactBody": "For press inquiries, interviews, or access requests:",
    "press.download": "↓ Download",

    "files.eyebrow": "Case file VRGH-1996",
    "files.title": "The Files",
    "files.openCard": "Open file",
    "files.openFull": "Open full file →",

    "fileDetail.back": "← Back to all files",
    "fileDetail.caseFile": "Case File",
    "fileDetail.type": "Type",
    "fileDetail.dateOfRecord": "Date of Record",
    "fileDetail.source": "Source",
    "fileDetail.abstract": "Abstract",
    "fileDetail.artifacts": "Artifact Inventory",
    "fileDetail.handlerNote": "Handler Note",
    "fileDetail.related": "Cross-Referenced Files",

    "varginha.sourceNotes": "Source Notes",
    "varginha.use": "Use",

    "fileNotFound.title": "File not found — Terminal UFO",
    "fileNotFound.body": "This Terminal UFO file does not exist."
  },

  "pt-BR": {
    "nav.game": "Jogar",
    "nav.varginha": "Caso Varginha",
    "nav.files": "Arquivos Confidenciais",
    "nav.games": "Catálogo de Jogos",
    "nav.press": "Kit de Imprensa",
    "nav.brand": "TERMINAL_UFO",
    "nav.toggleMenu": "Alternar menu de navegação",
    "nav.languageLabel": "Idioma",

    "cta.playGame": "Jogar o Jogo",
    "cta.readFiles": "Ler os Arquivos",

    "home.heroLead":
      "Uma investigação por linha de comando sobre arquivos OVNI confidenciais, sigilo governamental e a tênue linha entre documento e verdade.",
    "home.statusEyebrow": "Status do Sistema",
    "home.statusTitle": "Risco de Detecção",
    "home.exposureLevel": "NIVEL_EXPOSICAO",
    "home.systemTrace": "RASTRO_SISTEMA",
    "home.alertThreshold": "LIMIAR_ALERTA",

    "game.eyebrow": "Jogar",
    "game.howEyebrow": "Como funciona",
    "game.howTitle": "Mecânicas do Jogo",

    "games.eyebrow": "Série",
    "games.title": "Terminal Games",
    "games.activeBadge": "Ativo",
    "games.redactedBadge": "Censurado",
    "games.comingSoon": "EM BREVE",
    "games.varginhaTitle": "Terminal Varginha",
    "games.varginhaBody":
      "Investigue o caso OVNI de Varginha de 1996 por meio de acesso a um terminal confidencial.",
    "games.viewDetails": "Ver detalhes →",

    "press.eyebrow": "Mídia",
    "press.title": "Kit de Imprensa",
    "press.keyFacts": "Fatos Principais",
    "press.downloads": "Downloads",
    "press.contact": "Contato",
    "press.contactBody": "Para imprensa, entrevistas ou pedidos de acesso:",
    "press.download": "↓ Baixar",

    "files.eyebrow": "Pasta do caso VRGH-1996",
    "files.title": "Os Arquivos",
    "files.openCard": "Abrir arquivo",
    "files.openFull": "Abrir arquivo completo →",

    "fileDetail.back": "← Voltar para todos os arquivos",
    "fileDetail.caseFile": "Pasta do Caso",
    "fileDetail.type": "Tipo",
    "fileDetail.dateOfRecord": "Data do Registro",
    "fileDetail.source": "Fonte",
    "fileDetail.abstract": "Resumo",
    "fileDetail.artifacts": "Inventário de Itens",
    "fileDetail.handlerNote": "Nota do Operador",
    "fileDetail.related": "Arquivos Relacionados",

    "varginha.sourceNotes": "Notas de Fontes",
    "varginha.use": "Uso",

    "fileNotFound.title": "Arquivo não encontrado — Terminal UFO",
    "fileNotFound.body": "Este arquivo do Terminal UFO não existe."
  },

  es: {
    "nav.game": "Jugar",
    "nav.varginha": "Caso Varginha",
    "nav.files": "Archivos Clasificados",
    "nav.games": "Catálogo de Juegos",
    "nav.press": "Kit de Prensa",
    "nav.brand": "TERMINAL_UFO",
    "nav.toggleMenu": "Alternar menú de navegación",
    "nav.languageLabel": "Idioma",

    "cta.playGame": "Jugar el Juego",
    "cta.readFiles": "Leer los Archivos",

    "home.heroLead":
      "Una investigación por línea de comandos sobre archivos OVNI clasificados, secretismo gubernamental y la frágil línea entre el documento y la verdad.",
    "home.statusEyebrow": "Estado del Sistema",
    "home.statusTitle": "Riesgo de Detección",
    "home.exposureLevel": "NIVEL_EXPOSICION",
    "home.systemTrace": "RASTRO_SISTEMA",
    "home.alertThreshold": "UMBRAL_ALERTA",

    "game.eyebrow": "Jugar",
    "game.howEyebrow": "Cómo funciona",
    "game.howTitle": "Mecánicas del Juego",

    "games.eyebrow": "Serie",
    "games.title": "Terminal Games",
    "games.activeBadge": "Activo",
    "games.redactedBadge": "Censurado",
    "games.comingSoon": "PRÓXIMAMENTE",
    "games.varginhaTitle": "Terminal Varginha",
    "games.varginhaBody":
      "Investigue el caso OVNI de Varginha de 1996 mediante acceso a un terminal clasificado.",
    "games.viewDetails": "Ver detalles →",

    "press.eyebrow": "Medios",
    "press.title": "Kit de Prensa",
    "press.keyFacts": "Datos Clave",
    "press.downloads": "Descargas",
    "press.contact": "Contacto",
    "press.contactBody": "Para prensa, entrevistas o solicitudes de acceso:",
    "press.download": "↓ Descargar",

    "files.eyebrow": "Expediente VRGH-1996",
    "files.title": "Los Archivos",
    "files.openCard": "Abrir archivo",
    "files.openFull": "Abrir archivo completo →",

    "fileDetail.back": "← Volver a todos los archivos",
    "fileDetail.caseFile": "Expediente",
    "fileDetail.type": "Tipo",
    "fileDetail.dateOfRecord": "Fecha del Registro",
    "fileDetail.source": "Fuente",
    "fileDetail.abstract": "Resumen",
    "fileDetail.artifacts": "Inventario",
    "fileDetail.handlerNote": "Nota del Operador",
    "fileDetail.related": "Archivos Relacionados",

    "varginha.sourceNotes": "Notas de Fuentes",
    "varginha.use": "Uso",

    "fileNotFound.title": "Archivo no encontrado — Terminal UFO",
    "fileNotFound.body": "Este archivo del Terminal UFO no existe."
  }
};

/** Translate a key for the given locale, falling back to the default locale. */
export function t(locale: Locale, key: keyof Messages): string {
  return messages[locale]?.[key] ?? messages[defaultLocale][key];
}
