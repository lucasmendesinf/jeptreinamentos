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
  tagline: "Treinamentos em seguranca do trabalho e prevencao de incendios",
  url: "https://jeptreinamentos.com.br",
  phone: "(41) 99229-9572",
  phoneHref: "tel:+5541992299572",
  whatsapp: "5541992299572",
  email: "contato@jeptreinamentos.com.br",
  emailHref: "mailto:contato@jeptreinamentos.com.br",
  responsible: "Pedro Alex Machado",
  credential: "Bombeiro Civil - CNBC 183233",
  founded: "2019",
  serviceHours: "Horario de atendimento a confirmar",
  addressNote: "Endereco comercial a informar",
  social: {
    facebook: "https://www.facebook.com/PedroAlexMachado/",
    instagram: "",
    linkedin: "",
  },
  defaultWhatsappMessage:
    "Ola! Acessei o site da J&P Treinamentos e gostaria de solicitar informacoes sobre treinamentos e servicos de prevencao de incendios.",
};

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Treinamentos", href: "/treinamentos" },
  { label: "Servicos", href: "/servicos" },
  { label: "Normas Regulamentadoras", href: "/normas-regulamentadoras" },
  { label: "Galeria", href: "/galeria" },
  { label: "Contato", href: "/contato" },
];

export const trustIndicators = [
  { label: "Anos de experiencia", value: "Desde 2019", note: "Confirmado no site atual" },
  { label: "Profissionais treinados", value: "A informar", note: "Inserir numero real" },
  { label: "Empresas atendidas", value: "A informar", note: "Inserir numero real" },
  { label: "Treinamentos realizados", value: "A informar", note: "Inserir numero real" },
];

export const trainings = [
  {
    slug: "brigada-de-incendio",
    name: "Brigada de Incendio",
    short: "Formacao e reciclagem para equipes preparadas para agir com seguranca em situacoes de emergencia.",
    icon: Flame,
    relatedNorms: ["NR 23", "Instrucoes do Corpo de Bombeiros aplicaveis"],
    audience: "Empresas, condominios, equipes internas e profissionais indicados para atuacao preventiva.",
    modality: "Teorico e pratico, conforme necessidade e escopo contratado.",
    practical: "Pode incluir simulacoes, uso orientado de equipamentos e procedimentos de abandono.",
    workload: "Campo configuravel: inserir carga horaria oficial da empresa.",
    validity: "Campo configuravel: inserir regra de reciclagem aplicavel ao cliente.",
    objectives: [
      "Preparar participantes para reconhecer riscos e agir preventivamente.",
      "Orientar condutas iniciais em principios de incendio e emergencias.",
      "Reforcar rotas de fuga, abandono de area e comunicacao interna.",
    ],
    syllabus: ["Prevencao", "Classes de incendio", "Extintores", "Abandono de area", "Primeiros procedimentos"],
  },
  {
    slug: "nr-6-epi",
    name: "NR 6 - Equipamentos de Protecao Individual",
    short: "Treinamento sobre uso, conservacao, guarda e responsabilidades relacionadas aos EPIs.",
    icon: HardHat,
    relatedNorms: ["NR 6"],
    audience: "Colaboradores que utilizam EPIs em suas atividades.",
    modality: "Teorico, com demonstracoes quando aplicavel.",
    practical: "A pratica pode ser adaptada aos EPIs utilizados pela empresa.",
    workload: "Campo configuravel.",
    validity: "Campo configuravel.",
    objectives: ["Orientar o uso correto de EPIs.", "Reforcar responsabilidades e boas praticas.", "Reduzir condutas inseguras."],
    syllabus: ["Tipos de EPI", "Ajuste e conservacao", "Responsabilidades", "Limites de protecao", "Procedimentos internos"],
  },
  {
    slug: "nr-10-seguranca-em-eletricidade",
    name: "NR 10 - Seguranca em Eletricidade",
    short: "Capacitacao voltada a riscos eletricos, medidas preventivas e procedimentos seguros.",
    icon: Zap,
    relatedNorms: ["NR 10"],
    audience: "Profissionais expostos a riscos eletricos conforme funcao e ambiente de trabalho.",
    modality: "Teorico e pratico quando previsto no escopo.",
    practical: "Campos praticos devem ser definidos de acordo com a atividade da empresa.",
    workload: "Campo configuravel.",
    validity: "Campo configuravel.",
    objectives: ["Reconhecer riscos eletricos.", "Orientar medidas de controle.", "Fortalecer a cultura de seguranca."],
    syllabus: ["Riscos eletricos", "Medidas de controle", "Procedimentos", "EPI e EPC", "Emergencias"],
  },
  {
    slug: "nr-11-operador-de-empilhadeira",
    name: "NR 11 - Operador de Empilhadeira",
    short: "Treinamento para operacao segura, movimentacao de cargas e cuidados no ambiente operacional.",
    icon: Construction,
    relatedNorms: ["NR 11"],
    audience: "Operadores e profissionais envolvidos em transporte, movimentacao e armazenagem.",
    modality: "Teorico e pratico, conforme equipamento e condicoes locais.",
    practical: "A pratica deve considerar o tipo de equipamento e area disponivel.",
    workload: "Campo configuravel.",
    validity: "Campo configuravel.",
    objectives: ["Reforcar operacao segura.", "Reduzir riscos na movimentacao de cargas.", "Orientar inspecoes e condutas preventivas."],
    syllabus: ["Inspecao", "Estabilidade", "Movimentacao", "Sinalizacao", "Cuidados operacionais"],
  },
  {
    slug: "nr-12-seguranca-em-maquinas",
    name: "NR 12 - Seguranca em Maquinas",
    short: "Orientacao sobre riscos, protecoes, procedimentos e adequacoes relacionadas a maquinas e equipamentos.",
    icon: Wrench,
    relatedNorms: ["NR 12"],
    audience: "Operadores, manutencao, liderancas e equipes expostas a maquinas.",
    modality: "Teorico, com avaliacao pratica quando contratada.",
    practical: "Adequada ao parque de maquinas e procedimentos da empresa.",
    workload: "Campo configuravel.",
    validity: "Campo configuravel.",
    objectives: ["Reconhecer riscos mecanicos.", "Orientar protecoes e procedimentos.", "Apoiar adequacoes preventivas."],
    syllabus: ["Zonas de risco", "Protecoes", "Bloqueios", "Procedimentos", "Sinalizacao"],
  },
  {
    slug: "nr-23-protecao-contra-incendios",
    name: "NR 23 - Protecao Contra Incendios",
    short: "Conteudo voltado a prevencao, abandono, equipamentos e orientacoes basicas de emergencia.",
    icon: Siren,
    relatedNorms: ["NR 23"],
    audience: "Empresas e equipes que precisam reforcar medidas de protecao contra incendios.",
    modality: "Teorico e pratico conforme escopo.",
    practical: "Pode incluir demonstracoes de extintores, rotas de fuga e procedimentos internos.",
    workload: "Campo configuravel.",
    validity: "Campo configuravel.",
    objectives: ["Fortalecer prevencao.", "Orientar resposta inicial.", "Apoiar cultura de emergencia organizada."],
    syllabus: ["Prevencao", "Alarmes", "Rotas de fuga", "Extintores", "Comunicacao"],
  },
  {
    slug: "nr-33-espacos-confinados",
    name: "NR 33 - Espacos Confinados",
    short: "Treinamento para reconhecimento de riscos e medidas de seguranca em espacos confinados.",
    icon: ShieldCheck,
    relatedNorms: ["NR 33"],
    audience: "Trabalhadores autorizados, vigias, supervisores e equipes de apoio, conforme funcao.",
    modality: "Teorico e pratico quando previsto.",
    practical: "Deve ser definida conforme atividade, ambiente e procedimentos da empresa.",
    workload: "Campo configuravel.",
    validity: "Campo configuravel.",
    objectives: ["Reconhecer perigos.", "Orientar controles e permissoes.", "Reforcar condutas seguras."],
    syllabus: ["Caracterizacao", "Riscos", "Permissao de entrada", "Monitoramento", "Emergencias"],
  },
  {
    slug: "nr-35-trabalho-em-altura",
    name: "NR 35 - Trabalho em Altura",
    short: "Capacitacao sobre riscos, planejamento, sistemas de protecao e procedimentos para trabalho em altura.",
    icon: Route,
    relatedNorms: ["NR 35"],
    audience: "Profissionais que realizam ou acompanham atividades em altura.",
    modality: "Teorico e pratico conforme escopo e estrutura disponivel.",
    practical: "Pode incluir demonstracoes de equipamentos e procedimentos de seguranca.",
    workload: "Campo configuravel.",
    validity: "Campo configuravel.",
    objectives: ["Planejar atividades em altura.", "Orientar uso de sistemas de protecao.", "Reduzir exposicao a quedas."],
    syllabus: ["Riscos", "Planejamento", "EPI", "Sistemas de protecao", "Condutas de emergencia"],
  },
];

export const services = [
  { title: "Treinamentos e palestras", category: "Treinamentos", icon: GraduationCap, description: "Capacitacoes corporativas com linguagem clara, foco pratico e conteudo alinhado ao risco da operacao." },
  { title: "Formacao e reciclagem de brigada", category: "Prevencao de incendios", icon: Flame, description: "Preparacao de equipes para prevencao, resposta inicial e organizacao em emergencias." },
  { title: "Adequacoes de prevencao de incendio", category: "Adequacoes", icon: ClipboardCheck, description: "Apoio para adequar ambientes conforme projeto, orientacoes tecnicas e exigencias aplicaveis." },
  { title: "Placas de sinalizacao", category: "Sinalizacao", icon: Route, description: "Instalacao e fixacao de sinalizacao para orientar abandono, equipamentos e rotas de fuga." },
  { title: "Pintura de areas de extintores e hidrantes", category: "Sinalizacao", icon: Construction, description: "Demarcacao visual para manter equipamentos acessiveis e corretamente identificados." },
  { title: "Dimensionamento de rotas de fuga", category: "Prevencao de incendios", icon: Route, description: "Orientacao para fluxos de saida, leitura de ambiente e comunicacao de emergencia." },
  { title: "Testes de hidrantes", category: "Equipamentos", icon: LifeBuoy, description: "Verificacoes operacionais de sistemas de combate a incendio conforme escopo definido." },
  { title: "Testes de bombas de agua", category: "Equipamentos", icon: Wrench, description: "Apoio em testes e orientacoes para funcionamento de sistemas hidraulicos preventivos." },
  { title: "Orientacao sobre extintores", category: "Equipamentos", icon: Flame, description: "Apoio na colocacao, leitura de classes e orientacao de uso inicial de extintores." },
  { title: "Acompanhamento de vistorias", category: "Vistorias", icon: BadgeCheck, description: "Suporte durante vistorias e organizacao de pendencias para encaminhamento responsavel." },
  { title: "Apoio para liberacao de alvaras", category: "Vistorias", icon: Award, description: "Acompanhamento para regularizacoes junto ao Corpo de Bombeiros, conforme documentos disponiveis." },
  { title: "Adequacao de maquinas conforme NR 12", category: "Seguranca do trabalho", icon: Factory, description: "Orientacoes para melhorias, sinalizacao, protecoes e procedimentos em maquinas." },
];

export const differentials = [
  "Instrutores qualificados",
  "Treinamentos teoricos e praticos",
  "Atendimento para empresas",
  "Conteudo conforme normas aplicaveis",
  "Foco na prevencao",
  "Atendimento personalizado",
  "Experiencia pratica",
  "Suporte durante adequacoes",
];

export const processSteps = [
  "Solicitacao de contato",
  "Levantamento da necessidade",
  "Envio da proposta",
  "Realizacao do treinamento ou servico",
  "Entrega dos documentos e orientacoes",
];

export const faqItems = [
  {
    question: "Quem precisa realizar treinamento de brigada de incendio?",
    answer:
      "A necessidade depende da atividade, ocupacao, caracteristicas da edificacao e regras aplicaveis ao local. A avaliacao deve considerar o contexto da empresa e as orientacoes oficiais pertinentes.",
  },
  {
    question: "O treinamento possui aula pratica?",
    answer:
      "Muitos treinamentos podem incluir atividades praticas, simulacoes ou demonstracoes. O formato e definido conforme o escopo contratado, estrutura disponivel e objetivo da capacitacao.",
  },
  {
    question: "A J&P atende empresas?",
    answer:
      "Sim. A empresa atende demandas corporativas e tambem pessoas fisicas, com orientacao para treinamentos, palestras e servicos de prevencao.",
  },
  {
    question: "Os treinamentos seguem as normas regulamentadoras?",
    answer:
      "Os conteudos sao estruturados com referencia nas normas aplicaveis, mas cada caso deve ser avaliado conforme funcao, risco, atividade e legislacao vigente.",
  },
  {
    question: "A empresa realiza atendimento no local?",
    answer:
      "O atendimento pode ser organizado conforme necessidade, disponibilidade e condicoes do local. Essa informacao deve ser confirmada no momento do orcamento.",
  },
  {
    question: "Como solicitar um orcamento?",
    answer:
      "Voce pode enviar o formulario de contato, falar pelo WhatsApp ou ligar para informar a necessidade, quantidade estimada de participantes e cidade de atendimento.",
  },
  {
    question: "Quais documentos sao entregues apos o treinamento?",
    answer:
      "Os documentos variam conforme o treinamento, escopo contratado e criterios internos da empresa. A relacao oficial deve ser confirmada na proposta.",
  },
];

export const galleryItems = [
  { title: "Treinamento de brigada", category: "Brigada de incendio", image: "https://images.unsplash.com/photo-1584467735871-8d5c9fc2f928?auto=format&fit=crop&w=1200&q=80", alt: "Equipe em treinamento de prevencao e resposta a incendio" },
  { title: "Equipamentos de combate", category: "Equipamentos", image: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?auto=format&fit=crop&w=1200&q=80", alt: "Extintor e equipamentos de seguranca contra incendio" },
  { title: "Sinalizacao de emergencia", category: "Servicos realizados", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80", alt: "Ambiente industrial com sinalizacao e seguranca operacional" },
  { title: "Trabalho em altura", category: "Trabalho em altura", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80", alt: "Profissional com equipamentos em atividade de altura" },
  { title: "Operacao com empilhadeira", category: "Operador de empilhadeira", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80", alt: "Area logistica com movimentacao de cargas" },
  { title: "Palestra de seguranca", category: "Palestras", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80", alt: "Reuniao corporativa para orientacao e treinamento" },
];

export const nrItems = [
  { code: "NR 6", title: "Equipamentos de Protecao Individual", summary: "Orienta o uso, guarda, conservacao e responsabilidades relacionadas aos EPIs." },
  { code: "NR 10", title: "Seguranca em Eletricidade", summary: "Relacionada a medidas de controle e seguranca em instalacoes e servicos com eletricidade." },
  { code: "NR 11", title: "Transporte e Movimentacao", summary: "Abrange cuidados com transporte, movimentacao, armazenagem e manuseio de materiais." },
  { code: "NR 12", title: "Seguranca em Maquinas", summary: "Trata de medidas de protecao, procedimentos e seguranca em maquinas e equipamentos." },
  { code: "NR 23", title: "Protecao Contra Incendios", summary: "Reforca medidas de prevencao, protecao e resposta a emergencias de incendio." },
  { code: "NR 33", title: "Espacos Confinados", summary: "Estabelece referencias de seguranca para atividades em espacos confinados." },
  { code: "NR 35", title: "Trabalho em Altura", summary: "Voltada ao planejamento, organizacao e execucao segura de atividades em altura." },
];

export const editableCompanyData = [
  "Numeros reais de profissionais treinados, empresas atendidas e treinamentos realizados",
  "Endereco para exibicao de mapa",
  "Horarios oficiais de atendimento",
  "Fotos proprias autorizadas de treinamentos e servicos realizados",
  "Depoimentos reais com autorizacao",
  "Carga horaria, validade, documentos entregues e regras oficiais de cada treinamento",
  "Links oficiais de redes sociais adicionais",
];
