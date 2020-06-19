import React, { Component, Fragment } from 'react'
// import Link from 'next/link'
import Head from 'next/head'

// Assets
import Header from './components/header'
import Section from './components/section'
import Footer from './components/footer'

class Index extends Component {
    render() {
        return <Fragment>
            <Head>
                <title>FrontEnd Mentor | Clipboard landing page</title>
                <link rel="icon" href="/static/images/favicon-32x32.png"></link>
                <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap" rel="stylesheet" /> 
                <meta name="og:url" content="https://github.com/MiguelHG2351" />
                <meta property="og:image" content="/static/design/desktop-preview.jpg" />
                <meta name="og:title" content="FrontEnd Mentor | CLIPBOARD-LANDING-PAGE"/>
                <meta name="og:type" content="website" />
            </Head>
            <Header />
            <Section />
            <Footer />
        </Fragment>
    }
}



export default Index;