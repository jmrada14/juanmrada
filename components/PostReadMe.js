import Link from 'next/link'
export default function PostReadMe({ postHref }) {
    return (
        <Link href={{ pathname: postHref }}>
            <a aria-label="read-more-url" className="text-blue-600 dark:text-blue-500 text-lg">
                Read me
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
    )
}
