import React, { Component } from 'react'

class DownloadMac extends Component {
    render() {
        return <article className="apple">
        <header>
            <h2>Clipboard for ¡OS and Mac OS</h2>
            <p>Available fro free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.</p>
        </header>
        <div className="download">
            <button className="btn-primary">Download for ¡OS</button>
            <button className="btn-secondary">Download for Mac</button>
        </div>
    </article>
    }
}

export default DownloadMac;