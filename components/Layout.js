import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ title, children }) {
    return (
        <div className="shadow-sm bg-white container mx-auto px-8 pb-8 h-full">
            <Head>
                <title>{ title }</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
                <meta name="theme-color" content="#ff6600"/>
                <link rel="apple-touch-icon" href="/static/icon.png" />
                <meta name="apple-mobile-web-app-title" content="Hacker News Clone" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-capp-capable" content="yes" />
            </Head>

            <Header/>

            <main >
                { children }
            </main>

            <Footer/>
        </div>
    )
}