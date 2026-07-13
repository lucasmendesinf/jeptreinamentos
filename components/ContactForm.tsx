"use client";

import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { FormEvent, ReactNode, useMemo, useState } from "react";
import { siteConfig, trainings } from "@/lib/site-data";
import { whatsappLink } from "@/lib/utils";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  participants: string;
  message: string;
  consent: boolean;
  website: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  city: "",
  service: "",
  participants: "",
  message: "",
  consent: false,
  website: "",
};

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const serviceOptions = useMemo(() => trainings.map((item) => item.name), []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: "" }));
    if (sent) setSent(false);
  }

  function validate() {
    const nextErrors: Record<string, string> = {};
    if (form.website) nextErrors.website = "Envio bloqueado.";
    if (form.name.trim().length < 3) nextErrors.name = "Informe seu nome completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Informe um e-mail valido.";
    if (form.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Informe um telefone com DDD.";
    if (!form.service) nextErrors.service = "Selecione um treinamento ou servico.";
    if (form.message.trim().length < 10) nextErrors.message = "Descreva brevemente sua necessidade.";
    if (!form.consent) nextErrors.consent = "Autorize o contato para envio da solicitacao.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(validate());
  }

  const whatsappMessage = `Ola! Gostaria de solicitar um orcamento com a J&P Treinamentos.\n\nNome: ${form.name || "Nao informado"}\nEmpresa: ${form.company || "Nao informado"}\nE-mail: ${form.email || "Nao informado"}\nTelefone: ${form.phone || "Nao informado"}\nCidade: ${form.city || "Nao informado"}\nInteresse: ${form.service || "Nao informado"}\nParticipantes: ${form.participants || "Nao informado"}\nMensagem: ${form.message || "Nao informado"}`;

  return (
    <form className="overflow-hidden rounded-sm border border-zinc-200 bg-white shadow-2xl shadow-zinc-950/10" onSubmit={submit} noValidate>
      <div className="border-b border-zinc-200 bg-zinc-50 px-5 py-5 md:px-7">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-red-700">Solicitacao de orcamento</p>
        <h2 className="mt-2 text-2xl font-black text-zinc-950">Conte sua necessidade</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          Preencha os dados principais. Depois, valide o formulario e envie as informacoes pelo WhatsApp.
        </p>
      </div>

      <div className="grid gap-5 p-5 md:p-7">
        <div className="hidden">
          <label htmlFor="website">Site</label>
          <input id="website" value={form.website} onChange={(event) => update("website", event.target.value)} tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field id="name" label="Nome completo" error={errors.name} required>
            <input id="name" value={form.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" placeholder="Seu nome" />
          </Field>
          <Field id="company" label="Empresa" optional>
            <input id="company" value={form.company} onChange={(event) => update("company", event.target.value)} autoComplete="organization" placeholder="Nome da empresa" />
          </Field>
          <Field id="email" label="E-mail" error={errors.email} required>
            <input id="email" type="email" value={form.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" placeholder="email@empresa.com.br" />
          </Field>
          <Field id="phone" label="Telefone / WhatsApp" error={errors.phone} required>
            <input id="phone" value={form.phone} onChange={(event) => update("phone", maskPhone(event.target.value))} autoComplete="tel" inputMode="tel" placeholder="(41) 99999-9999" />
          </Field>
          <Field id="city" label="Cidade" optional>
            <input id="city" value={form.city} onChange={(event) => update("city", event.target.value)} autoComplete="address-level2" placeholder="Cidade de atendimento" />
          </Field>
          <Field id="participants" label="Participantes" optional>
            <input id="participants" value={form.participants} onChange={(event) => update("participants", event.target.value.replace(/\D/g, "").slice(0, 4))} inputMode="numeric" placeholder="Ex.: 12" />
          </Field>
        </div>

        <Field id="service" label="Treinamento ou servico desejado" error={errors.service} required>
          <select id="service" value={form.service} onChange={(event) => update("service", event.target.value)}>
            <option value="">Selecione uma opcao</option>
            {serviceOptions.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
            <option value="Adequacoes de prevencao de incendio">Adequacoes de prevencao de incendio</option>
            <option value="Sinalizacao e rotas de fuga">Sinalizacao e rotas de fuga</option>
            <option value="Vistorias do Corpo de Bombeiros">Acompanhamento de vistorias</option>
            <option value="Palestra de seguranca">Palestra de seguranca</option>
          </select>
        </Field>

        <Field id="message" label="Mensagem" error={errors.message} required>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(event) => update("message", event.target.value)}
            placeholder="Informe o objetivo, local, prazo desejado ou qualquer detalhe importante."
          />
        </Field>

        <div className="rounded-sm border border-zinc-200 bg-zinc-50 p-4">
          <label className="flex gap-3 text-sm leading-6 text-zinc-700" htmlFor="consent">
            <input id="consent" className="mt-1 h-4 w-4 accent-red-700" type="checkbox" checked={form.consent} onChange={(event) => update("consent", event.target.checked)} />
            <span>Autorizo a J&P Treinamentos a utilizar os dados informados para responder esta solicitacao, conforme a LGPD.</span>
          </label>
          {errors.consent && <p className="mt-2 text-sm font-semibold text-red-700">{errors.consent}</p>}
        </div>

        {sent && (
          <div className="flex gap-3 rounded-sm border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            <p>Formulario validado. Agora clique em “Enviar pelo WhatsApp” para encaminhar a solicitacao com os dados preenchidos.</p>
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-[.85fr_1.15fr]">
          <button className="btn btn-ghost justify-center" type="submit">
            <Send className="h-4 w-4" /> Validar dados
          </button>
          <a className="btn btn-primary justify-center" href={whatsappLink(whatsappMessage)} target="_blank" rel="noreferrer" onClick={(event) => { if (!validate()) event.preventDefault(); }}>
            <MessageCircle className="h-4 w-4" /> Enviar pelo WhatsApp
          </a>
        </div>

        <div className="grid gap-1 border-t border-zinc-100 pt-4 text-xs text-zinc-500 sm:grid-cols-2">
          <p>Retorno pelo WhatsApp ou e-mail informado.</p>
          <p className="sm:text-right">{siteConfig.email}</p>
        </div>
      </div>
    </form>
  );
}

function Field({ id, label, error, optional, required, children }: { id: string; label: string; error?: string; optional?: boolean; required?: boolean; children: ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-black text-zinc-900" htmlFor={id}>
        {label} {required && <span className="text-red-700">*</span>} {optional && <span className="font-medium text-zinc-500">(opcional)</span>}
      </label>
      <div className="[&_input]:form-field [&_select]:form-field [&_textarea]:form-field">{children}</div>
      {error && <p className="mt-2 text-sm font-semibold text-red-700">{error}</p>}
    </div>
  );
}
