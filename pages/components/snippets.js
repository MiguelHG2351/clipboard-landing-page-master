import React, { Component } from 'react'

class Snippets extends Component {
    render() {
        return <article className="snippets">
        <header className="snippets-header">
            <h1>Keep track of your snippets</h1>
            <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access
    your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything</p>
        </header>
        <div className="img-description">
            <div className="figure">
                <img className="img-responsive" src="/static/images/image-computer.png" alt="Imagen de una computadora" />
            </div>
            <div className="snippet-img-description">
                <div>
                    <h2>Quick Search</h2>
                    <p>Easily search your snippets by content, category,web address, application and more.</p>
                </div>
                <div>
                    <h2>iCloud Sync</h2>
                    <p>Instantly saves and syncs snippets across all your devices.</p>
                </div>
                <div>
                    <h2>Complete History</h2>
                    <p>Retrieve any snippets from the first moment you started using the app.</p>
                </div>
            </div>
        </div>
    </article>
    }
}

export default Snippets;