import fetch from 'node-fetch'
import Layout from '../../components/Layout'
import StoryCard from '../../components/StoryCard'
import Comment from '../../components/Comment'


export default function Comments({ story }) {
    return (
        <Layout>
            <StoryCard story={ story }/>
            <br />
            { story.comments.map(comment => {
                return <Comment comment={comment}/>
            })}
        </Layout>
    )
}


export async function getServerSideProps({ params }) {
    const req = await fetch(`https://api.hackerwebapp.com/item/${params.story_id}`)
    const story = await req.json()
    console.log(story)
    return {
        props: {
            story
        }
    }
}