import Link from 'next/link'

export default function StoryCard({ story , comment_page=false}) {

    // Don't render ads
    if (!story.points) return null

    return (
        <div className="rounded-sm grid grid-cols-12 grid-rows-2 gap-1 shadow-xs mb-2 p-2">
            <div className="text-gray-600 col-start-1 col-span-1 text-center text-xs font-mono md:text-lg">{ story.points }</div>
            <div className="text-gray-700 col-start-2 col-span-12 text-xs md:text-lg"><a href={ story.url }>{ story.title }</a></div>

            <div className="text-gray-500 col-start-2 col-span-3 text-xs md:text-sm">submitted by { story.user }</div>
            <div className="text-gray-700 col-start-5 col-span-3 text-xs md:text-sm">
                { !comment_page &&
                    <Link href="/item/[story_id]" as={`/item/${story.id}`}>
                        <a className="hover:underline">{ story.comments_count } comments</a>
                    </Link> 
                }
            </div>
        </div>
    )
}