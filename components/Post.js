import Link from "next/link";

export default function Post({ postHref, title, author, date, description }) {
  return (
    <>
      <article className="w-96 bg-white rounded dark:bg-gray-900">
        <div className="justify-start py-2 px-2 relative items-center content-end">
          <Link href={{ pathname: postHref }}>
            <a className="text-3xl text-blue-500 font-bold hover:text-gray-500 pt-2 pb-1">
              {title}
            </a>
          </Link>
          <p className="text-xs pb-3 text-gray-500">
            Posted by{" "}
            <span className="font-semibold hover:text-gray-800">{author}</span>{" "}
            on <span className="font-semibold hover:text-gray-800">{date}</span>
          </p>

          <div className="text-gray-800 dark:text-red-50 prose max-w-full pb-6">
            <p>{description}</p>
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
        </div>
      </article>
    </>
  );
}
