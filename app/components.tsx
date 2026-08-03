import Link from "next/link";

export const CV_URL = "https://www.dropbox.com/scl/fi/08j3o4v1b7s142ph0ygyj/CV_Prato-Public.pdf?rlkey=znv9c38xv62y6ngm7dd3x7998&dl=0";
export const SCHOLAR_URL = "https://scholar.google.com/citations?user=HAClU6EAAAAJ&hl=en";

export function Header() {
  return <>
    <a className="skip-link" href="#content">Skip to content</a>
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/">Carlo Prato</Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/#research">Research</Link>
          <Link href="/#publications">Publications</Link>
          <Link href="/#teaching">Teaching</Link>
          <Link href="/bio/">Bio</Link>
          <Link href="/recs/">Recs</Link>
          <a className="nav-cv" href={CV_URL} target="_blank" rel="noopener">CV</a>
        </nav>
      </div>
    </header>
  </>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="page-shell footer-shell">
      <p>© {new Date().getFullYear()} Carlo Prato</p>
      <div className="footer-links">
        <Link href="/bio/">Biography</Link>
        <Link href="/recs/">Food & travel</Link>
        <Link href="/football/">Football</Link>
        <a href={SCHOLAR_URL} target="_blank" rel="noopener">Google Scholar</a>
      </div>
    </div>
  </footer>;
}

export function RichText({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
