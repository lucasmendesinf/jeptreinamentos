import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Serviços de prevenção de incêndios, sinalização, equipamentos, vistorias e segurança do trabalho.",
  alternates: { canonical: "/servicos" },
};

export default function ServicesPage() {
  return (
    <div className="pt-28">
      <section className="section bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
          ))}
          </div>
        </div>
      </section>
    </div>
  );
}
