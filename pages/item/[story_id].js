import fetch from 'node-fetch'

import Head from 'next/head'

import Layout from '../../components/Layout'
import StoryCard from '../../components/StoryCard'
import Comment from '../../components/Comment'


export default function Comments({ story }) {
    return (
        <>
            <Layout title={ story.title }>
                <StoryCard story={ story } comment_page={true}/>
                { story.comments.map(comment => {
                    return <Comment comment={comment}/>
                })}
            </Layout>
        </>
    )
}


export async function getServerSideProps({ params }) {
    const req = await fetch(`https://api.hackerwebapp.com/item/${params.story_id}`)
    const story = await req.json()
    return {
        props: {
            story
        }
    }
}