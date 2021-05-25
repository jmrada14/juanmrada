import Link from "next/link";
import Layout from "@components/Layout";
import PostList from "@components/PostList";
import getPosts from "@utils/getPosts";

const Blog = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title} description={description}>
      <main className="text-gray-800 dark:text-red-50 container mx-auto lg:py-2 xl:py-2 lg:h-screen">
        <div className="container mx-auto relative max-w-xl">
          <div className="flex flex-col items-left">
            <section className="w-full px-12 box-content h-32 ">
              <section className="w-full items-left ">
                <div className="py-16">
                  <Link href="/">
                    <a className="text-4xl text-purple-500 font-bold">
                      Juan M. Rada 🥷
                    </a>
                  </Link>
                  <div className="text-5lg text-left text-gray-800 dark:text-gray-100 font-semibold py-2">
                    ←{" "}
                    <Link href="/">
                      <a>Back to 🏠</a>
                    </Link>
                  </div>
                </div>

                <PostList posts={posts} />
              </section>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    return getPosts(context);
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
