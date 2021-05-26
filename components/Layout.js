import Head from "next/head";
import Header from "@components/Header";

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Juan M. Rada" content={description}></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        <Header />
        <div className="bg-white dark:bg-gray-900 flex flex-col min-h-screen relative font-mono">
          <div className="container mx-auto ">{children}</div>
        </div>
      </section>
    </>
  );
}
