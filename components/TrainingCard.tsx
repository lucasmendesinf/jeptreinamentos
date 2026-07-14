import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
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

const trainingModalContent: Record<string, TrainingModalContent> = {
  "brigada-de-incendio": {
    title: "Brigada de Incêndio",
    image: "/jeptreinamentos/servico-img-20190806-wa0009.jpg",
    imageAlt: "Treinamento prático de brigada de incêndio com uso de mangueira",
    paragraphs: [
      "Oferecemos treinamentos de brigadas de incêndios para empresas, edifícios comerciais e residenciais, com carga horária de 4 horas a 8 horas, seguindo todos os padrões das normas NPT-17 e NR 23.",
      "No treinamento incluímos os materiais de apoio, como extintores, mangueiras, botijão de gás, equipamentos básicos de primeiros socorros e também toda a documentação, como atas da brigada e relatórios para realização de simulados.",
      "Ao final do treinamento, será disponibilizado certificado aos participantes.",
    ],
  },
  "nr-11-operador-de-empilhadeira": {
    title: "Curso NR 11 - Operador de Empilhadeira",
    image: "/jeptreinamentos/servico-dsc-0698.jpg",
    imageAlt: "Sinalização de segurança em área operacional",
    paragraphs: [
      "Oferecemos curso de operador de empilhadeira.",
      "Conteúdo das aulas teóricas: conhecendo a empilhadeira, modelos e seus componentes; cuidados com cargas, tipos e situações; equilíbrio da empilhadeira; causas de tombamentos; painel de instruções; checklist de verificação da máquina; operação com cargas elevadas; e regras de circulação.",
      "Conteúdo das aulas práticas: manobras básicas entre cones, tipos de manobras durante o trabalho, transporte de líquidos e formas corretas de descer rampas carregado.",
    ],
  },
  "nr-35-trabalho-em-altura": {
    title: "Curso NR 35 - Trabalho em Altura",
    image: "/jeptreinamentos/servico-img-20190806-wa0020.jpg",
    imageAlt: "Atividade prática em área elevada durante treinamento de segurança",
    paragraphs: [
      "Oferecemos treinamentos para trabalho em altura.",
      "Tópicos do curso: objetivos, normas aplicáveis à NR 35, requisitos da NR 35, análise de risco e condições, riscos potenciais, EPIs para trabalho em altura, EPCs, acidentes em trabalho em altura, condutas em situações de emergência, avaliação teórica e prática com uso de EPI.",
      "As aulas são teóricas e práticas, com duração de 8 horas.",
    ],
  },
  "nr-6-epi": {
    title: "Curso NR 6 - Equipamentos de Proteção Individual",
    image: "/jeptreinamentos/hero-fire-prevention.png",
    imageAlt: "Profissionais com equipamentos de proteção em ambiente de prevenção de incêndio",
    paragraphs: [
      "Realizamos treinamentos referentes à NR 6, Equipamentos de Proteção Individual, trazendo aos colaboradores conhecimento sobre a utilização correta dos EPIs e suas particularidades.",
      "Realizamos treinamentos in company ou em sala de aula.",
    ],
  },
};

export function TrainingCard({ training }: { training: Training }) {
  const Icon = training.icon;
  const modalContent = trainingModalContent[training.slug];

  return (
    <article className="card group flex h-full flex-col p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-red-50 text-red-700 ring-1 ring-red-100">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-black text-zinc-950">{training.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">{training.short}</p>
      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {modalContent ? (
          <TrainingLearnMoreButton content={modalContent} trainingName={training.name} trainingSlug={training.slug} />
        ) : (
          <Link className="btn btn-ghost justify-center" href={`/jeptreinamentos/treinamentos/${training.slug}`}>
            Saiba mais <ArrowRight className="h-4 w-4" />
          </Link>
        )}
        <a className="btn btn-primary justify-center" href={whatsappLink(serviceWhatsappMessage(`treinamento de ${training.name}`))} target="_blank" rel="noreferrer">
          <MessageSquare className="h-4 w-4" /> Solicitar
        </a>
      </div>
    </article>
  );
}
