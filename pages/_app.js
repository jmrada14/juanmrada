import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
