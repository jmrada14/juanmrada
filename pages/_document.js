import React from "react";
import Document, { Html, Head, Main, NextScript } from "next";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="public/favicon.ico" />
          <Head>
            <meta name="Juan M. Rada" content="Juan M. Rada digital garden" />
          </Head>
        </Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <body className="bg-white dark:bg-black text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
