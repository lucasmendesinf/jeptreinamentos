import { MessageSquare } from "lucide-react";
import { TrainingLearnMoreButton } from "@/components/TrainingLearnMoreButton";
import type { trainings } from "@/lib/site-data";
import { serviceWhatsappMessage, whatsappLink } from "@/lib/utils";

type Training = (typeof trainings)[number];
type TrainingModalContent = {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: readonly string[];
};

const trainingCardImages: Record<string, Pick<TrainingModalContent, "image" | "imageAlt">> = {
  "nr-01-ordem-de-servico-sst": {
    image: "/training-card-images/nr-6-epi.webp",
    imageAlt: "Materiais de seguranca do trabalho usados para orientacao de SST",
  },
  "nr-05-cipa": {
    image: "/training-card-images/brigada-de-incendio.webp",
    imageAlt: "Equipe reunida para treinamento de prevencao e seguranca do trabalho",
  },
  "brigada-de-incendio": {
    image: "/training-card-images/brigada-de-incendio.webp",
    imageAlt: "Treinamento pratico de brigada de incendio com extintores e mangueiras",
  },
  "nr-6-epi": {
    image: "/training-card-images/nr-6-epi.webp",
    imageAlt: "Equipamentos de protecao individual organizados para treinamento",
  },
  "nr-10-seguranca-em-eletricidade": {
    image: "/training-card-images/nr-10-seguranca-em-eletricidade.webp",
    imageAlt: "Profissional demonstrando procedimento seguro em painel eletrico",
  },
  "nr-11-operador-de-empilhadeira": {
    image: "/training-card-images/nr-11-operador-de-empilhadeira.webp",
    imageAlt: "Treinamento de operador de empilhadeira em area demarcada",
  },
  "nr-12-seguranca-em-maquinas": {
    image: "/training-card-images/nr-12-seguranca-em-maquinas.webp",
    imageAlt: "Instrucao de seguranca em maquina industrial com protecao fisica",
  },
  "nr-23-protecao-contra-incendios": {
    image: "/training-card-images/nr-23-protecao-contra-incendios.webp",
    imageAlt: "Inspecao de equipamentos de protecao contra incendios",
  },
  "nr-33-espacos-confinados": {
    image: "/training-card-images/nr-33-espacos-confinados.webp",
    imageAlt: "Treinamento de entrada em espaco confinado com tripode e medidor",
  },
  "nr-35-trabalho-em-altura": {
    image: "/training-card-images/nr-35-trabalho-em-altura.webp",
    imageAlt: "Treinamento de trabalho em altura com cinto e linha de vida",
  },
};

const trainingModalContent: Record<string, TrainingModalContent> = {
  "nr-01-ordem-de-servico-sst": {
    title: "NR 01 - Ordem de Serviço e SST",
    image: trainingCardImages["nr-01-ordem-de-servico-sst"].image,
    imageAlt: "Materiais de segurança do trabalho usados para orientação de SST",
    paragraphs: [
      "Realizamos a emissão de Ordem de Serviço e a organização da base de SST para empresas que precisam orientar colaboradores sobre riscos, responsabilidades e medidas preventivas.",
      "O apoio pode incluir levantamento de funções, riscos ocupacionais, orientações preventivas, deveres dos colaboradores e organização dos registros necessários para manter a documentação mais clara e acessível.",
      "O escopo é definido conforme a realidade da empresa, suas atividades, funções e necessidades de segurança e saúde no trabalho.",
    ],
  },
  "nr-05-cipa": {
    title: "NR 05 - CIPA",
    image: trainingCardImages["nr-05-cipa"].image,
    imageAlt: "Equipe reunida para treinamento de prevenção e segurança do trabalho",
    paragraphs: [
      "Oferecemos formação e reciclagem da CIPA para empresas que precisam estruturar ou manter a Comissão Interna de Prevenção de Acidentes.",
      "Também apoiamos reuniões, treinamentos, atas, registros, cronogramas e toda a documentação necessária para uma gestão preventiva mais organizada.",
      "O atendimento é ajustado conforme o enquadramento, o porte da empresa e as necessidades internas de prevenção de acidentes e doenças relacionadas ao trabalho.",
    ],
  },
  "brigada-de-incendio": {
    title: "Brigada de Incêndio",
    image: trainingCardImages["brigada-de-incendio"].image,
    imageAlt: "Treinamento prático de brigada de incêndio com uso de mangueira",
    paragraphs: [
      "Oferecemos treinamentos de brigadas de incêndios para empresas, edifícios comerciais e residenciais, com carga horária de 4 horas a 8 horas, seguindo todos os padrões das normas NPT-17 e NR 23.",
      "No treinamento incluímos os materiais de apoio, como extintores, mangueiras, botijão de gás, equipamentos básicos de primeiros socorros e também toda a documentação, como atas da brigada e relatórios para realização de simulados.",
      "Ao final do treinamento, será disponibilizado certificado aos participantes.",
    ],
  },
  "nr-11-operador-de-empilhadeira": {
    title: "Curso NR 11 - Operador de Empilhadeira",
    image: trainingCardImages["nr-11-operador-de-empilhadeira"].image,
    imageAlt: "Sinalização de segurança em área operacional",
    paragraphs: [
      "Oferecemos curso de operador de empilhadeira.",
      "Conteúdo das aulas teóricas: conhecendo a empilhadeira, modelos e seus componentes; cuidados com cargas, tipos e situações; equilíbrio da empilhadeira; causas de tombamentos; painel de instruções; checklist de verificação da máquina; operação com cargas elevadas; e regras de circulação.",
      "Conteúdo das aulas práticas: manobras básicas entre cones, tipos de manobras durante o trabalho, transporte de líquidos e formas corretas de descer rampas carregado.",
    ],
  },
  "nr-35-trabalho-em-altura": {
    title: "Curso NR 35 - Trabalho em Altura",
    image: trainingCardImages["nr-35-trabalho-em-altura"].image,
    imageAlt: "Atividade prática em área elevada durante treinamento de segurança",
    paragraphs: [
      "Oferecemos treinamentos para trabalho em altura.",
      "Tópicos do curso: objetivos, normas aplicáveis à NR 35, requisitos da NR 35, análise de risco e condições, riscos potenciais, EPIs para trabalho em altura, EPCs, acidentes em trabalho em altura, condutas em situações de emergência, avaliação teórica e prática com uso de EPI.",
      "As aulas são teóricas e práticas, com duração de 8 horas.",
    ],
  },
  "nr-6-epi": {
    title: "Curso NR 6 - Equipamentos de Proteção Individual",
    image: trainingCardImages["nr-6-epi"].image,
    imageAlt: "Profissionais com equipamentos de proteção em ambiente de prevenção de incêndio",
    paragraphs: [
      "Realizamos treinamentos referentes à NR 6, Equipamentos de Proteção Individual, trazendo aos colaboradores conhecimento sobre a utilização correta dos EPIs e suas particularidades.",
      "Realizamos treinamentos in company ou em sala de aula.",
    ],
  },
};

const fallbackTrainingImages: Record<string, Pick<TrainingModalContent, "image" | "imageAlt">> = {
  "nr-10-seguranca-em-eletricidade": {
    image: trainingCardImages["nr-10-seguranca-em-eletricidade"].image,
    imageAlt: "Sinalização de segurança em área técnica",
  },
  "nr-12-seguranca-em-maquinas": {
    image: trainingCardImages["nr-12-seguranca-em-maquinas"].image,
    imageAlt: "Sinalização preventiva aplicada em ambiente operacional",
  },
  "nr-23-protecao-contra-incendios": {
    image: trainingCardImages["nr-23-protecao-contra-incendios"].image,
    imageAlt: "Extintor, hidrante e sinalização de prevenção de incêndio",
  },
  "nr-33-espacos-confinados": {
    image: trainingCardImages["nr-33-espacos-confinados"].image,
    imageAlt: "Equipamento técnico usado em verificação preventiva",
  },
};

function getTrainingModalContent(training: Training): TrainingModalContent {
  const explicitContent = trainingModalContent[training.slug];
  if (explicitContent) return explicitContent;

  const fallbackImage = fallbackTrainingImages[training.slug] ?? {
    image: "/hero-fire-prevention.jpg",
    imageAlt: "Equipe em treinamento de prevenção de incêndio e segurança do trabalho",
  };

  const paragraphs = [
    training.short,
    `Normas e referências: ${training.relatedNorms.join(", ")}.`,
    `Público indicado: ${training.audience}`,
    `Formato: ${training.modality}`,
    training.practical,
    `Objetivos principais: ${training.objectives.join("; ")}.`,
  ];

  if (training.syllabus.length > 0) {
    paragraphs.push(`Conteúdo abordado: ${training.syllabus.join(", ")}.`);
  }

  return {
    title: training.name,
    image: fallbackImage.image,
    imageAlt: fallbackImage.imageAlt,
    paragraphs,
  };
}

export function TrainingCard({ training }: { training: Training }) {
  const Icon = training.icon;
  const modalContent = getTrainingModalContent(training);
  const cardImage = trainingCardImages[training.slug] ?? modalContent;

  return (
    <article className="card group flex h-full flex-col overflow-hidden p-6">
      <figure className="-mx-6 -mt-6 mb-5 overflow-hidden bg-zinc-900">
        <img
          src={cardImage.image}
          alt={cardImage.imageAlt}
          width={640}
          height={360}
          loading="lazy"
          decoding="async"
          className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </figure>
      <div className="relative z-10 -mt-12 mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-white text-red-700 shadow-lg shadow-red-950/10 ring-1 ring-red-100">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-black text-zinc-950">{training.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">{training.short}</p>
      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        <TrainingLearnMoreButton content={modalContent} trainingName={training.name} trainingSlug={training.slug} />
        <a className="btn btn-primary justify-center" href={whatsappLink(serviceWhatsappMessage(`treinamento de ${training.name}`))} target="_blank" rel="noreferrer">
          <MessageSquare className="h-4 w-4" /> Solicitar
        </a>
      </div>
    </article>
  );
}
