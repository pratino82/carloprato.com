import type { Metadata } from "next";
import { Footer, Header } from "../components";

export const metadata: Metadata = { title: "Football", alternates: { canonical: "/football/" } };

export default function FootballPage() {
  return <><Header /><main id="content" className="page-shell"><header className="page-hero"><p className="eyebrow">Football</p><h1>La Samp</h1></header><section className="football-card"><div><img src="/images/sampdoria.png" width="298" height="377" alt="Sampdoria crest and colors" /><p>Genova è solo blucerchiata.</p></div></section></main><Footer /></>;
}
