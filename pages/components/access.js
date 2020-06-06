import React, { Component } from 'react'

class Access extends Component {
    render() {
        return <article className="access">
        <header className="access-option">
            <h2>Access Clipboard anywhere</h2>
            <p>Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
            <figure>
                <img className="img-responsive" src="/static/images/image-devices.png" />
            </figure>
        </header>
        <section>
            <article className="supercharge">
                <header className="supercharge-header">
                    <h2>Supercharge your workflow</h2>
                    <p>We've got the tools to boost your productivity.</p>
                </header>
                <div className="supercharge-images">
                    <figure>
                        <img src="/static/images/icon-blacklist.svg" />
                        <h2>Create blacklists</h2>
                        <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </figure>
                    <figure>
                        <img src="/static/images/icon-text.svg" />
                        <h2>Create blacklists</h2>
                        <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </figure>
                    <figure>
                        <img src="/static/images/icon-preview.svg" />
                        <h2>Create blacklists</h2>
                        <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </figure>
                </div>
            </article>
            <article className="supercharge-images">
                <figure>
                    <img src="/static/images/logo-google.png" />
                </figure>
                <figure>
                    <img src="/static/images/logo-ibm.png" />
                </figure>
                <figure>
                    <img src="/static/images/logo-microsoft.png" />
                </figure>
                <figure>
                    <img src="/static/images/logo-hp.png" />
                </figure>
                <figure>
                    <img src="/static/images/logo-vector-graphics.png" />
                </figure>
                </article>
        </section>
    </article>
    }
}

export default Access;