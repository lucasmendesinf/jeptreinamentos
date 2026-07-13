"use client";

import { MessageCircle, RotateCcw } from "lucide-react";
import { FormEvent, ReactNode, useMemo, useState } from "react";
import { trainings } from "@/lib/site-data";
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

  function resetForm() {
    setForm(initialState);
    setErrors({});
    setSent(false);
  }

  const whatsappMessage = `Ola! Gostaria de solicitar um orcamento com a J&P Treinamentos.\n\nNome: ${form.name || "Nao informado"}\nEmpresa: ${form.company || "Nao informado"}\nE-mail: ${form.email || "Nao informado"}\nTelefone: ${form.phone || "Nao informado"}\nCidade: ${form.city || "Nao informado"}\nInteresse: ${form.service || "Nao informado"}\nParticipantes: ${form.participants || "Nao informado"}\nMensagem: ${form.message || "Nao informado"}`;

  return (
    <form className="rounded-sm border border-[#d7def0] bg-white p-6 shadow-2xl shadow-blue-950/10 md:p-10" onSubmit={submit} noValidate>
      <div className="grid gap-6">
        <div className="hidden">
          <label htmlFor="website">Site</label>
          <input id="website" value={form.website} onChange={(event) => update("website", event.target.value)} tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field id="name" label="Nome" error={errors.name}>
            <input id="name" value={form.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" />
          </Field>
          <Field id="email" label="E-mail" error={errors.email}>
            <input id="email" type="email" value={form.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" />
          </Field>
        </div>

        <Field id="phone" label="Telefone" error={errors.phone}>
          <input id="phone" value={form.phone} onChange={(event) => update("phone", maskPhone(event.target.value))} autoComplete="tel" inputMode="tel" placeholder="(00) 00000-0000" />
        </Field>

        <div className="grid gap-5 md:grid-cols-[1.1fr_.9fr_.45fr]">
          <Field id="company" label="Empresa">
            <input id="company" value={form.company} onChange={(event) => update("company", event.target.value)} autoComplete="organization" />
          </Field>
          <Field id="city" label="Cidade">
            <input id="city" value={form.city} onChange={(event) => update("city", event.target.value)} autoComplete="address-level2" />
          </Field>
          <Field id="participants" label="Qtd.">
            <input id="participants" value={form.participants} onChange={(event) => update("participants", event.target.value.replace(/\D/g, "").slice(0, 4))} inputMode="numeric" />
          </Field>
        </div>

        <Field id="service" label="Assunto" error={errors.service}>
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

        <Field id="message" label="Mensagem" error={errors.message}>
          <textarea id="message" rows={6} value={form.message} onChange={(event) => update("message", event.target.value)} />
        </Field>

        <label className="flex gap-3 text-sm leading-6 text-zinc-600" htmlFor="consent">
          <input id="consent" className="mt-1 h-4 w-4 accent-orange-500" type="checkbox" checked={form.consent} onChange={(event) => update("consent", event.target.checked)} />
          <span>Autorizo a J&P Treinamentos a utilizar os dados informados para responder esta solicitacao.</span>
        </label>
        {errors.consent && <p className="-mt-4 text-sm font-semibold text-red-700">{errors.consent}</p>}

        {sent && <p className="rounded-sm border border-emerald-200 bg-emerald-50 p-3 text-sm font-semibold text-emerald-900">Dados validados. Clique em enviar mensagem para abrir o WhatsApp.</p>}

        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="btn border border-[#22279a] bg-white px-7 text-[#22279a] hover:bg-blue-50" type="button" onClick={resetForm}>
            <RotateCcw className="h-4 w-4" /> Limpar
          </button>
          <a className="btn bg-orange-500 px-8 text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600" href={whatsappLink(whatsappMessage)} target="_blank" rel="noreferrer" onClick={(event) => { if (!validate()) event.preventDefault(); }}>
            <MessageCircle className="h-4 w-4" /> Enviar mensagem
          </a>
        </div>
      </div>
    </form>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-3 block text-xl font-black text-[#22279a]" htmlFor={id}>
        {label}
      </label>
      <div className="[&_input]:form-field [&_select]:form-field [&_textarea]:form-field">{children}</div>
      {error && <p className="mt-2 text-sm font-semibold text-red-700">{error}</p>}
    </div>
  );
}
