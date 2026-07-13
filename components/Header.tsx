"use client";

import { Menu, Phone, ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site-data";
import { cx, whatsappLink } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/88 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="J&P Treinamentos - inicio">
          <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-red-700 text-white shadow-lg shadow-red-950/40">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black tracking-wide">J&P</span>
            <span className="block text-xs font-semibold uppercase text-zinc-300">Treinamentos</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cx(
                "rounded-sm px-3 py-2 text-sm font-semibold text-zinc-200 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400",
                pathname === item.href && "bg-white/10 text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white">
            <Phone className="h-4 w-4 text-orange-400" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <a className="btn btn-dark" href={whatsappLink()} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <Link className="btn btn-primary" href="/contato">
            Solicitar orcamento
          </Link>
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
              <Link key={item.href} href={item.href} className="rounded-sm px-3 py-3 font-semibold text-zinc-100 hover:bg-white/10" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="grid gap-2 pt-3 sm:grid-cols-2">
              <a className="btn btn-dark justify-center" href={whatsappLink()} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <Link className="btn btn-primary justify-center" href="/contato" onClick={() => setOpen(false)}>
                Solicitar orcamento
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
