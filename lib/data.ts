export type CoreStatus = "online" | "training" | "calibrating" | "standby";

export type Core = {
  id: string;
  name: string;
  codename: string;
  category: string;
  description: string;
  status: CoreStatus;
  load: number; // 0..100
  agents: number;
  version: string;
  accent: "violet" | "cyan" | "mint" | "amber" | "rose" | "indigo";
  glyph: string; // single character / symbol
};

export const CORES: Core[] = [
  {
    id: "ugc",
    name: "Nexus UGC",
    codename: "CTX-01",
    category: "Content Intelligence",
    description:
      "Orquestra criadores, roteiros e produção de UGC em ciclos contínuos de iteração criativa.",
    status: "online",
    load: 72,
    agents: 8,
    version: "4.1.2",
    accent: "violet",
    glyph: "◐",
  },
  {
    id: "growth",
    name: "Nexus Growth",
    codename: "CTX-02",
    category: "Performance Engine",
    description:
      "Motor de aquisição autônomo. Otimização contínua de campanhas em escala não-linear.",
    status: "online",
    load: 88,
    agents: 12,
    version: "5.0.0",
    accent: "cyan",
    glyph: "◑",
  },
  {
    id: "cx",
    name: "Nexus CX",
    codename: "CTX-03",
    category: "Customer Cortex",
    description:
      "Camada conversacional viva. Atendimento, retenção e expansão operando 24/7.",
    status: "online",
    load: 64,
    agents: 6,
    version: "3.8.4",
    accent: "mint",
    glyph: "◒",
  },
  {
    id: "copy",
    name: "Nexus Copy",
    codename: "CTX-04",
    category: "Linguistic Core",
    description:
      "Motor de copywriting proprietário. Estilo, tom e conversão calibrados por marca.",
    status: "online",
    load: 54,
    agents: 4,
    version: "2.9.1",
    accent: "indigo",
    glyph: "◓",
  },
  {
    id: "media",
    name: "Nexus Media",
    codename: "CTX-05",
    category: "Visual Synthesis",
    description:
      "Geração e curadoria visual. Identidade estética sob arquitetura proprietária.",
    status: "training",
    load: 41,
    agents: 5,
    version: "1.4.0",
    accent: "rose",
    glyph: "◔",
  },
  {
    id: "ops",
    name: "Nexus Ops",
    codename: "CTX-06",
    category: "Operational Layer",
    description:
      "Backbone das operações internas. Workflows, decisões e governança automatizadas.",
    status: "online",
    load: 79,
    agents: 9,
    version: "6.2.0",
    accent: "amber",
    glyph: "◕",
  },
  {
    id: "labs",
    name: "Nexus Labs",
    codename: "CTX-07",
    category: "R&D Sandbox",
    description:
      "Ambiente experimental. Onde novos núcleos nascem antes de virar produção.",
    status: "calibrating",
    load: 22,
    agents: 3,
    version: "0.9.1",
    accent: "violet",
    glyph: "◖",
  },
  {
    id: "insight",
    name: "Nexus Insight",
    codename: "CTX-08",
    category: "Strategic Intelligence",
    description:
      "Síntese estratégica. Lê o mercado, decodifica padrões e antecipa movimentos.",
    status: "online",
    load: 67,
    agents: 7,
    version: "3.3.0",
    accent: "cyan",
    glyph: "◗",
  },
  {
    id: "creative",
    name: "Nexus Creative",
    codename: "CTX-09",
    category: "Brand Synthesis",
    description:
      "Núcleo de direção criativa. Conceitos, narrativas e identidade em alta densidade.",
    status: "online",
    load: 58,
    agents: 6,
    version: "2.1.4",
    accent: "rose",
    glyph: "◜",
  },
  {
    id: "community",
    name: "Nexus Community",
    codename: "CTX-10",
    category: "Network Layer",
    description:
      "Sistema de inteligência comunitária. Conexões, presença e cultura viva.",
    status: "standby",
    load: 18,
    agents: 2,
    version: "1.0.0",
    accent: "mint",
    glyph: "◝",
  },
];

export type Bundle = {
  id: string;
  name: string;
  description: string;
  scope: string;
  status: "active" | "scheduled" | "draft";
  cores: string[];
  startDate: string;
  endDate: string;
  cycles: number;
  accent: "violet" | "cyan" | "amber" | "rose";
};

export const BUNDLES: Bundle[] = [
  {
    id: "creator-summit",
    name: "Creator Summit",
    description:
      "Stack operacional do evento. Curadoria, ativação e conversão sob um único núcleo temporário.",
    scope: "Event · Activation",
    status: "active",
    cores: ["Nexus UGC", "Nexus Creative", "Nexus Community", "Nexus Insight"],
    startDate: "12.MAY",
    endDate: "08.JUN",
    cycles: 4,
    accent: "violet",
  },
  {
    id: "turbo-bootcamp",
    name: "Turbo Bootcamp",
    description:
      "Programa imersivo de aceleração. Operação completa de onboarding em ciclos de 21 dias.",
    scope: "Program · Education",
    status: "active",
    cores: ["Nexus Ops", "Nexus Copy", "Nexus CX"],
    startDate: "01.MAY",
    endDate: "22.MAY",
    cycles: 1,
    accent: "cyan",
  },
  {
    id: "organiker",
    name: "Organiker",
    description:
      "Bundle estratégico para arquitetura organizacional. Estruturação fina e alinhamento operacional.",
    scope: "Internal · Strategy",
    status: "scheduled",
    cores: ["Nexus Ops", "Nexus Insight"],
    startDate: "19.MAY",
    endDate: "30.JUN",
    cycles: 6,
    accent: "amber",
  },
  {
    id: "digital-aligner",
    name: "Digital Aligner",
    description:
      "Calibração de presença digital ponta-a-ponta. Identidade, narrativa e performance sincronizadas.",
    scope: "Brand · Performance",
    status: "active",
    cores: ["Nexus Creative", "Nexus Growth", "Nexus Media"],
    startDate: "06.MAY",
    endDate: "06.JUL",
    cycles: 2,
    accent: "rose",
  },
];
