"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import { trainings } from "@/lib/site-data";
import { whatsappLink } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: "",
};

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Informe um e-mail válido.";
    if (form.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Informe um telefone com DDD.";
    if (!form.service) nextErrors.service = "Selecione um assunto.";
    if (form.message.trim().length < 10) nextErrors.message = "Descreva brevemente sua necessidade.";
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

  const whatsappMessage = `Olá! Gostaria de solicitar um orçamento com a J&P Treinamentos.\n\nNome: ${form.name || "Não informado"}\nE-mail: ${form.email || "Não informado"}\nTelefone: ${form.phone || "Não informado"}\nAssunto: ${form.service || "Não informado"}\nMensagem: ${form.message || "Não informado"}`;

  return (
    <form className="contact-form contact-form-bootstrap" onSubmit={submit} noValidate>
      <div className="row g-3">
        <div className="hidden">
          <label htmlFor="website">Site</label>
          <input id="website" value={form.website} onChange={(event) => update("website", event.target.value)} tabIndex={-1} autoComplete="off" />
        </div>

        <div className="col-md-6">
          <Field id="name" label="Nome" error={errors.name}>
            <input className="form-control" id="name" value={form.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" placeholder="Seu nome" />
          </Field>
        </div>

        <div className="col-md-6">
          <Field id="email" label="E-mail" error={errors.email}>
            <input className="form-control" id="email" type="email" value={form.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" placeholder="email@dominio.com.br" />
          </Field>
        </div>

        <div className="col-md-6">
          <Field id="phone" label="Telefone" error={errors.phone}>
            <input className="form-control" id="phone" value={form.phone} onChange={(event) => update("phone", maskPhone(event.target.value))} autoComplete="tel" inputMode="tel" placeholder="(41) 99999-9999" />
          </Field>
        </div>

        <div className="col-md-6">
          <Field id="service" label="Assunto" error={errors.service}>
            <select className="form-select" id="service" value={form.service} onChange={(event) => update("service", event.target.value)}>
              <option value="">Selecione uma opção</option>
              {serviceOptions.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
              <option value="Adequações de prevenção de incêndio">Adequações de prevenção de incêndio</option>
              <option value="Sinalização e rotas de fuga">Sinalização e rotas de fuga</option>
              <option value="Acompanhamento de vistorias">Acompanhamento de vistorias</option>
              <option value="Palestra de segurança">Palestra de segurança</option>
            </select>
          </Field>
        </div>

        <div className="col-12">
          <Field id="message" label="Mensagem" error={errors.message}>
            <textarea className="form-control" id="message" rows={6} value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Escreva sua mensagem" />
          </Field>
        </div>

        {sent && <p className="col-12 mb-0 rounded-sm border border-emerald-200 bg-emerald-50 p-3 text-sm font-semibold text-emerald-900">Dados validados. Clique em enviar mensagem para abrir o WhatsApp.</p>}

        <div className="col-12 mt-3 flex flex-col gap-3 sm:flex-row">
          <a className="contact-form-submit" href={whatsappLink(whatsappMessage)} target="_blank" rel="noreferrer" onClick={(event) => { if (!validate()) event.preventDefault(); }}>
            Enviar mensagem
          </a>
          <button className="contact-form-reset" type="button" onClick={resetForm}>
            Limpar
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      {children}
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
}
