import fetch from 'node-fetch'
import Layout from '../../components/Layout'


export default function Comments({ story }) {
    return (
        <Layout>
            <h2>{ story.title }</h2>
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