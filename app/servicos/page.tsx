import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Servicos",
  description: "Servicos de prevencao de incendios, sinalizacao, equipamentos, vistorias e seguranca do trabalho.",
  alternates: { canonical: "/servicos" },
};

export default function ServicesPage() {
  const categories = Array.from(new Set(services.map((service) => service.category)));

  return (
    <div className="pt-20">
      <section className="section bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-orange-300">Servicos</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">Apoio completo para prevencao, adequacoes e vistorias.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
            Servicos organizados por categoria para facilitar a solicitacao de orcamento e o entendimento do escopo.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-12 last:mb-0">
              <SectionHeading title={category} />
              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {services.filter((service) => service.category === category).map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
