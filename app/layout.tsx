import { Analytics } from "../components/analytics";
import { CopyrightBanner } from "../components/copyright-banner";
import { Footer } from "../components/footer";
import { SiteHeader } from "../components/site-header";
import "../styles/globals.css";

import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || "localhost:3000";

const defaultTitle = "Kiến Khoa — Build Solid Applications";
const defaultDescription =
  "Websites, ứng dụng web, mobile tốt nhất cho Doanh nghiệp";

const fontsBasePath = "/fonts";
const fontsPaths = [
  "/ibm-plex-sans/ibm-plex-sans-bold.woff2",
  "/ibm-plex-sans/ibm-plex-sans-regular.woff2",
];

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:url" content={SITE_URL?.toString()} />
        <meta property="twitter:title" content={defaultTitle} />
        <meta property="twitter:description" content={defaultDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />

        {fontsPaths.map((fontPath, index) => (
          <link
            rel="preload"
            href={`${fontsBasePath}${fontPath}`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key={index}
          />
        ))}
      </head>
      <body>
        <div>
          <SiteHeader />
          <main className="bg-page-gradient pt-navigation-height">
            <div className="rounded-lg bg-slate-500 p-4 lg:p-8">{children}</div>
          </main>
          <Footer />
          <CopyrightBanner />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
