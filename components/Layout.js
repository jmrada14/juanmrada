import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        <div className="bg-white dark:bg-black flex flex-col min-h-screen">
          <Header />
          <div className="container mx-auto flex flex-wrap flex-grow">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
