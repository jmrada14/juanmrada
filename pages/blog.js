import Link from "next/link";
import Layout from "@components/Layout";
import PostList from "@components/PostList";
import getPosts from "@utils/getPosts";

const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title} description={description}>
      <div className="flex flex-col items-center py-12">
        <Link href="/">
          <a className="font-bold text-5xl py-3 text-gray-800 dark:text-red-50">
            Juan M. Rada
          </a>
        </Link>{" "}
      </div>
      <PostList posts={posts} />
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
