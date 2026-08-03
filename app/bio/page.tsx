import type { Metadata } from "next";
import content from "@/data/site-content.json";
import { Footer, Header, RichText } from "../components";

export const metadata: Metadata = { title: "Biography", alternates: { canonical: "/bio/" } };

export default function BioPage() {
  return <><Header /><main id="content" className="page-shell">
    <header className="page-hero"><p className="eyebrow">Biography</p><h1>About Carlo</h1></header>
    <div className="bio-grid">
      <div className="prose">{content.bio.map((p,index)=><p key={index}><RichText html={p.html} /></p>)}</div>
      <figure><img src="/images/novi-ligure.jpg" width="280" height="180" alt="Novi Ligure, Italy" /><figcaption className="caption">Novi Ligure, Italy</figcaption></figure>
    </div>
  </main><Footer /></>;
}
