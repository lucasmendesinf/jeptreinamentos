import {
  Award,
  BadgeCheck,
  ClipboardCheck,
  Construction,
  Factory,
  Flame,
  GraduationCap,
  HardHat,
  LifeBuoy,
  Route,
  ShieldCheck,
  Siren,
  Wrench,
  Zap,
} from "lucide-react";

export const siteConfig = {
  name: "J&P Treinamentos",
  legalName: "J & P Treinamentos e Assessoria",
  tagline: "Treinamentos em segurança do trabalho e prevenção de incêndios",
  url: "https://jeptreinamentos.com.br",
  phone: "(41) 99229-9572",
  phoneHref: "tel:+5541992299572",
  whatsapp: "5541992299572",
  email: "contato@jeptreinamentos.com.br",
  emailHref: "mailto:contato@jeptreinamentos.com.br",
  responsible: "Pedro Alex Machado",
  credential: "Bombeiro Civil - CNBC 183233",
  founded: "2019",
  serviceHours: "Horário de atendimento a confirmar",
  addressNote: "Endereço comercial a informar",
  social: {
    facebook: "https://www.facebook.com/PedroAlexMachado/",
    instagram: "",
    linkedin: "",
  },
  defaultWhatsappMessage:
    "Olá! Acessei o site da J&P Treinamentos e gostaria de solicitar informações sobre treinamentos e serviços de prevenção de incêndios.",
};

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Treinamentos", href: "/treinamentos" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
];

export const trustIndicators = [
  { label: "Anos de experiência", value: "Desde 2019", note: "Confirmado no site atual" },
  { label: "Profissionais treinados", value: "A informar", note: "Inserir número real" },
  { label: "Empresas atendidas", value: "A informar", note: "Inserir número real" },
  { label: "Treinamentos realizados", value: "A informar", note: "Inserir número real" },
];

export const trainings = [
  {
    slug: "brigada-de-incendio",
    name: "Brigada de Incêndio",
    short: "Treinamento de brigadas para preparar equipes, reduzir riscos e fortalecer a resposta inicial a emergências.",
    icon: Flame,
    relatedNorms: ["NR 23", "Instruções do Corpo de Bombeiros aplicáveis"],
    audience: "Empresas, condomínios, equipes internas e profissionais indicados para atuação preventiva.",
    modality: "Teórico e prático, conforme necessidade e escopo contratado.",
    practical: "Pode incluir simulações, uso orientado de equipamentos e procedimentos de abandono.",
    workload: "Campo configurável: inserir carga horária oficial da empresa.",
    validity: "Campo configurável: inserir regra de reciclagem aplicável ao cliente.",
    objectives: [
      "Preparar participantes para reconhecer riscos e agir preventivamente.",
      "Orientar condutas iniciais em princípios de incêndio e emergências.",
      "Reforçar rotas de fuga, abandono de área e comunicação interna.",
    ],
    syllabus: ["Prevenção", "Classes de incêndio", "Extintores", "Abandono de área", "Primeiros procedimentos"],
  },
  {
    slug: "nr-6-epi",
    name: "NR 6 - Equipamentos de Proteção Individual",
    short: "Treinamento sobre uso adequado, armazenamento, cuidados e tipos de EPIs utilizados em cada atividade.",
    icon: HardHat,
    relatedNorms: ["NR 6"],
    audience: "Colaboradores que utilizam EPIs em suas atividades.",
    modality: "Teórico, com demonstrações quando aplicavel.",
    practical: "A prática pode ser adaptada aos EPIs utilizados pela empresa.",
    workload: "Campo configurável.",
    validity: "Campo configurável.",
    objectives: ["Orientar o uso correto de EPIs.", "Reforçar responsabilidades e boas práticas.", "Reduzir condutas inseguras."],
    syllabus: ["Tipos de EPI", "Ajuste e conservação", "Responsabilidades", "Limites de proteção", "Procedimentos internos"],
  },
  {
    slug: "nr-10-seguranca-em-eletricidade",
    name: "NR 10 - Segurança em Eletricidade",
    short: "Capacitação voltada a riscos elétricos, medidas preventivas e procedimentos seguros.",
    icon: Zap,
    relatedNorms: ["NR 10"],
    audience: "Profissionais expostos a riscos elétricos conforme função e ambiente de trabalho.",
    modality: "Teórico e prático quando previsto no escopo.",
    practical: "Campos práticos devem ser definidos de acordo com a atividade da empresa.",
    workload: "Campo configurável.",
    validity: "Campo configurável.",
    objectives: ["Reconhecer riscos elétricos.", "Orientar medidas de controle.", "Fortalecer a cultura de segurança."],
    syllabus: ["Riscos elétricos", "Medidas de controle", "Procedimentos", "EPI e EPC", "Emergências"],
  },
  {
    slug: "nr-11-operador-de-empilhadeira",
    name: "NR 11 - Operador de Empilhadeira",
    short: "Capacitação para operador de empilhadeira, com foco em qualificação, riscos da operação e segurança no ambiente de trabalho.",
    icon: Construction,
    relatedNorms: ["NR 11"],
    audience: "Operadores e profissionais envolvidos em transporte, movimentação e armazenagem.",
    modality: "Teórico e prático, conforme equipamento e condições locais.",
    practical: "A prática deve considerar o tipo de equipamento e área disponível.",
    workload: "Campo configurável.",
    validity: "Campo configurável.",
    objectives: ["Reforçar operação segura.", "Reduzir riscos na movimentação de cargas.", "Orientar inspeções e condutas preventivas."],
    syllabus: ["Inspeção", "Estabilidade", "Movimentação", "Sinalização", "Cuidados operacionais"],
  },
  {
    slug: "nr-12-seguranca-em-maquinas",
    name: "NR 12 - Segurança em Máquinas",
    short: "Orientação sobre riscos, proteções, procedimentos e adequações relacionadas a máquinas e equipamentos.",
    icon: Wrench,
    relatedNorms: ["NR 12"],
    audience: "Operadores, manutenção, lideranças e equipes expostas a máquinas.",
    modality: "Teórico, com avaliação prática quando contratada.",
    practical: "Adequada ao parque de máquinas e procedimentos da empresa.",
    workload: "Campo configurável.",
    validity: "Campo configurável.",
    objectives: ["Reconhecer riscos mecânicos.", "Orientar proteções e procedimentos.", "Apoiar adequações preventivas."],
    syllabus: ["Zonas de risco", "Proteções", "Bloqueios", "Procedimentos", "Sinalização"],
  },
  {
    slug: "nr-23-protecao-contra-incendios",
    name: "NR 23 - Proteção Contra Incêndios",
    short: "Adequações e treinamentos ligados a prevenção de incêndios, brigadistas, sinalização, extintores e rotas de fuga.",
    icon: Siren,
    relatedNorms: ["NR 23"],
    audience: "Empresas e equipes que precisam reforçar medidas de proteção contra incêndios.",
    modality: "Teórico e prático conforme escopo.",
    practical: "Pode incluir demonstrações de extintores, rotas de fuga e procedimentos internos.",
    workload: "Campo configurável.",
    validity: "Campo configurável.",
    objectives: ["Fortalecer a prevenção.", "Orientar resposta inicial.", "Apoiar uma cultura de emergência organizada."],
    syllabus: ["Prevenção", "Alarmes", "Rotas de fuga", "Extintores", "Comunicação"],
  },
  {
    slug: "nr-33-espacos-confinados",
    name: "NR 33 - Espaços Confinados",
    short: "Treinamento para entrada em espaços confinados, riscos, medidor de gás e equipamentos de proteção adequados.",
    icon: ShieldCheck,
    relatedNorms: ["NR 33"],
    audience: "Trabalhadores autorizados, vigias, supervisores e equipes de apoio, conforme função.",
    modality: "Teórico e prático quando previsto.",
    practical: "Deve ser definida conforme atividade, ambiente e procedimentos da empresa.",
    workload: "Campo configurável.",
    validity: "Campo configurável.",
    objectives: ["Reconhecer perigos.", "Orientar controles e permissões.", "Reforçar condutas seguras."],
    syllabus: ["Caracterização", "Riscos", "Permissão de entrada", "Monitoramento", "Emergências"],
  },
  {
    slug: "nr-35-trabalho-em-altura",
    name: "NR 35 - Trabalho em Altura",
    short: "Treinamento de trabalho em altura com orientação sobre riscos, equipamentos, linha de vida, trava-quedas, cintos e sinalização.",
    icon: Route,
    relatedNorms: ["NR 35"],
    audience: "Profissionais que realizam ou acompanham atividades em altura.",
    modality: "Teórico e prático conforme escopo e estrutura disponível.",
    practical: "Pode incluir demonstrações de equipamentos e procedimentos de segurança.",
    workload: "Campo configurável.",
    validity: "Campo configurável.",
    objectives: ["Planejar atividades em altura.", "Orientar uso de sistemas de proteção.", "Reduzir exposição a quedas."],
    syllabus: ["Riscos", "Planejamento", "EPI", "Sistemas de proteção", "Condutas de emergência"],
  },
];

export const services = [
  { title: "Treinamentos e palestras", category: "Treinamentos", icon: GraduationCap, description: "Capacitações corporativas com linguagem clara, foco prático e conteúdo alinhado ao risco da operação." },
  { title: "Formação e reciclagem de brigada", category: "Prevenção de incêndios", icon: Flame, description: "Preparação de equipes para prevenção, resposta inicial e organização em emergências." },
  { title: "Adequações de prevenção de incêndio", category: "Adequações", icon: ClipboardCheck, description: "Apoio para adequar ambientes conforme projeto, orientações técnicas e exigências aplicáveis." },
  { title: "Placas de sinalização", category: "Sinalização", icon: Route, description: "Instalação e fixação de sinalização para orientar abandono, equipamentos e rotas de fuga." },
  { title: "Pintura de áreas de extintores e hidrantes", category: "Sinalização", icon: Construction, description: "Demarcação visual para manter equipamentos acessíveis e corretamente identificados." },
  { title: "Dimensionamento de rotas de fuga", category: "Prevenção de incêndios", icon: Route, description: "Orientação para fluxos de saída, leitura de ambiente e comunicação de emergência." },
  { title: "Testes de hidrantes", category: "Equipamentos", icon: LifeBuoy, description: "Verificações operacionais de sistemas de combate a incêndio conforme escopo definido." },
  { title: "Testes de bombas de água", category: "Equipamentos", icon: Wrench, description: "Apoio em testes e orientações para funcionamento de sistemas hidráulicos preventivos." },
  { title: "Orientação sobre extintores", category: "Equipamentos", icon: Flame, description: "Apoio na colocação, leitura de classes e orientação de uso inicial de extintores." },
  { title: "Acompanhamento de vistorias", category: "Vistorias", icon: BadgeCheck, description: "Suporte durante vistorias e organização de pendências para encaminhamento responsável." },
  { title: "Apoio para liberação de alvarás", category: "Vistorias", icon: Award, description: "Acompanhamento para regularizações junto ao Corpo de Bombeiros, conforme documentos disponíveis." },
  { title: "Adequação de máquinas conforme NR 12", category: "Segurança do trabalho", icon: Factory, description: "Orientações para melhorias, sinalização, proteções e procedimentos em máquinas." },
];

export const differentials = [
  "Instrutores qualificados",
  "Treinamentos teóricos e práticos",
  "Atendimento para empresas",
  "Conteúdo conforme normas aplicáveis",
  "Foco na prevenção",
  "Atendimento personalizado",
  "Experiência prática",
  "Suporte durante adequações",
];

export const processSteps = [
  "Solicitação de contato",
  "Levantamento da necessidade",
  "Envio da proposta",
  "Realização do treinamento ou servico",
  "Entrega dos documentos e orientacoes",
];

export const faqItems = [
  {
    question: "Quem precisa realizar treinamento de brigada de incêndio?",
    answer:
      "A necessidade depende da atividade, ocupação, características da edificação e regras aplicáveis ao local. A avaliação deve considerar o contexto da empresa e as orientacoes oficiais pertinentes.",
  },
  {
    question: "O treinamento possui aula prática?",
    answer:
      "Muitos treinamentos podem incluir atividades práticas, simulações ou demonstrações. O formato é definido conforme o escopo contratado, estrutura disponível e objetivo da capacitação.",
  },
  {
    question: "A J&P atende empresas?",
    answer:
      "Sim. A empresa atende demandas corporativas e também pessoas físicas, com orientação para treinamentos, palestras e serviços de prevenção.",
  },
  {
    question: "Os treinamentos seguem as normas regulamentadoras?",
    answer:
      "Os conteúdos são estruturados com referência nas normas aplicáveis, mas cada caso deve ser avaliado conforme função, risco, atividade e legislação vigente.",
  },
  {
    question: "A empresa realiza atendimento no local?",
    answer:
      "O atendimento pode ser organizado conforme necessidade, disponibilidade e condições do local. Essa informacao deve ser confirmada no momento do orçamento.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Você pode enviar o formulário de contato, falar pelo WhatsApp ou ligar para informar a necessidade, quantidade estimada de participantes e cidade de atendimento.",
  },
  {
    question: "Quais documentos são entregues após o treinamento?",
    answer:
      "Os documentos variam conforme o treinamento, escopo contratado e critérios internos da empresa. A relação oficial deve ser confirmada na proposta.",
  },
];

export const galleryItems = [
  { title: "Sinalização de rota de fuga", category: "Sinalização", image: "/jeptreinamentos/gallery-optimized/servico-dsc-0694.webp", thumb: "/jeptreinamentos/gallery-optimized/thumbs/servico-dsc-0694.webp", alt: "Sinalização de rota de fuga e identificação de pavimento instalada em prédio atendido" },
  { title: "Hidrante, extintor e porta corta-fogo", category: "Prevenção de incêndios", image: "/jeptreinamentos/gallery-optimized/servico-dsc-0695.webp", thumb: "/jeptreinamentos/gallery-optimized/thumbs/servico-dsc-0695.webp", alt: "Hidrante, extintor e placas de porta corta-fogo em área interna" },
  { title: "Identificação de saída", category: "Sinalização", image: "/jeptreinamentos/gallery-optimized/servico-dsc-0696.webp", thumb: "/jeptreinamentos/gallery-optimized/thumbs/servico-dsc-0696.webp", alt: "Placa de saída e identificação de pavimento em porta de circulação" },
  { title: "Orientação de abandono", category: "Rotas de fuga", image: "/jeptreinamentos/gallery-optimized/servico-dsc-0698.webp", thumb: "/jeptreinamentos/gallery-optimized/thumbs/servico-dsc-0698.webp", alt: "Sinalização indicando não usar elevador em caso de incêndio e rota de fuga" },
  { title: "Conjunto preventivo instalado", category: "Prevenção de incêndios", image: "/jeptreinamentos/gallery-optimized/servico-dsc-0699-1.webp", thumb: "/jeptreinamentos/gallery-optimized/thumbs/servico-dsc-0699-1.webp", alt: "Conjunto com hidrante, extintor e sinalizações preventivas instaladas" },
  { title: "Sinalização preventiva completa", category: "Prevenção de incêndios", image: "/jeptreinamentos/gallery-optimized/servico-dsc-0699.webp", thumb: "/jeptreinamentos/gallery-optimized/thumbs/servico-dsc-0699.webp", alt: "Sinalização preventiva com hidrante, extintor e placas de porta corta-fogo" },
  { title: "Teste de pressão em hidrante", category: "Teste de hidrantes", image: "/jeptreinamentos/gallery-optimized/servico-img-20190806-wa0005.webp", thumb: "/jeptreinamentos/gallery-optimized/thumbs/servico-img-20190806-wa0005.webp", alt: "Manômetro em teste de pressão de sistema de hidrante" },
  { title: "Teste em abrigo de hidrante", category: "Teste de hidrantes", image: "/jeptreinamentos/gallery-optimized/servico-img-20190806-wa0006.webp", thumb: "/jeptreinamentos/gallery-optimized/thumbs/servico-img-20190806-wa0006.webp", alt: "Esguicho e manômetro acoplados em abrigo de hidrante" },
  { title: "Treinamento prático com mangueira", category: "Treinamentos", image: "/jeptreinamentos/gallery-optimized/servico-img-20190806-wa0009.webp", thumb: "/jeptreinamentos/gallery-optimized/thumbs/servico-img-20190806-wa0009.webp", alt: "Profissional realizando exercício prático com mangueira de incêndio" },
  { title: "Simulação prática externa", category: "Treinamentos", image: "/jeptreinamentos/gallery-optimized/servico-img-20190806-wa0010.webp", thumb: "/jeptreinamentos/gallery-optimized/thumbs/servico-img-20190806-wa0010.webp", alt: "Simulação prática externa com jato de água em área de treinamento" },
  { title: "Teste em cobertura", category: "Teste de hidrantes", image: "/jeptreinamentos/gallery-optimized/servico-img-20190806-wa0020.webp", thumb: "/jeptreinamentos/gallery-optimized/thumbs/servico-img-20190806-wa0020.webp", alt: "Teste de vazão de hidrante realizado em área de cobertura" },
  { title: "Verificação de conexão", category: "Teste de hidrantes", image: "/jeptreinamentos/gallery-optimized/servico-img-20190806-wa0023.webp", thumb: "/jeptreinamentos/gallery-optimized/thumbs/servico-img-20190806-wa0023.webp", alt: "Conexão de hidrante com manômetro durante verificação técnica" },
];

export const nrItems = [
  { code: "NR 6", title: "Equipamentos de Proteção Individual", summary: "Uso adequado, armazenamento, cuidados com EPIs e escolha dos tipos de proteção para cada trabalho." },
  { code: "NR 9", title: "Programa de Prevenção de Riscos Ambientais", summary: "Referência informativa sobre identificação e prevenção de riscos ambientais no trabalho." },
  { code: "NR 10", title: "Segurança em Instalações e Serviços em Eletricidade", summary: "Treinamentos e reciclagens sobre riscos, equipamentos de proteção, sinalização e procedimentos para serviços com eletricidade." },
  { code: "NR 11", title: "Operador de Empilhadeira", summary: "Qualificacao de operadores com orientação sobre riscos da operação, tipos de empilhadeiras, pisos e cuidados no ambiente de trabalho." },
  { code: "NR 12", title: "Segurança em Máquinas", summary: "Levantamento de adequações necessárias, incluindo proteções de partes móveis como polias, engrenagens, eixos e rolamentos." },
  { code: "NR 18", title: "Indústria da Construção", summary: "Integração e orientação aos colaboradores sobre riscos do ambiente de trabalho na industria da construcao." },
  { code: "NR 23 / NPT-017", title: "Proteção Contra Incêndios", summary: "Adequações, projetos para liberação de alvarás, placas de emergencia, extintores, pinturas de solo, dimensionamento e treinamento de brigadas." },
  { code: "NR 26", title: "Cores e Identificação", summary: "Adequação do ambiente de trabalho com critérios de cores e identificação na segurança do trabalho." },
  { code: "NR 33", title: "Espaços Confinados", summary: "Treinamentos para entrada em espaços confinados, riscos, medidor de gás, tipos de espaços e equipamentos de proteção." },
  { code: "NR 35", title: "Trabalho em Altura", summary: "Treinamentos sobre riscos, uso correto de equipamentos de proteção, linhas de vida, trava-quedas, cintos de segurança e sinalização." },
];

export const editableCompanyData = [
  "Números reais de profissionais treinados, empresas atendidas e treinamentos realizados",
  "Endereço para exibição de mapa",
  "Horários oficiais de atendimento",
  "Fotos próprias autorizadas de treinamentos e serviços realizados",
  "Depoimentos reais com autorização",
  "Carga horária, validade, documentos entregues e regras oficiais de cada treinamento",
  "Links oficiais de redes sociais adicionais",
];
