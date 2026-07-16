"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import { trainings } from "@/lib/site-data";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

type SubmitStatus = {
  type: "idle" | "sending" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: "",
};

const initialStatus: SubmitStatus = {
  type: "idle",
  message: "",
};

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function getEmailEndpoint() {
  if (typeof window === "undefined") return "/send-email.php";
  const basePath = window.location.pathname.startsWith("/jeptreinamentos") ? "/jeptreinamentos" : "";
  return `${basePath}/send-email.php`;
}

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmitStatus>(initialStatus);

  const serviceOptions = useMemo(() => trainings.map((item) => item.name), []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: "" }));
    if (status.type !== "idle") setStatus(initialStatus);
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

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setStatus({ type: "sending", message: "Enviando mensagem..." });

    try {
      const response = await fetch(getEmailEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Não foi possível enviar a mensagem.");
      }

      setForm(initialState);
      setErrors({});
      setStatus({
        type: "success",
        message: result?.message || "Mensagem enviada com sucesso. Em breve retornaremos o contato.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Não foi possível enviar a mensagem. Tente novamente.",
      });
    }
  }

  function resetForm() {
    setForm(initialState);
    setErrors({});
    setStatus(initialStatus);
  }

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
                <option key={item} value={item}>
                  {item}
                </option>
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

        {status.message && (
          <p
            className={`col-12 mb-0 rounded-sm border p-3 text-sm font-semibold ${
              status.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                : status.type === "error"
                  ? "border-red-200 bg-red-50 text-red-900"
                  : "border-orange-200 bg-orange-50 text-orange-900"
            }`}
            role="status"
          >
            {status.message}
          </p>
        )}

        <div className="col-12 mt-3 flex flex-col gap-3 sm:flex-row">
          <button className="contact-form-submit" type="submit" disabled={status.type === "sending"}>
            {status.type === "sending" ? "Enviando..." : "Enviar mensagem"}
          </button>
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
