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

  function close(decision: "accepted" | "closed") {
    window.localStorage.setItem(storageKey, decision);
    setVisible(false);
    setTermsOpen(false);
  }

  return (
    <>
      {visible && (
        <section className="fixed bottom-5 left-5 z-[80] grid w-[min(430px,calc(100%-40px))] gap-5 rounded-sm border border-white/15 bg-zinc-950/95 p-5 text-white shadow-2xl shadow-black/35 backdrop-blur-xl" role="region" aria-label="Aviso de termos e cookies">
          <p className="text-center text-sm font-semibold leading-6">
            A J&P Treinamentos utiliza cookies para melhorar sua navegacao, registrar preferencias e apoiar o funcionamento do site. Ao prosseguir, voce concorda com nossos{" "}
            <button className="font-black underline underline-offset-4" type="button" onClick={() => setTermsOpen(true)}>
              termos de cookies e privacidade
            </button>
            .
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button className="btn bg-white text-zinc-950 hover:bg-zinc-100" type="button" onClick={() => close("accepted")}>
              Prosseguir
            </button>
            <button className="btn border border-white/70 bg-transparent text-white hover:bg-white/10" type="button" onClick={() => close("closed")}>
              Fechar
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
              <p>Este site possui finalidade institucional e comercial, apresentando os servicos, treinamentos e canais de contato da J&P Treinamentos.</p>
              <section>
                <h3 className="font-black text-zinc-950">Uso de cookies</h3>
                <p>Podemos utilizar cookies necessarios ao funcionamento do site, melhoria da navegacao e registro de preferencias, como o aceite deste aviso.</p>
              </section>
              <section>
                <h3 className="font-black text-zinc-950">Dados enviados pelo formulario</h3>
                <p>Dados como nome, e-mail, telefone, empresa, cidade e mensagem sao usados para responder solicitacoes comerciais e organizar o atendimento, observando a LGPD.</p>
              </section>
              <section>
                <h3 className="font-black text-zinc-950">Gerenciamento</h3>
                <p>Voce pode gerenciar ou bloquear cookies nas configuracoes do navegador. O bloqueio pode afetar preferencias salvas e partes da experiencia de navegacao.</p>
              </section>
              <section>
                <h3 className="font-black text-zinc-950">Contato</h3>
                <p>
                  Duvidas sobre cookies, privacidade ou tratamento de dados podem ser enviadas pela pagina de{" "}
                  <Link className="font-black text-red-700 underline underline-offset-4" href="/contato">
                    contato
                  </Link>
                  .
                </p>
              </section>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button className="btn btn-primary" type="button" onClick={() => close("accepted")}>
                Prosseguir
              </button>
              <Link className="btn btn-ghost" href="/termos-de-cookies" onClick={() => setTermsOpen(false)}>
                Ver pagina completa
              </Link>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
