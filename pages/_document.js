import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="public/favicon.ico" />
                    <meta name="Juan M. Rada" content="Juan M. Rada digital garden"></meta>
                </Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <body className="bg-white dark:bg-gray-900 text-white dark:text-gray-900">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
