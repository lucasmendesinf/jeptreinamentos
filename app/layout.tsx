import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "J&P Treinamentos | Prevencao de incendios e seguranca do trabalho",
    template: "%s | J&P Treinamentos",
  },
  description:
    "Treinamentos de brigada de incendio, seguranca do trabalho, NRs, bombeiro civil e servicos de prevencao de incendios para empresas.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "J&P Treinamentos",
    description: "Treinamentos que preparam pessoas e protegem vidas.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "J&P Treinamentos - treinamentos que preparam pessoas e protegem vidas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "J&P Treinamentos",
    description: "Prevencao de incendios e seguranca do trabalho para empresas.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    founder: siteConfig.responsible,
    foundingDate: siteConfig.founded,
    description: siteConfig.tagline,
  };

  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${sourceSans.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
        <CookieConsent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
