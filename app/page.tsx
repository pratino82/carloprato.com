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
            <div><h2>Current research</h2></div>
          </div>
          <ol className="publication-list">
            {academic.currentResearch.map((item, index) => <li key={index} data-number={String(academic.currentResearch.length - index).padStart(2,"0")}><p><RichText html={item.html} /></p></li>)}
          </ol>
        </section>

        <section className="section" id="publications">
          <div className="section-heading">
            <p className="eyebrow">Full list</p>
            <div><h2>Publications</h2></div>
          </div>
          <ol className="publication-list">
            {academic.publications.map((item) => <li key={item.number} data-number={String(item.number).padStart(2,"0")}><p><RichText html={item.html.replace(/^\[\d+\.\]\s*/, "")} /></p></li>)}
          </ol>
        </section>

        <section className="section" id="teaching">
          <div className="section-heading">
            <p className="eyebrow">Columbia</p>
            <div><h2>Teaching</h2></div>
          </div>
          <ul className="teaching-list">
            {academic.teaching.map((item, index) => {
              const course = [
                { label: "POLS GR8211", remove: "POLS GR8211" },
                { label: "POLS W4732", remove: "POLS W4732" },
                { label: "ECPS 4921", sublabel: "Seminar", remove: "ECPS4921 Seminar" },
              ][index]!;
              return <li key={index}>
                <span className="course-code">{course.label}{course.sublabel && <><br /><span className="course-sublabel">{course.sublabel}</span></>}</span>
                <span><RichText html={item.html.replace(course.remove, "").replace(/(<br>)+$/, "")} /></span>
              </li>;
            })}
          </ul>
        </section>

        <section className="section" id="other-writing">
          <div className="section-heading">
            <p className="eyebrow">Essays & translations</p>
            <div><h2>Other writing</h2></div>
          </div>
          <ol className="publication-list">
            <li data-number="02"><p><RichText html={academic.otherWriting.html} /></p></li>
            <li data-number="01"><p>La Democrazia: Breve Saggio di Adam Przeworski <span className="item-note">[Italian translation]</span></p></li>
          </ol>
        </section>
      </div>
    </main>
    <Footer />
  </>;
}
