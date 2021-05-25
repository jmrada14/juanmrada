import Link from "next/link";
import { TAGS_MAP } from "@utils/tagConfig";
export default function Post({
  postHref,
  title,
  author,
  date,
  description,
  tags = [],
}) {
  return (
    <>
      <article className="mb-7 border-b pb-7">
        <h3 className="text-2xl mb-1">
          <Link href={postHref}>
            <a className="text-xl text-blue-500 font-bold hover:text-gray-500 pt-2 pb-1">
              {title}
            </a>
          </Link>
        </h3>

        <div className="text-gray-400 text-md font-light">
          <span>
            Posted by{" "}
            <span className="font-semibold hover:text-gray-800">{author}</span>
          </span>{" "}
          <time datetime={date}>
            on <span className="font-semibold hover:text-gray-800">{date}</span>
          </time>{" "}
          <br />
          <span>{description}</span>
          <br />
          <div>
            <ul className="flex flex-wrap">
              {tags.map((tag) => {
                const tagColor = TAGS_MAP[tag];
                return (
                  <li class="flex-none mt-2 mr-2">
                    <span
                      className={`pointer-events-auto inline-block rounded-md px-2 py-1 text-sm font-semibold transition-colors duration-200 ease-in-out ${tagColor} text-black`}
                    >
                      #{tag}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Link href={{ pathname: postHref }}>
          <a className="text-blue-500 hover:text-blue-300">
            Read more
            <svg
              className="inline h-5 w-4 align-text-top"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Link>
      </article>
    </>
  );
}
