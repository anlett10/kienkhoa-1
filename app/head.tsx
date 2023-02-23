const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || "localhost:3000";

const defaultTitle = "Kiến Khoa — Build Solid Applications";
const defaultDescription =
  "Websites, Ứng dụng web, mobile tốt nhất cho Doanh nghiệp";

const fontsBasePath = "/fonts";
const fontsPaths = [
  "/ibm-plex-sans/ibm-plex-sans-bold.woff2",
  "/ibm-plex-sans/ibm-plex-sans-regular.woff2",
];

const Head = ({ title = defaultTitle, description = defaultDescription }) => {
  const url = SITE_URL;

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url?.toString()} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
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
    </>
  );
};

export default Head;
