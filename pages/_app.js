import { ThemeProvider } from "next-themes";
import "../styles.css";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
