import Head from 'next/head'
import fetch from 'node-fetch'
import Layout from '../components/Layout'
import StoryCard from '../components/StoryCard'

const DEFAULT_TITLE = "Hacker News Clone"

export default function Home({ stories }) {
  console.log(stories)

  return (
    <Layout title={DEFAULT_TITLE}>
      <ul>
      { stories.map(story => {
        return <li key={ story.id }><StoryCard story={story}/></li>
      })}
      </ul>
    </Layout>
  )
}

export async function getServerSideProps() {
  const req = await fetch(`https://api.hackerwebapp.com/news`)
  const stories = await req.json()
  return { 
    props: { stories }
   }
}