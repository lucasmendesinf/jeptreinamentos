import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site da J&P Treinamentos.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermsPage() {
  return (
    <div className="pt-28">
      <section className="section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-zinc-950">Termos de Uso</h1>
          <p className="mt-6 leading-8 text-zinc-700">
            As informações deste site possuem finalidade institucional e comercial. Conteúdos sobre normas e treinamentos são informativos e não substituem avaliação técnica, jurídica ou consulta a fontes oficiais.
          </p>
          <p className="mt-4 leading-8 text-zinc-700">
            Orçamentos, escopos, cargas horárias, validade, documentos entregues e condições de execução devem ser confirmados diretamente com a J&P Treinamentos.
          </p>
        </div>
      </section>
    </div>
  );
}
