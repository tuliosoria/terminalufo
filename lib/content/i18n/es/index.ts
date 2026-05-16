/**
 * Spanish content. Keys not exported here fall back to English.
 *
 * Structure mirrors `lib/content/i18n/en/index.ts`. To translate a piece of
 * content, copy the corresponding export from the English module, translate
 * the strings, and re-export it from here.
 */

import type {
  TerminalLine,
  Mechanic,
  CommandReference,
  PressFact,
  CallToAction,
  ClassifiedFile,
  TimelineEntry
} from "../../types";

// ============================================================================
// Site
// ============================================================================

export const launchCta: CallToAction = {
  label: "Jugar el Juego",
  href: "/game"
};

// ============================================================================
// Game
// ============================================================================

export const gameTitle = "Terminal Varginha";

export const heroLogs: TerminalLine[] = [
  { prefix: "SYS", text: "conexión aceptada desde retransmisor desconocido", tone: "green" },
  { prefix: "ARCHIVE", text: "índice del caso: varginha / enero de 1996", tone: "amber" },
  { prefix: "UFO74", text: "no confíes en los archivos limpios", tone: "muted" }
];

export const ufo74Lines: TerminalLine[] = [
  { prefix: "$", text: "access ufo-74-archive" },
  { text: "ACCEDIENDO A RED CLASIFICADA...", tone: "amber" },
  { text: "AUTORIZACIÓN VERIFICADA", tone: "green" },
  { text: "Cargando informes del incidente...", tone: "muted" }
];

export const mechanics: Mechanic[] = [
  {
    title: "La Interfaz del Terminal",
    body: "Navega por archivos OVNI clasificados a través de una auténtica interfaz de línea de comandos. Cada decisión moldea tu comprensión de la verdad."
  },
  {
    title: "El Sistema de Riesgo",
    body: "Cada archivo que abres aumenta tu exposición. Llega demasiado lejos y el sistema te detectará. Elige con cuidado qué investigar."
  },
  {
    title: "La Mecánica de Filtración",
    body: "Descubre documentos que nunca debieron hacerse públicos. Cada filtración revela más sobre el caso de Varginha — pero ¿a qué precio?"
  }
];

export const commands: CommandReference[] = [
  { command: "note", description: "Registra observaciones sobre archivos e incidentes" },
  { command: "save", description: "Conserva tu progreso en la investigación" },
  { command: "wait", description: "Deja pasar el tiempo para reducir el riesgo de detección" },
  { command: "override", description: "Fuerza el acceso a archivos restringidos con alto riesgo" }
];

// ============================================================================
// Press
// ============================================================================

export const pressFacts: PressFact[] = [
  ["Título", "Terminal Varginha"],
  ["Sitio", "Terminal UFO"],
  ["Género", "Terminal hacker / narrativa de archivos clasificados"],
  ["Ambientación", "Un archivo ficticio construido en torno al caso OVNI de Varginha de 1996"],
  ["CTA Actual", "Solicitud de acceso para prensa"]
];

export const pressSummary = `Terminal Varginha es un juego de investigación narrativa en el que el jugador usa una interfaz de línea de comandos para explorar archivos clasificados sobre el caso OVNI de Varginha de 1996, en Brasil. El juego combina documentos gubernamentales reales ya desclasificados con elementos narrativos ficticios, retando al jugador a separar hecho de ficción mientras gestiona el riesgo de ser detectado. Cada archivo abierto aumenta la exposición, obligando a tomar decisiones cuidadosas sobre qué investigar. Lanzamiento previsto para 2025.`;

export const contactEmail = "press@terminalufo.com";

// ============================================================================
// Pages metadata
// ============================================================================

export const pageMeta = {
  home: {
    title: "Terminal UFO — Clasificado. Filtrado. Real.",
    description:
      "Entra en el archivo oficial de Terminal Varginha, el incidente OVNI de Varginha de 1996, y los archivos que separan el registro público de la ficción."
  },
  game: {
    title: "Terminal Varginha — Terminal UFO",
    description:
      "Juega al terminal hacker construido en torno a archivos clasificados, riesgo de detección, UFO74 y la historia pública del caso OVNI de Varginha."
  },
  games: {
    title: "Terminal Games — Terminal UFO",
    description:
      "El universo Terminal Games comienza con Terminal Varginha. Los próximos archivos siguen censurados."
  },
  press: {
    title: "Kit de Prensa — Terminal UFO",
    description:
      "Resumen, datos clave, contacto y one-pager descargable de Terminal UFO y Terminal Varginha."
  },
  files: {
    title: "Los Archivos — Terminal UFO",
    description:
      "Expediente VRGH-1996. Treinta documentos ficticios de Terminal Varginha. Cada tarjeta abre una página de detalles dedicada."
  },
  varginha: {
    title: "El Incidente OVNI de Varginha — Terminal UFO",
    description:
      "Relato extenso y referenciado del caso OVNI de Varginha de 1996, sus testigos, las negativas oficiales, los registros públicos y la conexión con Terminal Varginha."
  }
} as const;

export const filesIntroNotice =
  "Cada archivo de este acervo es material narrativo ficticio creado para Terminal Varginha. Cada entrada lleva un aviso individual en su página de detalles. Ningún elemento de abajo es un registro gubernamental real.";

// ============================================================================
// Files (titles + summaries)
// ============================================================================

export { fictionFiles } from "./files-extra";

import { fileDetails as fileDetails1 } from "./file-details-1";
import { fileDetails as fileDetails2 } from "./file-details-2";
import { fileDetails as fileDetails3 } from "./file-details-3";

export const fileDetails = {
  ...fileDetails1,
  ...fileDetails2,
  ...fileDetails3
};

// ============================================================================
// Varginha timeline
// ============================================================================

export const varginhaTimeline: TimelineEntry[] = [
  {
    date: "1996-01-20",
    title: "Avistamiento Inicial",
    body: "Múltiples testigos en Varginha, Brasil, informan haber visto una nave extraña volando bajo sobre la ciudad durante el día. Los testigos describen patrones de vuelo erráticos y apariencia inusual.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-20",
    title: "Encuentro con la Criatura",
    body: "Tres jóvenes encuentran una criatura extraña en un terreno baldío. Describen un ser bípedo con piel marrón y aceitosa, grandes ojos rojos y tres protuberancias en la cabeza. La criatura parecía herida o angustiada.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-20",
    title: "Respuesta de los Bomberos",
    body: "El Cuerpo de Bomberos de Varginha recibe llamadas sobre un \"animal extraño\" en la zona. Los bomberos habrían llegado al lugar y participado en una operación de captura, aunque los registros oficiales niegan cualquier despliegue.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-20",
    title: "Respuesta Militar",
    body: "Bomberos locales y personal militar habrían llegado al lugar. Los testigos relatan haber visto camiones militares y una operación de recogida organizada.",
    sourceIds: ["openminds-varginha", "ufo-com-br"]
  },
  {
    date: "1996-01-20",
    title: "Sospechas de Traslado Hospitalario",
    body: "Los testigos relatan haber visto vehículos militares transportando carga cubierta hacia el Hospital Regional y el Hospital Humanitas. Los administradores de los hospitales niegan haber recibido pacientes o materiales inusuales, pero múltiples testigos independientes describen una presencia de seguridad inusual en ambos centros.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-22",
    title: "Captura de una Segunda Criatura",
    body: "Surgen informes de una segunda criatura capturada por personal militar cerca del Zoológico de Varginha. Múltiples testigos independientes describen haber visto operaciones militares en la zona.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-23",
    title: "Comienzan los Interrogatorios a Testigos",
    body: "Surgen informes de personal militar entrevistando a testigos y pidiéndoles firmar acuerdos de confidencialidad. Varios testigos afirman haber sido presionados para alterar o retirar sus relatos del encuentro.",
    sourceIds: ["openminds-varginha", "ufo-com-br"]
  },
  {
    date: "1996-02-15",
    title: "Muerte de un Oficial Militar",
    body: "El cabo de la Policía Militar Marco Eli Chereze muere en circunstancias misteriosas tras haber participado supuestamente en la operación de captura. Causa oficial: infección bacteriana.",
    sourceIds: ["openminds-varginha"]
  },
  {
    date: "1996-04-21",
    title: "Negación Oficial",
    body: "El Ejército Brasileño emite una negación oficial de cualquier operación de recogida de OVNI o criatura en Varginha. Sin embargo, los testigos mantienen sus relatos y varios se niegan a retractarse.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-05-12",
    title: "La Cobertura Mediática se Intensifica",
    body: "Los medios nacionales brasileños inician una amplia cobertura del incidente de Varginha. Las entrevistas televisivas con las principales testigos, incluidas las tres jóvenes, llevan el caso a la atención nacional y abren el debate público.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "2004-09-01",
    title: "Contexto Histórico de Inteligencia Extranjera",
    body: "La desclasificación de documentos de la CIA de la era de la Guerra Fría revela un interés histórico de agencias extranjeras de inteligencia en fenómenos OVNI sudamericanos, estableciendo un precedente de cooperación interagencias en incidentes extraordinarios.",
    sourceIds: ["cia-ufo-reading-room", "cia-brazil-document-search"]
  },
  {
    date: "2020-01-20",
    title: "Desarrollo de Terminal Varginha",
    body: "Comienza el desarrollo de la narrativa ficticia, utilizando el caso histórico de Varginha como inspiración para una experiencia interactiva que explora el secretismo gubernamental, la credibilidad de los testigos y la construcción de la verdad a partir de relatos contradictorios.",
    sourceIds: ["ufo-com-br", "openminds-varginha", "fbi-vault-ufo", "cia-ufo-reading-room"]
  }
];

export const varginhaArticlePath = "main.mdx" as const;
