import { Component } from "react";

import Access from './access'
import Snippets from './snippets'
import Download from './downloadMac'

class Section extends Component {
    render() {
        return <section className="main">
            <Snippets />
            <Access />
            <Download />
        </section>
    }
}

export default Section