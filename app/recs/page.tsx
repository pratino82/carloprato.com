import type { Metadata } from "next";
import content from "@/data/site-content.json";
import { Footer, Header, RichText } from "../components";

export const metadata: Metadata = { title: "Food & Travel Recommendations", alternates: { canonical: "/recs/" } };
const countries = new Set(["Italy","United States","Israel","Germany","Thailand","Japan"]);

type Group = { heading: string; items: { html: string; text: string }[]; section: string };
function groupRecommendations(): Group[] {
  const groups: Group[] = [];
  let section = "Restaurants (and why)";
  let current: Group | null = null;
  for (const item of content.recommendations) {
    if (item.text === "RESTAURANTS (AND WHY)" || item.text === "OTHER RECS") { section = item.text === "OTHER RECS" ? "Other recommendations" : "Restaurants (and why)"; current = null; continue; }
    if (countries.has(item.text)) { current = { heading: item.text, items: [], section }; groups.push(current); continue; }
    if (current) current.items.push(item);
  }
  return groups;
}

export default function RecsPage() {
  const groups=groupRecommendations();
  return <><Header /><main id="content" className="page-shell">
    <header className="page-hero"><p className="eyebrow">Personal field notes</p><h1>Food & travel</h1><p className="page-intro">A running list of places worth seeking out—from Piedmontese tables to memorable hotels.</p></header>
    {["Restaurants (and why)","Other recommendations"].map(section=><section className="recs-section" key={section}><div className="section-heading"><p className="eyebrow">Recommendations</p><h2>{section}</h2></div><div className="recs-grid">{groups.filter(g=>g.section===section).map((group,index)=><article className="country" key={`${group.heading}-${index}`}><h2>{group.heading}</h2><ul className="rec-list">{group.items.map((item,i)=><li key={i}><RichText html={item.html} /></li>)}</ul></article>)}</div></section>)}
  </main><Footer /></>;
}
