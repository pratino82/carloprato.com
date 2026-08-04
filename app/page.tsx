import content from "@/data/site-content.json";
import { Footer, Header, RichText } from "./components";

export default function Home() {
  const { academic } = content;
  return <>
    <Header />
    <main id="content">
      <div className="page-shell">
        <section className="hero">
          <div>
            <p className="eyebrow">Political Economy · Columbia University</p>
            <h1>Carlo Prato</h1>
            <div className="hero-copy"><p><RichText html={academic.intro} /></p></div>
          </div>
          <div className="portrait-wrap">
            <img className="portrait" src="/images/carlo-prato.jpg" alt="Carlo Prato" width="252" height="310" />
          </div>
        </section>

        <section className="section" id="research">
          <div className="section-heading">
            <p className="eyebrow">In progress</p>
            <div><h2>Current research</h2><p className="section-note">Work on elections, democratic accountability, parties, and political institutions.</p></div>
          </div>
          <ol className="publication-list">
            {academic.currentResearch.map((item, index) => <li key={index} data-number={String(academic.currentResearch.length - index).padStart(2,"0")}><p><RichText html={item.html} /></p></li>)}
          </ol>
        </section>

        <section className="section" id="publications">
          <div className="section-heading">
            <p className="eyebrow">Selected record</p>
            <div><h2>Publications</h2><p className="section-note">Published and forthcoming work, with papers and supplements linked when available.</p></div>
          </div>
          <ol className="publication-list">
            {academic.publications.map((item) => <li key={item.number} data-number={String(item.number).padStart(2,"0")}><p><RichText html={item.html.replace(/^\[\d+\.\]\s*/, "")} /></p></li>)}
          </ol>
        </section>

        <section className="section" id="teaching">
          <div className="section-heading">
            <p className="eyebrow">Columbia</p>
            <div><h2>Teaching</h2><p className="section-note">Graduate formal theory and undergraduate political economy.</p></div>
          </div>
          <ul className="teaching-list">
            {academic.teaching.map((item, index) => {
              const code = item.text.split(" ").slice(0,2).join(" ");
              return <li key={index}><span className="course-code">{code}</span><span><RichText html={item.html.replace(code, "")} /></span></li>;
            })}
          </ul>
          <p><RichText html={academic.otherWriting.html} /></p>
        </section>
      </div>
    </main>
    <Footer />
  </>;
}
