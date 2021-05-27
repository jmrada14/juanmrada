const TAGS_MAP = {
    javascript: 'bg-yellow-200',
    'game theory': 'bg-pink-200',
    'data science': 'bg-blue-200',
    react: 'bg-green-200',
    fastify: 'bg-red-200',
    mongodb: 'bg-purple-200',
    rstudio: 'bg-blue-300',
}
export default function PostTags({ tags }) {
    return (
        <div className="py-2">
            <ul className="flex flex-wrap">
                {tags.map((tag) => {
                    return (
                        <li class="flex-none mt-2 mr-2">
                            <span
                                aria-label="blog-tag"
                                className={`pointer-events-auto inline-block rounded-md px-2 py-1 text-sm font-semibold transition-colors duration-200 ease-in-out ${TAGS_MAP[tag]} text-gray-900`}
                            >
                                #{tag}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
