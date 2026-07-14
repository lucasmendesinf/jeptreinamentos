"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site-data";
import { cx, whatsappLink } from "@/lib/utils";

const logoSrc = "/jeptreinamentos/logo-jp.png";

function publicHref(href: string) {
  if (href === "/") return "/jeptreinamentos/";
  return `/jeptreinamentos${href}`;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/88 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/jeptreinamentos/" className="flex items-center" aria-label="J&P Prevenções de Incêndios e Segurança do Trabalho">
          <span className="inline-flex h-16 items-center rounded-sm bg-white/95 p-1 shadow-lg shadow-red-950/35 sm:h-[74px] lg:h-20">
            <img
              src={logoSrc}
              alt="J&P Prevenções de Incêndios e Segurança do Trabalho"
              width={413}
              height={306}
              className="h-full w-auto object-contain"
            />
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={publicHref(item.href)}
              className={cx(
                "rounded-sm px-3 py-2 text-sm font-semibold text-zinc-200 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400",
                pathname === item.href && "bg-white/10 text-white",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a className="btn btn-primary" href={whatsappLink("Olá! Gostaria de solicitar um orçamento com a J&P Treinamentos.")} target="_blank" rel="noreferrer">
            Solicitar orçamento
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-zinc-950 px-4 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Menu mobile">
            {navItems.map((item) => (
              <a key={item.href} href={publicHref(item.href)} className="rounded-sm px-3 py-3 font-semibold text-zinc-100 hover:bg-white/10" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <a className="btn btn-primary w-full justify-center" href={whatsappLink("Olá! Gostaria de solicitar um orçamento com a J&P Treinamentos.")} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                Solicitar orçamento
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
