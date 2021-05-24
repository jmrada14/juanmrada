import React from "react";
import Link from "next/link";
import TextTransition, { presets } from "react-text-transition";
import Layout from "@components/Layout";

const Index = () => {
  const [index, setIndex] = React.useState(0);
  const TEXTS = ["Developer🧑‍💻", "Creator👨‍🔬", "Ninja🥷"];
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Layout>
      <main className="text-gray-800 dark:text-red-50 container mx-auto py-24 lg:py-24 xl:py-24 lg:h-screen">
        <div className="container mx-auto relative mt-28 py-5 max-w-xl">
          <div className="px-6 flex flex-col items-left">
            <span className="font-bold text-5xl py-3">
              Hi there, I'm Juan <br />
              <span className="items-center">
                I'm a{" "}
                <span className="text-purple-500">
                  <TextTransition
                    inline
                    text={TEXTS[index % TEXTS.length]}
                    springConfig={presets.default}
                  />
                </span>
              </span>
            </span>

            <p className="text-xl text-gray-700 dark:text-gray-100 text-left my-4 w-full">
              An enthusiastic and ambitious software developer🚀 committed to
              human-center development.🎯 I'm interested in UI development, web
              performance📈, information security, privacy🥷, data analysis and
              visualization📊, and much more🔥
            </p>
            <br />
            <div class="flex flex-wrap justify-left text-lg">
              <Link href="https://github.com/jmrada14">
                <span className="py-2 font-semibold text-blue-500 cursor-pointer">
                  GitHub
                </span>
              </Link>
              <Link href="/blog">
                <span className="px-4 py-2 font-semibold text-blue-500 cursor-pointer">
                  Blog
                </span>
              </Link>
              <Link href="https://www.linkedin.com/in/juan-rada-4b997b190/">
                <span className="px-4 py-2 font-semibold text-blue-500 cursor-pointer ">
                  LinkedIn
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Index;
