import Link from "next/link";
import Post from "./Post";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <section className="w-full px-12 py-32 box-content h-32 ">
      <section className="w-full items-left ">
        {!posts && <div>No posts!</div>}
        {posts &&
          posts.map((post) => {
            return (
              <>
                <Post
                  postHref={`/post/${post.slug}`}
                  title={post?.frontmatter?.title}
                  author="Juan M. Rada"
                  date={post.frontmatter.date}
                  description={post.frontmatter.description}
                />
              </>
            );
          })}
      </section>
    </section>
  );
}
