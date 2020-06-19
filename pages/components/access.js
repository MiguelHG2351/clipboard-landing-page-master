import React, { Component } from 'react'

import Supercharge from './supercharge'

class Access extends Component {
    render() {
        return <article className="access">
        <header className="access-option">
            <h2>Access Clipboard anywhere</h2>
            <p>Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
            <figure>
                <img className="img-responsive" src="/static/images/image-devices.png" alt="foto de un telefono y una pc" />
            </figure>
        </header>
        <Supercharge />
    </article>
    }
}

export default Access;