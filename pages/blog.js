import Link from "next/link";
import Layout from "@components/Layout";
import PostList from "@components/PostList";
import getPosts from "@utils/getPosts";

const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title} description={description}>
      <section className="w-full px-12 box-content h-32 ">
        <section className="w-full items-left ">
          <div className="py-24">
            <Link href="/">
              <a className="text-4xl text-purple-500 font-bold">
                Juan M. Rada 🥷
              </a>
            </Link>
            <div className="text-5lg text-left text-gray-800 dark:text-gray-100 font-semibold">
              ←{" "}
              <Link href="/">
                <a>Back to 🏠</a>
              </Link>
            </div>
          </div>

          <PostList posts={posts} />
        </section>
      </section>
    </Layout>
  );
};

export default Index;

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
