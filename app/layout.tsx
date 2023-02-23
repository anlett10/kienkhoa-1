import { Analytics } from "../components/analytics";
import { CopyrightBanner } from "../components/copyright-banner";
import { Footer } from "../components/footer";
import { SiteHeader } from "../components/site-header";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
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
