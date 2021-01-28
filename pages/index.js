import { useTheme } from "next-themes";
import Layout from "@components/Layout";
import PostList from "@components/PostList";
import getPosts from "@utils/getPosts";

const Index = ({ posts, title, description, ...props }) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-white dark:bg-black">
      <div className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-center text-gray-800 dark:text-gray-100 font-bold">
          Juan M. Rada
        </h1>

        <button
          className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          Change Theme
        </button>
        <Layout pageTitle={title} description={description}>
          <PostList posts={posts}/>
        </Layout>
      </div>
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
