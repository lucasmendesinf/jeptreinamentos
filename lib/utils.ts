import { siteConfig } from "./site-data";

export function whatsappLink(message = siteConfig.defaultWhatsappMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsappMessage(item: string) {
  return `Ola! Gostaria de solicitar um orcamento para ${item}.`;
}

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
