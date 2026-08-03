import content from "@/data/site-content.json";
import { CV_URL, Footer, Header, RichText, SCHOLAR_URL } from "./components";

export default function Home() {
  const { academic } = content;
  return <>
    <Header />
    <main id="content">
      <div className="page-shell">
        <section className="hero">
          <div>
            <p className="eyebrow">Political Economy · Columbia University</p>
            <h1>Carlo<br />Prato</h1>
            <div className="hero-copy"><p><RichText html={academic.intro} /></p></div>
            <div className="hero-links">
              <a className="button primary" href="mailto:cp2928@columbia.edu">Email me</a>
              <a className="button" href={CV_URL} target="_blank" rel="noopener">Curriculum vitae</a>
              <a className="button" href={SCHOLAR_URL} target="_blank" rel="noopener">Google Scholar</a>
            </div>
          </div>
          <div className="portrait-wrap">
            <img className="portrait" src="/images/carlo-prato.jpg" alt="Carlo Prato" width="252" height="310" />
          </div>
        </section>

        <section className="section" id="research">
          <div className="section-heading">
            <p className="eyebrow">In progress</p>
            <div><h2>Current research</h2><p className="section-note">Work on electoral systems, democratic accountability, parties, and political institutions.</p></div>
          </div>
          <ul className="research-list">
            {academic.currentResearch.map((item, index) => <li key={index}><p><RichText html={item.html} /></p></li>)}
          </ul>
        </section>

        <section className="section" id="publications">
          <div className="section-heading">
            <p className="eyebrow">Selected record</p>
            <div><h2>Publications</h2><p className="section-note">Published and forthcoming work, with papers and supplementary materials linked where available.</p></div>
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
