
export default function Comment({ comment }) {
    return (
        <>
            <div className="font-sans text-xs md:text-base" dangerouslySetInnerHTML={ { __html: comment.content } }></div>
            <br/>
        </>
    )
}