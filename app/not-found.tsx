import Link from "next/link";
import { Footer, Header } from "./components";

export default function NotFound() { return <><Header /><main id="content" className="page-shell"><header className="page-hero"><p className="eyebrow">404</p><h1>Page not found</h1><p className="page-intro">The page may have moved during the website migration.</p><p><Link className="button primary" href="/">Return home</Link></p></header></main><Footer /></>; }
