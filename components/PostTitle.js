import Link from 'next/link'
export default function PostTitle({ postHref, title }) {
    return (
        <h3 className="text-2xl mb-1">
            <Link href={postHref}>
                <a
                    aria-label="article-url"
                    className="text-xl text-blue-500 font-bold hover:text-purple-500 pt-2 pb-1"
                >
                    {title}
                </a>
            </Link>
        </h3>
    )
}
