
export default function Comment({ comment }) {
    return (
        <div className="rounded-sm shadow-xs my-4 p-4 text-xs md:text-sm">
            <div className="text-gray-700">{ comment.user } ~ <span className="">{ comment.time_ago }</span></div>
            <div className="leading-relaxed text-gray-700 font-sans " dangerouslySetInnerHTML={ { __html: comment.content } }></div>
            <br/>

            { comment.comments.length > 0 && 
              comment.level < 3 &&
            <>
            { comment.comments.map(comment => {
                return <Comment key={comment.id} comment={comment}/>
            })}
            </>}
        </div>
    )
}