import Link from 'next/link'
import Layout from '@components/Layout'
import PostList from '@components/PostList'
import getPosts from '@utils/getPosts'
import { NextSeo } from 'next-seo'
// const TAGS_MAP = {
//     javascript: 'bg-yellow-200',
//     'game theory': 'bg-pink-200',
//     'data science': 'bg-blue-200',
//     react: 'bg-green-200',
//     fastify: 'bg-red-200',
//     mongodb: 'bg-purple-200',
//     rstudio: 'bg-blue-300',
// }

const Blog = ({ posts, title, description, ...props }) => {
    return (
        <Layout pageTitle={title} description={description}>
            <NextSeo title="Juan M. Rada Blog" description="Juan M. Rada blog" />
            <main className="text-gray-800 dark:text-gray-100 container mx-auto lg:py-2 xl:py-2 lg:h-screen">
                <div className="container mx-auto relative max-w-xl">
                    <div className="flex flex-col items-left">
                        <section className="w-full px-12 box-content h-32 ">
                            <section className="w-full items-left ">
                                <div className="py-16">
                                    <Link href="/">
                                        <a className="text-4xl text-purple-600 font-bold">
                                            Juan M. Rada
                                        </a>
                                    </Link>
                                    <div className="text-5lg text-left text-gray-900 dark:text-gray-100 font-semibold py-2">
                                        ←{' '}
                                        <Link href="/">
                                            <a>Back to 🏠</a>
                                        </Link>
                                    </div>
                                    {/* <div>
                    <ul class="flex flex-wrap">
                      {posts.map((post) =>
                        post.frontmatter.tags.map((tag) => {
                          return (
                            <li class="flex-none mt-2 mr-2">
                              <button
                                className={`pointer-events-auto inline-block rounded-md px-2 py-1 text-sm font-semibold transition-colors duration-200 ease-in-out ${TAGS_MAP[tag]} text-black`}
                              >
                                {tag}
                              </button>
                            </li>
                          );
                        })
                      )}{" "}
                    </ul>
                  </div> */}
                                </div>

                                <PostList posts={posts} />
                            </section>
                        </section>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Blog

export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`)

    const posts = ((context) => {
        return getPosts(context)
    })(require.context('../posts', true, /\.md$/))

    return {
        props: {
            posts,
            title: configData.default.title,
            description: configData.default.description,
        },
    }
}
