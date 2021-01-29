import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, pageTitle, description, ...props }) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        <div className="py-12 flex flex-col items-center justify-center">
          <Link href="/">
            <a className="transform hover:scale-110 motion-reduce:transform-none hover:text-red-700 dark:hover:text-blue-500 text-5xl text-center text-gray-800 dark:text-gray-100 font-bold">
              Juan M. Rada
            </a>
          </Link>
          <div className="py-5  flex flex-col items-center">
            <div>
              <Image
                className="rounded-full shadow-sm "
                src="/twitter.jpg"
                width="90"
                height="90"
                alt="avatar"
              />
            </div>
            <div>
              <p className="text-base text-center text-gray-800 dark:text-gray-100 text-justify ">
                Hello there, <br />
                work in progress... Coming soon!
              </p>
            </div>
          </div>
          <button
            className="mt-8 px-1 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {theme === "light" ? "dark mode" : "light mode"}
          </button>
        </div>
        <div className="container">{children}</div>
      </section>
    </>
  );
}
