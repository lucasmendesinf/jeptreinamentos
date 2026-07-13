import { whatsappLink } from "@/lib/utils";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-950/35 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
      aria-label="Falar com a J&P Treinamentos pelo WhatsApp"
    >
      <svg className="h-8 w-8" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16.02 3.2A12.72 12.72 0 0 0 5.1 22.45L3.2 29l6.72-1.77A12.71 12.71 0 1 0 16.02 3.2Zm0 2.33a10.38 10.38 0 0 1 8.78 15.9 10.35 10.35 0 0 1-13.64 3.25l-.48-.28-3.99 1.05 1.07-3.86-.31-.5A10.39 10.39 0 0 1 16.02 5.53Zm-4.26 5.34c-.24 0-.62.09-.94.44-.32.35-1.24 1.21-1.24 2.95 0 1.74 1.27 3.42 1.45 3.66.18.23 2.45 3.92 6.08 5.34 3.01 1.18 3.63.95 4.28.89.65-.06 2.1-.86 2.4-1.68.3-.83.3-1.54.21-1.69-.09-.15-.32-.24-.68-.42-.35-.18-2.1-1.03-2.42-1.15-.33-.12-.56-.18-.8.18-.23.35-.92 1.15-1.12 1.38-.21.24-.41.27-.77.09-.35-.18-1.49-.55-2.85-1.76-1.05-.94-1.76-2.1-1.97-2.45-.21-.35-.02-.55.16-.72.16-.16.35-.41.53-.62.18-.21.24-.35.35-.59.12-.24.06-.44-.03-.62-.09-.18-.8-1.93-1.09-2.64-.29-.69-.58-.6-.8-.61h-.69Z"
        />
      </svg>
    </a>
  );
}
