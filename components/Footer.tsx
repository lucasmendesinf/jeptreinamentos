import Link from "next/link";
import { ExternalLink, Mail, Phone, ShieldCheck } from "lucide-react";
import { navItems, services, siteConfig, trainings } from "@/lib/site-data";
import { whatsappLink } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-red-700">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <strong className="block text-lg">J&P Treinamentos</strong>
              <span className="text-xs uppercase text-zinc-400">Prevencao e seguranca</span>
            </div>
          </div>
          <p className="text-sm leading-7">
            Treinamentos em seguranca do trabalho, prevencao de incendios e apoio tecnico para empresas que precisam preparar pessoas e proteger ambientes.
          </p>
        </div>

        <div>
          <h2 className="footer-title">Links rapidos</h2>
          <ul className="grid gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li><Link className="hover:text-white" href="/politica-de-privacidade">Politica de Privacidade</Link></li>
            <li><Link className="hover:text-white" href="/termos-de-uso">Termos de Uso</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Treinamentos</h2>
          <ul className="grid gap-2 text-sm">
            {trainings.slice(0, 6).map((training) => (
              <li key={training.slug}>
                <Link className="hover:text-white" href={`/treinamentos/${training.slug}`}>
                  {training.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Contato</h2>
          <div className="grid gap-3 text-sm">
            <a className="inline-flex items-center gap-2 hover:text-white" href={siteConfig.phoneHref}>
              <Phone className="h-4 w-4 text-orange-400" /> {siteConfig.phone}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-white" href={siteConfig.emailHref}>
              <Mail className="h-4 w-4 text-orange-400" /> {siteConfig.email}
            </a>
            <a className="btn btn-primary mt-2 justify-center" href={whatsappLink()} target="_blank" rel="noreferrer">
              Falar pelo WhatsApp
            </a>
            {siteConfig.social.facebook && (
              <a className="inline-flex items-center gap-2 hover:text-white" href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4 text-orange-400" /> Facebook
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-zinc-500">
        <p>@ {year} {siteConfig.legalName}. Todos os direitos reservados.</p>
        <p className="mt-1">Desenvolvido por Calutec Solucoes.</p>
        <p className="mt-1">Servicos em destaque: {services.slice(0, 3).map((service) => service.title).join(", ")}.</p>
      </div>
    </footer>
  );
}
