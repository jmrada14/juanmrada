import PostReadMe from '@components/PostReadMe'
import PostTags from '@components/PostTags'
import PostTitle from '@components/PostTitle'

export default function Post({ postHref, title, author, date, description, tags = [] }) {
    return (
        <>
            <article className="mb-7 border-b pb-7">
                <PostTitle postHref={postHref} title={title} />
                <div className="text-gray-900 dark:text-gray-100 text-md font-light">
                    <span>
                        Posted by <span className="font-semibold ">{author}</span>
                    </span>{' '}
                    <time datetime={date}>
                        on <span className="font-semibold ">{date}</span>
                    </time>{' '}
                    <br />
                    <span>{description}</span>
                    <br />
                    <PostTags tags={tags} />
                </div>
                <PostReadMe postHref={postHref} />
            </article>
        </>
    )
}
