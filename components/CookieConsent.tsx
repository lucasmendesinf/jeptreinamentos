"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const storageKey = "jep_cookie_terms_v1";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(storageKey)) return;
    const frame = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function close(decision: "accepted" | "cancelled") {
    window.localStorage.setItem(storageKey, decision);
    setVisible(false);
    setTermsOpen(false);
  }

  return (
    <>
      {visible && (
        <section
          className="fixed bottom-5 left-5 z-[80] grid w-[min(430px,calc(100%-40px))] gap-5 rounded-sm border border-white/15 bg-zinc-950/95 p-5 text-white shadow-2xl shadow-black/35 backdrop-blur-xl"
          role="region"
          aria-label="Aviso de cookies"
        >
          <p className="text-center text-sm font-semibold leading-6">
            A J&P Treinamentos utiliza cookies para melhorar sua navegação, registrar preferências e apoiar o funcionamento do site. Você pode aceitar ou cancelar o uso de cookies opcionais. Consulte nossos{" "}
            <button className="font-black underline underline-offset-4" type="button" onClick={() => setTermsOpen(true)}>
              termos de cookies e privacidade
            </button>
            .
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button className="btn bg-white text-zinc-950 hover:bg-zinc-100" type="button" onClick={() => close("accepted")}>
              Aceitar
            </button>
            <button className="btn border border-white/70 bg-transparent text-white hover:bg-white/10" type="button" onClick={() => close("cancelled")}>
              Cancelar
            </button>
          </div>
        </section>
      )}

      {termsOpen && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-labelledby="cookie-terms-title">
          <article className="relative max-h-[86vh] w-full max-w-3xl overflow-auto rounded-sm bg-white p-6 text-zinc-800 shadow-2xl md:p-8">
            <button className="absolute right-4 top-4 rounded-full border border-zinc-200 p-2 text-zinc-700 hover:bg-zinc-50" type="button" onClick={() => setTermsOpen(false)} aria-label="Fechar termos de cookies">
              <X className="h-5 w-5" />
            </button>
            <p className="eyebrow">Termos e cookies</p>
            <h2 id="cookie-terms-title" className="mt-3 pr-10 text-3xl font-black text-zinc-950">
              Termos de uso, cookies e privacidade
            </h2>
            <div className="mt-6 grid gap-5 leading-7">
              <p>Este site possui finalidade institucional e comercial, apresentando os serviços, treinamentos e canais de contato da J&P Treinamentos.</p>
              <section>
                <h3 className="font-black text-zinc-950">Uso de cookies</h3>
                <p>Podemos utilizar cookies necessários ao funcionamento do site, melhoria da navegação e registro de preferências, como a decisão sobre este aviso.</p>
              </section>
              <section>
                <h3 className="font-black text-zinc-950">Dados enviados pelo formulário</h3>
                <p>Dados como nome, e-mail, telefone, empresa, cidade e mensagem são usados para responder solicitações comerciais e organizar o atendimento, observando a LGPD.</p>
              </section>
              <section>
                <h3 className="font-black text-zinc-950">Gerenciamento</h3>
                <p>Você pode gerenciar ou bloquear cookies nas configurações do navegador. O bloqueio pode afetar preferências salvas e partes da experiência de navegação.</p>
              </section>
              <section>
                <h3 className="font-black text-zinc-950">Contato</h3>
                <p>
                  Dúvidas sobre cookies, privacidade ou tratamento de dados podem ser enviadas pela página de{" "}
                  <Link className="font-black text-red-700 underline underline-offset-4" href="/jeptreinamentos/contato">
                    contato
                  </Link>
                  .
                </p>
              </section>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button className="btn btn-primary" type="button" onClick={() => close("accepted")}>
                Aceitar cookies
              </button>
              <button className="btn btn-ghost" type="button" onClick={() => close("cancelled")}>
                Cancelar
              </button>
              <Link className="btn btn-ghost" href="/jeptreinamentos/termos-de-cookies" onClick={() => setTermsOpen(false)}>
                Ver página completa
              </Link>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
