import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://salary-tools-beta.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://salary-tools-beta.vercel.app/in-hand-salary-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://salary-tools-beta.vercel.app/salary-hike-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://salary-tools-beta.vercel.app/pf-calculator",
      lastModified: new Date(),
    },
  ];
}
