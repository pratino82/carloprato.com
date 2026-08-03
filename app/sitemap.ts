import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["","bio/","recs/","football/"].map(path=>({url:`https://carloprato.com/${path}`,lastModified:new Date(),changeFrequency:path?"monthly":"weekly",priority:path?0.7:1}));
}
