export interface FeatureCard {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  shortDesc: string;
  detailedDesc: string;
  metrics: {
    label: string;
    value: string;
  }[];
  specifications: string[];
}

export const FeaturesData: FeatureCard[] = [
  {
    id: "floresta",
    category: "Meio Ambiente",
    title: "Reserva de Biodiversidade",
    subtitle: "63 Hectares preservados na Mata Atlântica",
    image: "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/capa-sec01/capa_sec_01-2.jpg",
    shortDesc: "Reserva de Mata Atlântica com trilhas, rica biodiversidade e ar puro, propícia para crédito de carbono e ecoturismo.",
    detailedDesc: "A Fazenda Santa Cecília ostenta uma exuberante floresta nativa preservada pertencente ao bioma da Mata Atlântica brasileira. Com trilhas ecológicas desenhadas de forma sustentável, a propriedade é um refúgio natural absoluto de biodiversidade. Além do indescritível valor estético e bem-estar, a área está em plena conformidade com o Código Florestal brasileiro, oferecendo um gigantesco potencial de exploração para créditos de carbono corporativos ou fomento de turismo de experiência ecológica de alto padrão (Glamping).",
    metrics: [
      { label: "Bioma Protegido", value: "Mata Atlântica" },
      { label: "Preservação Legal", value: "100% Regularizada" },
      { label: "Trilhas Autas", value: "Mais de 5 km" },
      { label: "Captação Co2 Est.", value: "Alta Capacidade" }
    ],
    specifications: [
      "Catalogação completa da fauna e flora local disponível",
      "Trilhas demarcadas para quadriciclo ou caminhadas estruturadas",
      "Ar puro com índice de poluição zero",
      "Espaço pré-mapeado para projetos ecológicos ou bangalôs suspensos"
    ]
  },
  {
    id: "terreno",
    category: "Área da Propriedade",
    title: "Informações do Terreno",
    subtitle: "",
    image: "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/capa-sec-02/02-MAPA.jpeg",
    shortDesc: "Localização estratégica em Patrocínio Paulista, com topografia propícia e solo de alta fertilidade.",
    detailedDesc: "Com uma área total de 63 hectares disponíveis para venda, a fazenda se destaca pelo equilíbrio entre conservação ecológica, lazer e áreas produtivas prontas para gerar receita. Toda a propriedade está em estrita conformidade com a legislação ambiental vigente, garantindo uma transação jurídica segura e sem pendências.",
    metrics: [
      { label: "Reserva Legal", value: "41 hectares" },
      { label: "Área Agricultável", value: "10 hectares" },
      { label: "Sede e Área de Lazer", value: "2 hectares" },
      { label: "Área de Preservação Permanente", value: "10 hectares" }
    ],
    specifications: [
      "10 hectares de terras férteis prontas para pecuária, cultivo de lavouras, agroflorestas ou expansão agrícola.",
      "Sede e área de lazer totalmente estruturadas para a vivência, bem-estar, paisagismo e infraestrutura social da propriedade.",
      "10 hectares dedicados à proteção dos recursos hídricos.",
      "41 hectares de mata nativa preservada, funcionando como um valioso ativo ambiental."
    ]
  },
  {
    id: "sede",
    category: "Funcionalidade e Tradição",
    title: "Casa Sede",
    subtitle: "Residência histórica preservada.",
    image: "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/capa-sec-03/03_MIDIA01%20(1).jpeg",
    shortDesc: "Mansão de campo maravilhosa com living panorâmico, design de interiores impecável e 7 quartos espaçosos.",
    detailedDesc: "Fundada em 1930 e reformada entre 2020 e 2021, a residência mantém sua arquitetura tradicional preservada, combinando o charme das grandes propriedades históricas com o conforto e funcionalidade das atualizações modernas.",
    metrics: [
      { label: "Quartos Disponíveis", value: "7 (4 Suítes Master)" },
      { label: "Área Construída", value: "450 m²" },
      { label: "Aquecimento", value: "Solar de Alta Eficiência" },
      { label: "Climatização", value: "Lareira & Ambientes Ventilados" }
    ],
    specifications: [
      "Suíte master com hidromassagem e vista para as montanhas",
      "Móveis planejados de madeira nobre de lei em todos os cômodos",
      "Acabamentos premium com porcelanato rústico e mármore escovado",
      "Janelas panorâmicas com isolamento acústico e térmico"
    ]
  },
  {
    id: "lazer",
    category: "Infraestrutura",
    title: "Lazer e Convivência",
    subtitle: "O Cenário Perfeito.",
    image: "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/capa-04/04-capa.jpg",
    shortDesc: "Piscina aquecida de borda infinita, quadra de tênis oficial, sauna e spa integrados do mais alto padrão.",
    detailedDesc: "A fazenda oferece uma infraestrutura de lazer completa e perfeitamente integrada à natureza, projetada tanto para o descanso em família quanto para sediar grandes eventos e recepções.",
    metrics: [
      { label: "Piscina Borda Infinita", value: "Pedra Hijau Natural" },
      { label: "Quadra de Tênis", value: "Saibro Ofic. c/ Ilum." },
      { label: "Spa Integrado", value: "Saunas Seca e Úmida" },
      { label: "Estábulos Cavalos", value: "8 Baias Montadas" }
    ],
    specifications: [
      "Espaço lounge integrado com churrasqueira e chopeira naja instalada",
      "Playground infantil rústico integrado à natureza",
      "Caminhos revestidos de pedras naturais com iluminação automatizada",
      "Pomar formado com mais de 30 espécies frutíferas em plena produção"
    ]
  },
  {
    id: "hidricos",
    category: "Riqueza e Autossuficiência",
    title: "Recursos Hídricos",
    subtitle: "Riqueza de águas puras com nascentes, represa e riacho.",
    image: "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/capa-sec-05/capa-sec-05.jpg", // GORGEOUS water stream / waterfall in forest.
    shortDesc: "Três nascentes intocadas, cachoeira interna deslumbrante, ribeirão limpo e represas próprias.",
    detailedDesc: "Um dos maiores tesouros da fazenda é sua impressionante abundância em recursos hídricos naturais — segurança hídrica estratégica e enorme potencial para lazer, paisagismo e atividades agroecológicas.",
    metrics: [
      { label: "Nascentes Minerais", value: "3 Fontes Ativas" },
      { label: "Represas Próprias", value: "2 Lagos Formados" },
      { label: "Outorga d'Água", value: "100% Homologada" },
      { label: "Distribuição", value: "Gravidade e Bombeamento" }
    ],
    specifications: [
      "Reservatório central de água potável de alta capacidade",
      "Qualidade da água atestada como alcalina de excelente pureza",
      "Pontos de captação mapeados de acordo com normas ambientais",
      "Ideal para engarrafamento mineral ou piscicultura assistida"
    ]
  },
  {
    id: "agricola",
    category: "Alta Tecnologia e Versatilidade",
    title: "Produção Agrícola",
    subtitle: "Estufa com irrigação automatizada de alta produtividade",
    image: "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/capa-sec-06/capa-sec-06.jpg",
    shortDesc: "Estrutura hidropônica automatizada pronta para cultivo de hortifrúti de valor agregado ou mudas especiais.",
    detailedDesc: "Estufa profissional de última geração, com engenharia de precisão para máxima produtividade e controle climático em todas as estações.",
    metrics: [
      { label: "Área da Estufa", value: "2.200 m²" },
      { label: "Irrigação", value: "Gotejamento & Fertirrigação" },
      { label: "Tecnologia", value: "Painel Computadorizado" },
      { label: "Capacidade colheita", value: "Dezenas de toneladas/ano" }
    ],
    specifications: [
      "Sistema israelense de dosagem de nutrientes automatizado",
      "Mallas de sombreamento de acionamento retrátil elétrico",
      "Estrutura metálica galvanizada anticorrosão reforçada para ventos fortes",
      "Reservatório de nutrição independente com filtragem UV"
    ]
  },
  {
    id: "pecuaria",
    category: "Estruturas Completas",
    title: "Pecuária",
    subtitle: "Manejo inteligente de elite e ordenha mecânica",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLsbYK4udbIfC7kRGRebj1XkZszfehBpA7ZlKXVF-9xtazRPUlXFbsGNr2CSktC6tSThup6d6-gfgbOLs5rGhhy9NCT47Z17u33DtZmwwcXYcyv49J4vvJNtQt0i8R6FyIFmyDsdkGfx-1ooYF7y9ShJNq3PT-WMZKfno78lM-6b1Hdw0dd4ula66uvlNrpUOS-VRIi3GjTCye9n1fReDiufnMHmWnHH7aBlGaLITCuQngYPnDI5SeLhJME",
    shortDesc: "Curral de alto padrão planejado, balança digital de alta precisão e ordenha automática higiênica.",
    detailedDesc: "Projetada com preceitos rigorosos de bem-estar animal e eficiência produtiva, a área da pecuária conta com pastos formados e divididos com cercas de tanchão e arame liso. Dispõe de um curral completo pavimentado em concreto antiderrapante com tronco de contenção pneumática para vacinação, balança eletrônica com leitor de brinco RFID e embarcadouro reforçado. Tem também uma sala de ordenha mecânica moderna, azulejada até o teto, com resfriador térmico em aço inox.",
    metrics: [
      { label: "Divisão de Pastagens", value: "Piqueteamento Rotacionado" },
      { label: "Capac. Curral", value: "Até 120 Cabeças" },
      { label: "Balança Digital", value: "Sistemas Eletrônicos RFID" },
      { label: "Estrutura Leiteira", value: "Ordenha Completa e Higiênica" }
    ],
    specifications: [
      "Cochos cobertos com abastecimento facilitado por corredor de serviço",
      "Tanque de expansão em aço inox de 1000 litros instalado",
      "Piso com canaletas de drenagem e poço de decantação ecológico",
      "Farmácia veterinária interna com armários refrigerados"
    ]
  },
  {
    id: "infraestrutura",
    category: "Infraestrutura",
    title: "Autossuficiência e Segurança",
    subtitle: "Sistemas robustos de energia autônoma e monitoramento ativo",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1200",
    shortDesc: "Subestação de energia trifásica com gerador a diesel automático de 50kVA e monitoramento integral.",
    detailedDesc: "A Fazenda Santa Cecília foi concebida sob os pilares da segurança patrimonial absoluta e da eficiência operacional contínua. Conta com sistema de monitoramento profissional de alta definição e rede elétrica trifásica com transformador independente de alta capacidade, amparada por um gerador a diesel automático cabinado de 50kVA redundante. Toda essa estrutura garante que as áreas de lazer, casa sede, ordenhadeiras e estufa nunca parem.",
    metrics: [
      { label: "Energia de Reserva", value: "Gerador Auto 50kVA" },
      { label: "Segurança Ativa", value: "Monitoramento 24h" },
      { label: "Rede Elétrica", value: "Trifásica Dedicada" },
      { label: "Conectividade", value: "Fibra Óptica IP" }
    ],
    specifications: [
      "Gerador automático cabinado silencioso de 50kVA com acionamento em segundos",
      "Câmeras IP de monitoramento monitoradas à distância com visão noturna",
      "Rede trifásica privada com transformador e cabeamento subterrâneo",
      "Guarita de segurança e portão de acesso eletrônico no pórtico de entrada"
    ]
  },
  {
    id: "maquinario",
    category: "Frota Completa",
    title: "Maquinários e Equipamentos",
    subtitle: "Galpão industrial equipado e tratores John Deere",
    image: "https://kogtreqhrypilvkiojce.supabase.co/storage/v1/object/public/capa-sec-09/capa-sec-09.jpg",
    shortDesc: "Oficina montada profissional, frota operacional robusta e rede elétrica trifásica com gerador automático.",
    detailedDesc: "Segurança de operação contínua de ponta a ponta. O setor de apoio logístico apresenta um galpão maciço em vigas metálicas galvanizadas e cobertura acústica para proteção das máquinas. A fazenda é entregue com trator John Deere traçado de excelente potência e implementos operacionais. Conta com gerador a diesel automático capaz de manter o bombeamento, a estufa e as ordenhadeiras ativas de forma autônoma em caso de interrupção na rede elétrica trifásica de alta tensão.",
    metrics: [
      { label: "Trator Traçado", value: "John Deere c/ Implementos" },
      { label: "Rede Elétrica", value: "Trifásica c/ Transf. Próprio" },
      { label: "Energia de Reserva", value: "Gerador Automático de 50kVA" },
      { label: "Oficina Dedicada", value: "Totalmente Equipada" }
    ],
    specifications: [
      "Galpão para máquinas de 200m² com vala de manutenção",
      "Implementos inclusos: Roçadeira, grade niveladora e perfurador de solo",
      "Compressores de ar de alta pressão da Schulz e lavadoras industriais",
      "Quadro de comando de bombas centralizado e automatizado"
    ]
  }
];

export interface MapHotspot {
  id: string;
  name: string;
  description: string;
  coords: { x: number; y: number }; // Percentage values
  details: string;
  iconName: string;
}

export const EstateHotspots: MapHotspot[] = [
  {
    id: "hotspot-sede",
    name: "Casa Sede & Lazer",
    description: "Mansão de 450 m², 7 quartos e piscina de borda infinita.",
    coords: { x: 50, y: 55 },
    details: "Instalação principal. Ponto mais abrigado e central da fazenda, oferendo total privacidade, vigilância inteligente conectada e paisagismo integrado com a piscina aquecida.",
    iconName: "Home"
  },
  {
    id: "hotspot-represa",
    name: "Lagos & Nascentes",
    description: "Abundância de água com 3 nascentes e ribeirão perene.",
    coords: { x: 30, y: 40 },
    details: "Zona de mananciais de extrema preservação. As represas dão suporte à pesca, esportes leves e regulam a umidade do microclima agrícola por evaporação saudável.",
    iconName: "Droplets"
  },
  {
    id: "hotspot-estufa",
    name: "Estufa Agrícola Climatizada",
    description: "2.200 m² de estrutura de gotejamento computadorizado.",
    coords: { x: 45, y: 25 },
    details: "Localizado no flanco norte da fazenda para melhor insolação diária. A estufa possui subestações elétricas, reservatórios suspensos para fertirrigação.",
    iconName: "Leaf"
  },
  {
    id: "hotspot-pecuaria",
    name: "Complexo de Pecuária",
    description: "Curral moderno, balança digital e galpão operacional.",
    coords: { x: 70, y: 45 },
    details: "Curral, balança eletrônica e ordenhadeiras de inox ficam posicionados estrategicamente ao leste para facilitar a coleta, mantendo os resíduos bem distantes da Casa Sede.",
    iconName: "PawPrint"
  },
  {
    id: "hotspot-mata",
    name: "Mata Atlântica Preservada",
    description: "Ecologia intocada propícia para créditos verdes e trilhas.",
    coords: { x: 25, y: 75 },
    details: "Cinturão verde de proteção ambiental cobrindo grande parte das encostas, excelente purificador climático, repleto de fauna protegida, trilhas de aventura pé e quadriciclo.",
    iconName: "Trees"
  }
];
