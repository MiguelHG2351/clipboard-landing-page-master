import { Component } from "react";

class Header extends Component {
    render() {
        return <header className="header-site">
            <div className="header-container">
                <div className="header-logo">
                    <img src="/static/images/logo.svg" alt="Logo del sitio web" alt="Logo de la aplicación" />
                </div>
                <div className="header-title">
                    <h1>A history of everything you copy</h1>
                    <p>Clipboard allows you to track and organize everything you copy. Instanly access you Clipboard on all your devices</p>
                </div>
                <div className="header-download">
                    <button className="btn-primary">Download for ¡OS</button>
                    <button className="btn-secondary">Download for android</button>
                </div>
            </div>
        </header>
    }
}

export default Header