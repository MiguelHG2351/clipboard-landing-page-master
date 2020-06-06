import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return <footer>
            <div className="logo-footer">
                <img src="/static/images/logo.svg" />
            </div>
            <ul className="list-footer">
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Press Kit</li>
                <li>Install Guide</li>
            </ul>
            <div className="social-media">
                <figure>
                    <img src="/static/images/icon-facebook.svg" />
                </figure>
                <figure>
                    <img src="/static/images/icon-twitter.svg" />
                </figure>
                <figure>
                    <img src="/static/images/icon-instagram.svg" />
                </figure>
            </div>
        </footer>
    }
}

export default Footer;