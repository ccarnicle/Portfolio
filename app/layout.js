import { Newsreader } from "next/font/google";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { site } from "../content/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.cjcarnicle.com"),
  title: site.pageTitle,
  description: site.metaDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.cjcarnicle.com/",
    title: site.pageTitle,
    description: site.metaDescription,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.pageTitle,
    description: site.metaDescription,
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={newsreader.className}>
      <body className="site-shell">
        <SiteHeader />
        <main className="site-main content-wrap">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
