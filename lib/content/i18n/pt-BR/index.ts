/**
 * Brazilian Portuguese content. Keys not exported here fall back to English.
 *
 * Structure mirrors `lib/content/i18n/en/index.ts`. To translate a piece of
 * content, copy the corresponding export from the English module, translate
 * the strings, and re-export it from here. Anything not exported keeps the
 * English value automatically.
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
  label: "Jogar o Jogo",
  href: "/game"
};

// ============================================================================
// Game
// ============================================================================

export const gameTitle = "Terminal Varginha";

export const heroLogs: TerminalLine[] = [
  { prefix: "SYS", text: "conexão aceita de retransmissor desconhecido", tone: "green" },
  { prefix: "ARCHIVE", text: "índice do caso: varginha / janeiro de 1996", tone: "amber" },
  { prefix: "UFO74", text: "não confie nos arquivos limpos", tone: "muted" }
];

export const ufo74Lines: TerminalLine[] = [
  { prefix: "$", text: "access ufo-74-archive" },
  { text: "ACESSANDO REDE CONFIDENCIAL...", tone: "amber" },
  { text: "AUTORIZAÇÃO VERIFICADA", tone: "green" },
  { text: "Carregando relatórios do incidente...", tone: "muted" }
];

export const mechanics: Mechanic[] = [
  {
    title: "A Interface do Terminal",
    body: "Navegue por arquivos OVNI confidenciais através de uma autêntica interface de linha de comando. Cada decisão molda sua compreensão da verdade."
  },
  {
    title: "O Sistema de Risco",
    body: "Cada arquivo acessado aumenta sua exposição. Avance demais e o sistema irá detectá-lo. Escolha com cuidado o que investigar."
  },
  {
    title: "A Mecânica do Vazamento de Arquivos",
    body: "Descubra documentos que nunca deveriam ser públicos. Cada vazamento revela mais sobre o caso de Varginha — mas a que preço?"
  }
];

export const commands: CommandReference[] = [
  { command: "note", description: "Registre observações sobre arquivos e incidentes" },
  { command: "save", description: "Preserve seu progresso na investigação" },
  { command: "wait", description: "Deixe o tempo passar para reduzir o risco de detecção" },
  { command: "override", description: "Force acesso a arquivos restritos com alto risco" }
];

// ============================================================================
// Press
// ============================================================================

export const pressFacts: PressFact[] = [
  ["Título", "Terminal Varginha"],
  ["Site", "Terminal UFO"],
  ["Gênero", "Terminal hacker / narrativa de arquivos confidenciais"],
  ["Cenário", "Um arquivo fictício construído ao redor do caso OVNI de Varginha de 1996"],
  ["CTA Atual", "Solicitação de acesso pela imprensa"]
];

export const pressSummary = `Terminal Varginha é um jogo de investigação narrativa em que o jogador usa uma interface de linha de comando para explorar arquivos confidenciais sobre o caso OVNI de Varginha de 1996, no Brasil. O jogo combina documentos governamentais reais já desclassificados com elementos narrativos fictícios, desafiando o jogador a separar fato de ficção enquanto administra o risco de ser detectado. Cada arquivo aberto aumenta a exposição, exigindo escolhas cuidadosas sobre o que investigar. Lançamento previsto para 2025.`;

export const contactEmail = "press@terminalufo.com";

// ============================================================================
// Pages metadata (per-locale SEO copy)
// ============================================================================

export const pageMeta = {
  home: {
    title: "Terminal UFO — Confidencial. Vazado. Real.",
    description:
      "Entre no arquivo oficial do Terminal Varginha, do incidente OVNI de Varginha de 1996, e dos arquivos que separam o registro público da ficção."
  },
  game: {
    title: "Terminal Varginha — Terminal UFO",
    description:
      "Jogue o terminal hacker construído ao redor de arquivos confidenciais, risco de detecção, UFO74 e o histórico público do caso OVNI de Varginha."
  },
  games: {
    title: "Terminal Games — Terminal UFO",
    description:
      "O universo Terminal Games começa com Terminal Varginha. Os próximos arquivos permanecem censurados."
  },
  press: {
    title: "Kit de Imprensa — Terminal UFO",
    description:
      "Resumo de imprensa, fatos, contato e one-pager para download do Terminal UFO e Terminal Varginha."
  },
  files: {
    title: "Os Arquivos — Terminal UFO",
    description:
      "Pasta do caso VRGH-1996. Trinta documentos fictícios do Terminal Varginha. Cada cartão abre uma página dedicada de detalhes."
  },
  varginha: {
    title: "O Incidente OVNI de Varginha — Terminal UFO",
    description:
      "Relato longo e referenciado do caso OVNI de Varginha de 1996, suas testemunhas, negações oficiais, registros públicos e a conexão com Terminal Varginha."
  }
} as const;

export const filesIntroNotice =
  "Todo arquivo deste acervo é material narrativo fictício criado para Terminal Varginha. Cada entrada traz um aviso individual na sua página de detalhes. Nenhum item abaixo é um registro governamental real.";

// ============================================================================
// Files (titles + summaries) — translations are added incrementally.
// Until a file id appears below, the English entry is used.
// See lib/content/i18n/index.ts for the merge logic.
// ============================================================================

const fictionDisclaimer =
  "Arquivo fictício criado para Terminal Varginha. Não é um registro governamental real.";

export const fictionFiles: ClassifiedFile[] = [
  {
    id: "varginha-001",
    category: "fiction",
    title: "Gravação de autópsia ET — Varginha, janeiro de 1996",
    classification: "LEAKED",
    type: "AUDIO",
    source: "Upload anônimo, arquivo do subsolo de hospital regional",
    date: "1996-01-23",
    summary:
      "Captura de áudio de quarenta e sete minutos atribuída a um exame procedimental de um sujeito não-humano realizado em uma instalação médica regional não identificada. As vozes identificam dois médicos presentes, um terceiro observador não identificado e alarmes intermitentes de equipamento. As vocalizações do sujeito registradas nos onze minutos finais não foram classificadas.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-002",
    category: "fiction",
    title: "Enfermeira descreve 3 dedos e um cheiro que ela nunca esqueceu",
    classification: "ANONYMOUS SOURCE",
    type: "TRANSCRIPT",
    source: "Transcrição de testemunho, identidade selada",
    date: "1996-02-04",
    summary:
      "Depoimento prestado por uma ex-enfermeira de pronto-socorro, 31 anos à época do incidente, que relata breve contato físico com um sujeito sob custódia durante uma transferência. A testemunha descreve consistentemente três dedos alongados, sem polegar opositor, e um odor orgânico que ela compara a ozônio misturado a cobre molhado. A testemunha recusou todo contato posterior.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-003",
    category: "fiction",
    title: "Marinha estrangeira visitou Varginha 47 vezes entre 1996 e 2003",
    classification: "DECLASSIFIED",
    type: "REPORT",
    source: "Registros de viagens estrangeiras, Escritório de Ligação Estrangeira [FICTÍCIO]",
    date: "2009-08-12",
    summary:
      "Registros consolidados de viagem indicam quarenta e sete entradas distintas de pessoal naval estrangeiro na região de Minas Gerais ao longo de uma janela de sete anos. As visitas se concentram em torno de um aeródromo regional sem valor estratégico documentado. As justificativas oficiais citam programas de intercâmbio agrícola e meteorológico que não têm registro correspondente nas instituições anfitriãs.",
    fictionNotice: fictionDisclaimer
  }
  // NOTE: entries 004–030 fall back to English until translated.
];

// ============================================================================
// Varginha timeline (titles + bodies)
// ============================================================================

export const varginhaTimeline: TimelineEntry[] = [
  {
    date: "1996-01-20",
    title: "Avistamento Inicial",
    body: "Várias testemunhas em Varginha, Brasil, relatam ter visto uma estranha aeronave voando baixo sobre a cidade durante o dia. Testemunhas descrevem padrões erráticos de voo e aparência incomum.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-20",
    title: "Encontro com a Criatura",
    body: "Três jovens encontram uma criatura estranha em um terreno baldio. Descrevem um ser bípede com pele oleosa e marrom, grandes olhos vermelhos e três protuberâncias na cabeça. A criatura parecia ferida ou aflita.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-20",
    title: "Resposta dos Bombeiros",
    body: "O Corpo de Bombeiros de Varginha recebe chamadas sobre um \"animal estranho\" na área. Bombeiros teriam chegado ao local e participado de uma operação de captura, embora os registros oficiais neguem qualquer mobilização.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-20",
    title: "Resposta Militar",
    body: "Bombeiros locais e militares teriam chegado ao local. Testemunhas relatam ter visto caminhões militares e uma operação de recolhimento organizada.",
    sourceIds: ["openminds-varginha", "ufo-com-br"]
  },
  {
    date: "1996-01-20",
    title: "Suspeitas de Transferência Hospitalar",
    body: "Testemunhas relatam ter visto veículos militares transportando carga coberta para o Hospital Regional e o Hospital Humanitas. Administradores hospitalares negam ter recebido pacientes ou materiais incomuns, mas múltiplas testemunhas independentes descrevem presença de segurança incomum em ambas as unidades.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-22",
    title: "Captura de Segunda Criatura",
    body: "Surgem relatos de uma segunda criatura capturada por militares próximo ao Zoológico de Varginha. Testemunhas independentes descrevem ter visto operações militares na região.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-23",
    title: "Início dos Interrogatórios de Testemunhas",
    body: "Surgem relatos de militares entrevistando testemunhas e pedindo que assinassem termos de confidencialidade. Várias testemunhas alegam ter sido pressionadas a alterar ou retirar suas declarações sobre os encontros.",
    sourceIds: ["openminds-varginha", "ufo-com-br"]
  },
  {
    date: "1996-02-15",
    title: "Morte de Oficial Militar",
    body: "O cabo da Polícia Militar Marco Eli Chereze morre em circunstâncias misteriosas após supostamente ter participado da operação de captura da criatura. Causa oficial: infecção bacteriana.",
    sourceIds: ["openminds-varginha"]
  },
  {
    date: "1996-04-21",
    title: "Negação Oficial",
    body: "O Exército Brasileiro emite negação oficial de qualquer operação de recolhimento de OVNI ou criatura em Varginha. As testemunhas, no entanto, mantêm seus relatos e várias se recusam a retratar suas declarações.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-05-12",
    title: "Cobertura da Imprensa se Intensifica",
    body: "Veículos nacionais brasileiros começam ampla cobertura do incidente de Varginha. Entrevistas em televisão com as principais testemunhas, incluindo as três jovens, levam o caso à atenção nacional e abrem o debate público.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "2004-09-01",
    title: "Contexto Histórico de Inteligência Estrangeira",
    body: "A desclassificação de documentos da CIA da era da Guerra Fria revela interesse histórico de agências estrangeiras de inteligência em fenômenos OVNI sul-americanos, estabelecendo precedente para cooperação interagências em incidentes extraordinários.",
    sourceIds: ["cia-ufo-reading-room", "cia-brazil-document-search"]
  },
  {
    date: "2020-01-20",
    title: "Desenvolvimento de Terminal Varginha",
    body: "Tem início o desenvolvimento da narrativa fictícia, usando o caso histórico de Varginha como inspiração para uma experiência interativa que explora segredo governamental, credibilidade de testemunhas e a construção da verdade a partir de relatos concorrentes.",
    sourceIds: ["ufo-com-br", "openminds-varginha", "fbi-vault-ufo", "cia-ufo-reading-room"]
  }
];

export const varginhaArticlePath = "main.mdx" as const;
