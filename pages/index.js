import React from "react";
import Link from "next/link";
import TextTransition, { presets } from "react-text-transition";
import { NextSeo } from "next-seo";
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
      <NextSeo title="Juan M. Rada" description="Juan M. Rada home page" />
      <main className="text-gray-900 dark:text-gray-100 container mx-auto lg:py-2 xl:py-2 lg:h-screen">
        <div className="container mx-auto relative mt-28 max-w-xl">
          <div className="px-6 flex flex-col items-left">
            <span className="font-bold text-4xl py-3">
              Hi there, I'm Juan <br />
              <span className="items-center">
                I'm a{" "}
                <span className="text-purple-600">
                  <TextTransition
                    inline
                    text={TEXTS[index % TEXTS.length]}
                    springConfig={presets.default}
                  />
                </span>
              </span>
            </span>

            <p className="xl:text-xl lg:text-xl sm:text-lg md:text-xl  text-gray-900 dark:text-gray-100 text-left my-4 w-full">
              An enthusiastic and ambitious software developer🚀 committed to
              human-center development.🎯 I'm interested in UI development, web
              performance📈, information security, privacy🥷, data analysis and
              visualization📊, and much more🔥
            </p>
            <br />
            <div className="flex flex-wrap justify-left text-lg">
              <Link href="/blog">
                <span className="px-2 py-2 font-semibold text-lg text-purple-600 cursor-pointer hover:underline">
                  Blog
                </span>
              </Link>
              <Link href="https://github.com/jmrada14">
                <span className="py-2 font-semibold text-lg text-purple-600 cursor-pointer hover:underline">
                  GitHub
                </span>
              </Link>

              <Link href="https://www.linkedin.com/in/juan-rada-4b997b190/">
                <span className="px-2 py-2 font-semibold text-lg text-purple-600 cursor-pointer hover:underline">
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
