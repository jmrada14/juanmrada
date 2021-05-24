import Head from "next/head";
import ThemeSwitch from "@components/ThemeSwitch";

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        <nav>
          <div className="items-center">
            <ThemeSwitch />
          </div>
        </nav>
        <div className="bg-white dark:bg-gray-900 flex flex-col min-h-screen">
          <div className="container mx-auto ">{children}</div>
        </div>
      </section>
    </>
  );
}
