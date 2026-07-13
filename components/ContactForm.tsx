"use client";

import { Send, ShieldCheck } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
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
    if (!validate()) return;
    setSent(true);
  }

  const whatsappMessage = `Ola! Acessei o site da J&P Treinamentos e gostaria de solicitar orcamento.\n\nNome: ${form.name}\nEmpresa: ${form.company || "Nao informado"}\nTelefone: ${form.phone}\nCidade: ${form.city || "Nao informado"}\nInteresse: ${form.service || "Nao informado"}\nParticipantes: ${form.participants || "Nao informado"}\nMensagem: ${form.message || "Nao informado"}`;

  return (
    <form className="card grid gap-5 p-6 md:p-8" onSubmit={submit} noValidate>
      <div className="hidden">
        <label htmlFor="website">Site</label>
        <input id="website" value={form.website} onChange={(event) => update("website", event.target.value)} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nome" error={errors.name}>
          <input id="name" value={form.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" />
        </Field>
        <Field label="Empresa" optional>
          <input id="company" value={form.company} onChange={(event) => update("company", event.target.value)} autoComplete="organization" />
        </Field>
        <Field label="E-mail" error={errors.email}>
          <input id="email" type="email" value={form.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" />
        </Field>
        <Field label="Telefone" error={errors.phone}>
          <input id="phone" value={form.phone} onChange={(event) => update("phone", maskPhone(event.target.value))} autoComplete="tel" inputMode="tel" />
        </Field>
        <Field label="Cidade" optional>
          <input id="city" value={form.city} onChange={(event) => update("city", event.target.value)} autoComplete="address-level2" />
        </Field>
        <Field label="Servico ou treinamento desejado" error={errors.service}>
          <select id="service" value={form.service} onChange={(event) => update("service", event.target.value)}>
            <option value="">Selecione uma opcao</option>
            {serviceOptions.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
            <option value="Servicos de prevencao de incendio">Servicos de prevencao de incendio</option>
            <option value="Palestra de seguranca">Palestra de seguranca</option>
          </select>
        </Field>
      </div>

      <Field label="Quantidade estimada de participantes" optional>
        <input id="participants" value={form.participants} onChange={(event) => update("participants", event.target.value.replace(/\D/g, "").slice(0, 4))} inputMode="numeric" />
      </Field>

      <Field label="Mensagem" error={errors.message}>
        <textarea id="message" rows={5} value={form.message} onChange={(event) => update("message", event.target.value)} />
      </Field>

      <label className="flex gap-3 text-sm leading-6 text-zinc-600">
        <input className="mt-1 h-4 w-4 accent-red-700" type="checkbox" checked={form.consent} onChange={(event) => update("consent", event.target.checked)} />
        <span>Autorizo a J&P Treinamentos a utilizar os dados informados para responder esta solicitacao, conforme a LGPD.</span>
      </label>
      {errors.consent && <p className="text-sm font-semibold text-red-700">{errors.consent}</p>}

      {sent && (
        <div className="rounded-sm border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          Solicitacao validada. A integracao por e-mail esta preparada para configuracao; voce tambem pode encaminhar os dados pelo WhatsApp.
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <button className="btn btn-primary justify-center" type="submit">
          <Send className="h-4 w-4" /> Enviar solicitacao
        </button>
        <a className="btn btn-ghost justify-center" href={whatsappLink(whatsappMessage)} target="_blank" rel="noreferrer">
          <ShieldCheck className="h-4 w-4" /> Enviar pelo WhatsApp
        </a>
      </div>

      <p className="text-xs text-zinc-500">Nenhuma credencial e armazenada no codigo. Para envio por e-mail, conecte um servico transacional ou endpoint seguro.</p>
      <p className="text-xs text-zinc-500">Contato direto: {siteConfig.phone} - {siteConfig.email}</p>
    </form>
  );
}

function Field({ label, error, optional, children }: { label: string; error?: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-black text-zinc-900">
        {label} {optional && <span className="font-medium text-zinc-500">(opcional)</span>}
      </label>
      <div className="[&_input]:form-field [&_select]:form-field [&_textarea]:form-field">{children}</div>
      {error && <p className="mt-2 text-sm font-semibold text-red-700">{error}</p>}
    </div>
  );
}
