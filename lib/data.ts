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
  glyph: string;
  url?: string;
  area?: string; // ex: "COMERCIAL", "OPERAÇÃO/CREATORS", "TECH"
};

/** Top-level areas used by the filter row. */
export const AREAS = ["COMERCIAL", "OPERAÇÃO", "TECH"] as const;
export type Area = (typeof AREAS)[number];

export const CORES: Core[] = [
  {
    id: "ugc",
    name: "Gerador de Roteiros UGC",
    codename: "CTX-01",
    category: "Content Intelligence",
    description:
      "Maximiza o ROAS e a produtividade do time de UGCs com geração contínua de roteiros calibrados.",
    status: "online",
    load: 78,
    agents: 8,
    version: "4.1.2",
    accent: "violet",
    glyph: "◐",
    url: "https://ugc-turbo-roberto.onrender.com/",
    area: "OPERAÇÃO/CREATORS",
  },
  {
    id: "octopus",
    name: "Octopus",
    codename: "CTX-02",
    category: "Conversion Engine",
    description:
      "Maximiza a taxa de conversão dos Closers em reunião com inteligência aplicada ao funil de vendas.",
    status: "online",
    load: 84,
    agents: 9,
    version: "3.4.0",
    accent: "cyan",
    glyph: "◑",
    url: "https://turbo-octopus.onrender.com",
    area: "COMERCIAL",
  },
  {
    id: "copiloto",
    name: "Copiloto",
    codename: "CTX-03",
    category: "Sales Operations",
    description:
      "Gerencia o time comercial em tempo real — performance, prioridades e fluxos sob um único pulso.",
    status: "online",
    load: 71,
    agents: 6,
    version: "2.8.1",
    accent: "mint",
    glyph: "◒",
    url: "https://flow-sales-sense.lovable.app/",
    area: "COMERCIAL",
  },
  {
    id: "tech-hub",
    name: "Central de Tech",
    codename: "CTX-04",
    category: "Product Layer",
    description:
      "Centraliza todos os produtos da área de Tech da Turbo em uma única superfície operacional.",
    status: "online",
    load: 66,
    agents: 7,
    version: "5.0.0",
    accent: "indigo",
    glyph: "◓",
    url: "https://tech.turbopartners.com.br/",
    area: "OPERAÇÃO/TECH",
  },
  {
    id: "epictetus",
    name: "Epictetus",
    codename: "CTX-05",
    category: "CRM Layer",
    description:
      "Resolve gargalos do Bitrix em caráter temporário e serve de blueprint para o novo CRM proprietário.",
    status: "online",
    load: 58,
    agents: 5,
    version: "1.6.0",
    accent: "amber",
    glyph: "◔",
    url: "https://epictetus.onrender.com/",
    area: "COMERCIAL",
  },
  {
    id: "meeting-analyzer",
    name: "Analisador de Reuniões",
    codename: "CTX-06",
    category: "Meeting Intelligence",
    description:
      "Transforma reuniões em insights acionáveis — síntese, decisões e próximos passos extraídos automaticamente.",
    status: "online",
    load: 62,
    agents: 4,
    version: "2.3.0",
    accent: "rose",
    glyph: "◕",
    url: "https://manager-insight-coach.lovable.app/",
    area: "OPERAÇÃO",
  },
  {
    id: "qbr",
    name: "QBR",
    codename: "CTX-07",
    category: "Strategic Planning",
    description:
      "Planejamento estratégico de resultados trimestrais — leitura de ciclo, metas e plays para o próximo período.",
    status: "online",
    load: 49,
    agents: 5,
    version: "1.8.2",
    accent: "violet",
    glyph: "◖",
    url: "https://clientes.turbopartners.com.br/qbr/",
    area: "OPERAÇÃO",
  },
  {
    id: "social-intel",
    name: "Social Media Intelligence",
    codename: "CTX-08",
    category: "Network Cortex",
    description:
      "Inteligência de dados para redes sociais — sinal, padrão e oportunidade lidos em alta densidade.",
    status: "online",
    load: 73,
    agents: 6,
    version: "3.1.0",
    accent: "cyan",
    glyph: "◗",
    url: "https://turbo-social-sistem.lovable.app/login",
    area: "OPERAÇÃO/SOCIAL",
  },
  {
    id: "cro-analyzer",
    name: "Analisador de CRO",
    codename: "CTX-09",
    category: "Conversion Lab",
    description:
      "Otimiza conversões com análises inteligentes — hipóteses, testes e impacto quantificado por superfície.",
    status: "online",
    load: 55,
    agents: 4,
    version: "1.4.0",
    accent: "mint",
    glyph: "◜",
    url: "https://cro-turbo-tech.vercel.app/",
    area: "TECH",
  },
  {
    id: "painel-cross",
    name: "Painel de Cross",
    codename: "CTX-10",
    category: "Cross-Squad Panel",
    description:
      "Painel unificado de visão cruzada — leitura simultânea de squads, métricas e operações sob uma única superfície.",
    status: "online",
    load: 63,
    agents: 5,
    version: "1.0.0",
    accent: "indigo",
    glyph: "◝",
    url: "https://absolut-cross.lovable.app/",
    area: "COMERCIAL",
  },
];


export type Bundle = {
    id: string;
    scope: string;
    name: string;
    description: string;
    status: "active" | "scheduled" | "draft";
    cores: string[];
    cycles: number;
    startDate: string;
    endDate: string;
    accent: "violet" | "cyan" | "amber" | "rose";
};

export const BUNDLES: Bundle[] = [
  {
        id: "bundle-01",
        scope: "Sales",
        name: "Conversão Acelerada",
        description: "Stack operacional para maximizar a taxa de conversão do time comercial com IA aplicada ao funil.",
        status: "active",
        cores: ["Octopus", "Copiloto", "Epictetus"],
        cycles: 3,
        startDate: "Mai 01",
        endDate: "Jun 30",
        accent: "cyan",
  },
  {
        id: "bundle-02",
        scope: "Content",
        name: "Pipeline UGC",
        description: "Geração contínua de roteiros calibrados para maximizar ROAS e produtividade do time de UGCs.",
        status: "active",
        cores: ["Gerador UGC", "Central de Tech"],
        cycles: 5,
        startDate: "Abr 15",
        endDate: "Jul 15",
        accent: "violet",
  },
  {
        id: "bundle-03",
        scope: "Ops",
        name: "Tech Core",
        description: "Centralização de todos os produtos da área de Tech em uma única superfície operacional.",
        status: "scheduled",
        cores: ["Central de Tech", "Epictetus"],
        cycles: 2,
        startDate: "Jun 01",
        endDate: "Ago 31",
        accent: "amber",
  },
  {
        id: "bundle-04",
        scope: "CRM",
        name: "CRM Transition",
        description: "Resolução de gargalos do Bitrix e blueprint para o novo CRM proprietário da Turbo.",
        status: "draft",
        cores: ["Epictetus"],
        cycles: 1,
        startDate: "Jul 01",
        endDate: "Set 30",
        accent: "rose",
  },
  ];
