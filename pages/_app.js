import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import "../styles.css";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.juanmrada.com/",
          site_name: "Juan M. Rada",
        }}
      />
      <Head>
        <meta name="Juan M. Rada" content="Juan M. Rada digital garden" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
