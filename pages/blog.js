import Link from "next/link";
import Layout from "@components/Layout";
import PostList from "@components/PostList";
import getPosts from "@utils/getPosts";

const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title} description={description}>
      <div className="w-screen items-left px-12">
        <Link href="/">
          <span className="font-bold text-4xl text-gray-800 dark:text-red-50">
            Juan M. Rada
          </span>
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
