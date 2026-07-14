import { ExternalLink, Mail, Phone } from "lucide-react";
import { navItems, services, siteConfig } from "@/lib/site-data";
import { whatsappLink } from "@/lib/utils";

const logoSrc = "/logo-jp.jpg";

function publicHref(href: string) {
  return href;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.1fr_1.45fr_1fr] lg:px-8">
        <div>
          <div className="mb-5 inline-flex rounded-sm bg-white/95 p-2 shadow-lg shadow-black/20">
            <img
              src={logoSrc}
              alt="J&P Prevenções de Incêndios e Segurança do Trabalho"
              width={383}
              height={277}
              className="h-auto w-56 object-contain"
            />
          </div>
          <p className="text-sm leading-7">
            Treinamentos em segurança do trabalho, prevenção de incêndios e apoio técnico para empresas que precisam preparar pessoas e proteger ambientes.
          </p>
        </div>

        <div>
          <h2 className="footer-title">Links rápidos</h2>
          <ul className="grid gap-2 text-sm sm:grid-cols-2 sm:gap-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="hover:text-white" href={publicHref(item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a className="hover:text-white" href="/politica-de-privacidade">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="/termos-de-cookies">
                Termos de Cookies
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="/termos-de-uso">
                Termos de Uso
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-sm bg-gradient-to-br from-red-800 via-red-700 to-orange-700 p-5 text-white shadow-2xl shadow-red-950/25 md:col-span-2 lg:col-span-1">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-orange-100">Contato</h2>
          <div className="mt-5 grid gap-3 text-sm">
            <a className="inline-flex items-center gap-2 font-semibold text-white hover:text-orange-100" href={siteConfig.phoneHref}>
              <Phone className="h-4 w-4 text-orange-100" /> {siteConfig.phone}
            </a>
            <a className="inline-flex items-center gap-2 font-semibold text-white hover:text-orange-100" href={siteConfig.emailHref}>
              <Mail className="h-4 w-4 text-orange-100" /> {siteConfig.email}
            </a>
            <a className="mt-2 inline-flex min-h-11 items-center justify-center rounded-sm bg-white px-4 py-2 font-black text-red-800 transition hover:bg-orange-50" href={whatsappLink()} target="_blank" rel="noreferrer">
              Falar pelo WhatsApp
            </a>
            {siteConfig.social.facebook && (
              <a className="inline-flex items-center gap-2 font-semibold text-white hover:text-orange-100" href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4 text-orange-100" /> Facebook
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-zinc-500">
        <p>@ {year} {siteConfig.legalName}. Todos os direitos reservados.</p>
        <p className="mt-1">Desenvolvido por Calutec Soluções.</p>
        <p className="mt-1">Serviços em destaque: {services.slice(0, 3).map((service) => service.title).join(", ")}.</p>
      </div>
    </footer>
  );
}
