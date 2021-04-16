import Layout from "@components/Layout";
import PostList from "@components/PostList";
import Aside from "@components/Aside";
import getPosts from "@utils/getPosts";

const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title} description={description}>
      <PostList posts={posts} />
      <Aside />
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
