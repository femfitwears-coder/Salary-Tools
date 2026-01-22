import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://YOURDOMAIN.com/",
      lastModified: new Date(),
    },
    {
      url: "https://YOURDOMAIN.com/in-hand-salary-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://YOURDOMAIN.com/salary-hike-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://YOURDOMAIN.com/pf-calculator",
      lastModified: new Date(),
    },
  ];
}
