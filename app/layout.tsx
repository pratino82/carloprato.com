import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carloprato.com"),
  title: {
    default: "Carlo Prato | Political Economy",
    template: "%s | Carlo Prato",
  },
  description:
    "Carlo Prato is an Associate Professor of Political Science at Columbia University studying political economy, electoral institutions, and governance.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://carloprato.com",
    siteName: "Carlo Prato",
    title: "Carlo Prato | Political Economy",
    description:
      "Research, publications, and teaching in political economy at Columbia University.",
    images: [{ url: "/images/social-preview.png", width: 1734, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlo Prato | Political Economy",
    description:
      "Research, publications, and teaching in political economy at Columbia University.",
    images: ["/images/social-preview.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
