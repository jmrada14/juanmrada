import Link from "next/link";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul className="list-disc">
        {posts &&
          posts.map((post) => {
            return (
              <>
                <li
                  key={post.slug}
                  className="text-lg text-center text-gray-800 dark:text-gray-100 text-justify"
                >
                  {post.frontmatter.date}: {` `}
                  <Link href={{ pathname: `/post/${post.slug}` }}>
                    <a className="text-5sm text-center text-blue-800 dark:text-gray-100 text-justify transform hover:scale-110 motion-reduce:transform-none hover:text-red-700 dark:hover:text-blue-500">
                      {post?.frontmatter?.title}
                    </a>
                  </Link>
                </li>
              </>
            );
          })}
      </ul>
    </div>
  );
}
