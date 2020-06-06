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
            </Head>
            <Header />
            <Section />
            <Footer />
        </Fragment>
    }
}



export default Index;