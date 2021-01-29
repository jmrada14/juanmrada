import Layout from "@components/Layout";
import PostList from "@components/PostList";
import getPosts from "@utils/getPosts";

const Index = ({ posts, title, description, ...props }) => {
  return (
    <div className="mx-auto bg-white dark:bg-black">
      <Layout pageTitle={title} description={description}>
        <div className="py-2 flex flex-col items-center justify-center">
          <PostList posts={posts} />
        </div>
      </Layout>
    </div>
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
