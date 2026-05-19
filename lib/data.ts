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
};

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
    url: "https://sales-jornada.onrender.com/",
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
  },
  {
    id: "xpto-06",
    name: "XPTO",
    codename: "CTX-06",
    category: "Reserved Slot",
    description:
      "Slot reservado. Próximo núcleo de inteligência aguardando ativação.",
    status: "standby",
    load: 6,
    agents: 0,
    version: "0.0.1",
    accent: "rose",
    glyph: "◕",
  },
  {
    id: "xpto-07",
    name: "XPTO",
    codename: "CTX-07",
    category: "Reserved Slot",
    description:
      "Slot reservado. Próximo núcleo de inteligência aguardando ativação.",
    status: "standby",
    load: 4,
    agents: 0,
    version: "0.0.1",
    accent: "violet",
    glyph: "◖",
  },
  {
    id: "xpto-08",
    name: "XPTO",
    codename: "CTX-08",
    category: "Reserved Slot",
    description:
      "Slot reservado. Próximo núcleo de inteligência aguardando ativação.",
    status: "standby",
    load: 3,
    agents: 0,
    version: "0.0.1",
    accent: "cyan",
    glyph: "◗",
  },
  {
    id: "xpto-09",
    name: "XPTO",
    codename: "CTX-09",
    category: "Reserved Slot",
    description:
      "Slot reservado. Próximo núcleo de inteligência aguardando ativação.",
    status: "standby",
    load: 2,
    agents: 0,
    version: "0.0.1",
    accent: "mint",
    glyph: "◜",
  },
  {
    id: "xpto-10",
    name: "XPTO",
    codename: "CTX-10",
    category: "Reserved Slot",
    description:
      "Slot reservado. Próximo núcleo de inteligência aguardando ativação.",
    status: "standby",
    load: 2,
    agents: 0,
    version: "0.0.1",
    accent: "indigo",
    glyph: "◝",
  },
];
