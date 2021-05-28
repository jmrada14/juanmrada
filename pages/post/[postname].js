import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '@components/Layout'
import getSlugs from '@utils/getSlugs'
import { NextSeo } from 'next-seo'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
    if (!frontmatter) return <></>
    return (
        <>
            <Layout
                pageTitle={`${siteTitle} | ${frontmatter.title}`}
                className="bg-white dark:bg-gray-900"
            >
                <NextSeo
                    title={`Juan M. Rada Blog - Post: ${frontmatter.title}`}
                    description={frontmatter.description}
                />
                <div className="text-xl text-left text-gray-800 dark:text-gray-100 font-bold py-16">
                    ←{' '}
                    <Link href="/blog">
                        <a>Back to blog 📔</a>
                    </Link>
                </div>
                <article>
                    <div className="mb-2 border-b pb-9">
                        {' '}
                        <h1 className="py-1 text-4xl text-left px-24 text-purple-700 font-bold">
                            {frontmatter.title}
                        </h1>
                        <h3 className="text-gray-900 dark:text-gray-100 text-md font-light text-left px-24">
                            <span className="py-0.5">
                                Posted by{' '}
                                <span className="font-semibold ">{frontmatter.author}</span>
                            </span>{' '}
                            <br />
                            <time datetime={frontmatter.date} className="py-0.5">
                                <span className="font-semibold ">{frontmatter.date}</span>
                            </time>{' '}
                        </h3>
                    </div>
                    <div className="blog-wrapper ">
                        <style jsx>{`
                            .blog-wrapper {
                                margin: 0 auto;
                                max-width: 75%;
                                padding: 1.45rem 1.0875rem;
                            }
                        `}</style>
                        <ReactMarkdown source={markdownBody} className="markdown" />
                    </div>
                </article>
            </Layout>
        </>
    )
}

export async function getStaticProps({ ...ctx }) {
    const { postname } = ctx.params

    const content = await import(`../../posts/${postname}.md`)
    const config = await import(`../../siteconfig.json`)
    const data = matter(content.default)

    return {
        props: {
            siteTitle: config.title,
            frontmatter: data.data,
            markdownBody: data.content,
        },
    }
}

export async function getStaticPaths() {
    const blogSlugs = ((context) => {
        return getSlugs(context)
    })(require.context('../../posts', true, /\.md$/))

    const paths = blogSlugs.map((slug) => `/post/${slug}`)

    return {
        paths, // An array of path names, and any params
        fallback: false, // so that 404s properly appear if something's not matching
    }
}
