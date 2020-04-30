import React from 'react'
// import App from 'next/app'
import '../styles/tailwind.css'
// `App` component is the top-level component which will be common across all the different pageXOFFset,
// used to keep state when navigating beween pages

// can add global CSS fiels by importing them to _app.js, cannot import global CSS anywhere else
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}