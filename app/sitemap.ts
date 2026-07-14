import type { MetadataRoute } from "next";
import { siteConfig, trainings } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/sobre", "/treinamentos", "/servicos", "/normas-regulamentadoras", "/contato", "/politica-de-privacidade", "/termos-de-cookies", "/termos-de-uso"];
  const trainingRoutes = trainings.map((training) => `/treinamentos/${training.slug}`);

  return [...staticRoutes, ...trainingRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
