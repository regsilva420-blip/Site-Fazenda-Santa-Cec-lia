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
    title: "Serviços da Floresta",
    subtitle: "63 Hectares preservados na Mata Atlântica",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBY30spNZiLlmScVAJw6ZkSysxAxxGNa8OmlBUIITk_0-vhk6VgpNCe2SZ-c0hSMZOXwLRZFCkTT7WR61q7pkEVXr5NKM8bYan16EgGyWcHOhR7MqWEiBVp8gAWg1EZptH-cqcChRuBBWLFv8HjXstJ3CYuaJrTs1miixtz0O4phhQeyItWIe9ueA-_vsU6k0cwiyTj28-F9kA2p2UPy17hP_FGqSMXN4_cY5sqodU4rZ0tfS5f-yQxGc8RVSqq6B1lsplg1rYncLLQk7o",
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
    category: "63 Hectares",
    title: "Informações do Terreno",
    subtitle: "Altitude ideal e fertilidade espetacular",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLukWba-4xA1TwChX8JnfslRAIq5uJm8e1l4Vev3hiAdenBsSpjDa610fMFQPEJFy4x9yS6ZpLqYK4f6xPYBQjzbWyoxvBV0gHE3qaVsXoMiRnSdZAs_x3cdyzM-Bo_wuETPe3d6DlEvdLVx2Zx7_b7hf_08BFwvTmPsnkVEMk5SrtsUyKlVo7u7n6mwCKvqq6tZ4WiHj96yIjSCDCqmuwt-wsxAWufM6nNt3HvwCz8OA4OJLu4yQ39HiGHl",
    shortDesc: "Localização estratégica em Patrocínio Paulista, com topografia propícia e solo de alta fertilidade.",
    detailedDesc: "Com solo fértil de terra vermelha de altíssima qualidade (rica em nutrientes), o terreno apresenta topografia moderadamente ondulada a plana, facilitando o manejo automatizado. A altitude média de 950 metros proporciona temperaturas amenas o ano todo, ideais tanto para agricultura de precisão de alta rentabilidade (cafés gourmet e hortifrúti de estufa) quanto para moradia com conforto climático de excelência. A propriedade conta com acessos pavimentados de alta qualidade.",
    metrics: [
      { label: "Área Total", value: "63 Hectares" },
      { label: "Altitude Média", value: "950 Metros" },
      { label: "Tipo de Solo", value: "Terra Roxa Fértil" },
      { label: "Topografia", value: "Plana / Ondulada Média" }
    ],
    specifications: [
      "Acesso por asfalto excelente até o portão principal",
      "Totalmente cercada com mourões de eucalipto tratado e arame liso",
      "Georreferenciamento (GEO) e CAR homologados",
      "Subdivisões internas planejadas para maximizar o fluxo logístico"
    ]
  },
  {
    id: "sede",
    category: "7 Quartos · 450 M²",
    title: "Casa Sede",
    subtitle: "Luxo rústico contemporâneo sob medida",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLtNBCo6JGPJ7gbuWrwOGvUH-1dNVHjoxEt2Svg01qa_No8fRAMquotAD0HD5hRo44QTM_0lIBZx7fenS5hs-wYOCqM_F73iJ7StCz4E-ujQ1QvBzsHyryUcbVhW25AFWaLlj4Y-Al4PyEpm94h-qCWe9S-BzgSR3YoaIh8o8R0Q4d__w34Jycr1AKrpqOpz_e4VUrmA6SQrkB3NSFshADxC2KuI2iWhhIIbvrzIw1Rl9Ljdiq5LQ9uZOV4X",
    shortDesc: "Mansão de campo maravilhosa com living panorâmico, design de interiores impecável e 7 quartos espaçosos.",
    detailedDesc: "A imponente Casa Sede é uma obra de arte da arquitetura rústica moderna. Seus 450m² de área construída abrigam 7 dormitórios espetaculares, sendo 4 suítes com closet e banheiros privativos equipados com aquecimento solar. O ponto central da residência é um majestoso living integrado com pé-direito imenso e lareira central de pedra rústica, conectando-se a uma charmosa cozinha gourmet de estilo caipira moderno com fogão a lenha de ferro fundido. Toda a residência é envolta por um amplo terraço contínuo com vista impecável das montanhas.",
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
    subtitle: "Clube privado espetacular com borda infinita",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLszlM6uVXJhZ9h6EpUW8WYKZuc41r8fe4eTJOgxOmGPreh1CNM5FCO_VmTpqTkgFTL3g6-MjtBZlXKtAJWTbO7Khu06VCgMfE4Anx9uE_kNVgtTQLD7w-Bp4AR9-lb6B0tWv2De2koKOPwfnoqxU_7eqofoNW9KzcWizimX9Uf8a9dAHbJmkSg2jW_5gsGJEp1LFZjA3Bp9H4_hXSk99lMlZJPMwCsCvRM4rsnv3kLplMuTNVEIiaY0auU",
    shortDesc: "Piscina aquecida de borda infinita, quadra de tênis oficial, sauna e spa integrados do mais alto padrão.",
    detailedDesc: "Um verdadeiro resort privado à sua disposição. Com projeto paisagístico deslumbrante, a fazenda apresenta uma magnífica piscina de borda infinita aquecida por coletores solares dedicados, integrando-se perfeitamente com a paisagem rural. Conta também com uma excelente quadra de tênis de saibro estruturada com drenagem rápida e iluminação LED, SPA completo com sauna úmida/seca e área de massagem, e um pitoresco fogo de chão (fire pit) esculpido em blocos de granito para noites sob o céu estrelado.",
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
    category: "Nascentes Próprias",
    title: "Recursos Hídricos",
    subtitle: "Riqueza de águas puras com represas e cascatas",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=1200", // GORGEOUS water stream / waterfall in forest.
    shortDesc: "Três nascentes intocadas, cachoeira interna deslumbrante, ribeirão limpo e represas próprias.",
    detailedDesc: "A abundância de recursos hídricos é o maior trunfo ecológico e patrimonial da Fazenda Santa Cecília. A propriedade abriga 3 nascentes de água mineral puríssima que jorram continuamente da rocha. Conta com um riacho de fluxo perene que serpenteia as áreas de cultivo e mata, garantindo fartura para irrigação regularizada e lazer. Possui 2 belíssimas represas exclusivas, perfeitas para esportes aquáticos não motorizados (stand-up paddle, caiaque) e criação abundante de peixes nativos.",
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
    category: "Estufa 2.200 M²",
    title: "Produção Agrícola",
    subtitle: "Estufa climatizada de altíssima produtividade",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLsDu_SSnf5Ldjfitsrg12F562FuszjJrONjFVC-y2Kv2HRuD3EXlKs6teZdexosfrT6fVJnUVToXlfe-NNj7AGZcLj0j_vxppVdOzyNCDQ34_17juJliElxPsdE47p8p2dG4sgyUHEHmbuBEPqdCMb5WgnX5UwnE-4Qw0jftzdelYhT_mxyToc4H7QWVrnx69r8ti5Hhc5G1mvlxjyzd8pbvnthsFtHY1wfmkg5ccGg4XVquwyEryj95Vfq",
    shortDesc: "Estrutura hidropônica automatizada pronta para cultivo de hortifrúti de valor agregado ou mudas especiais.",
    detailedDesc: "Voltada para a agricultura de alta rentabilidade com tecnologia de ponta, a fazenda apresenta uma megacriação de estufa com 2.200m² de área útil total. Equipada com painéis térmicos contra radiação UV, controle de temperatura por nebulização de névoa fina automática e um console inteligente de fertirrigação computadorizada, a estrutura está pronta para a produção contínua de hortaliças gourmet, flores de luxo ou mudas de café especial.",
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
    id: "maquinario",
    category: "Frota Completa",
    title: "Maquinários e Equipamentos",
    subtitle: "Galpão industrial equipado e tratores John Deere",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLs-gsLklOcdnhESby3mqamw8taDNeO89RlvuUfCfsZYrFFHWmC5hJH6AaYV4yzXCRNhzQk2wpJM85KofIPlKRYqZHYjEGWY0n7b7J1rQseRO3EkTauszs95VXLI8CdVtodhDQQvjQ91UnGjvJHPM1Hf_i1n4rFqlgK5NBTTtaW8bxx8NSPDKNHi-qaNYtTBbQGFAkpMz6EYBv2n2SYyba4tAn4A0sUp7kD9TMLCi6tDMUFmIcS46gYF6pR9",
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
