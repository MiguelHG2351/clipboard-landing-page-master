import React, { Component, Fragment } from 'react'

class Supercharge extends Component {
    render() {
        return <Fragment>
        <section>
            <article className="supercharge">
                <header className="supercharge-header">
                    <h2>Supercharge your workflow</h2>
                    <p>We've got the tools to boost your productivity.</p>
                </header>
                <div className="supercharge-images">
                    <figure>
                        <img src="/static/images/icon-blacklist.svg" alt="icono de lista negra" />
                        <h2>Create blacklists</h2>
                        <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </figure>
                    <figure>
                        <img src="/static/images/icon-text.svg" alt="una hoja" />
                        <h2>Create blacklists</h2>
                        <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </figure>
                    <figure>
                        <img src="/static/images/icon-preview.svg" alt="dibujo de un ojo" />
                        <h2>Create blacklists</h2>
                        <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </figure>
                </div>
            </article>
            <article className="supercharge-images">
                <figure>
                    <img src="/static/images/logo-google.png" alt="logo de google" />
                </figure>
                <figure>
                    <img src="/static/images/logo-ibm.png" alt="logo de IBM" />
                </figure>
                <figure>
                    <img src="/static/images/logo-microsoft.png" alt="logo de MICROSOFT" />
                </figure>
                <figure>
                    <img src="/static/images/logo-hp.png" alt="Logo de HP" />
                </figure>
                <figure>
                    <img src="/static/images/logo-vector-graphics.png" alt="Logo de vector" />
                </figure>
                </article>
        </section>
        </Fragment>
    }
}

export default Supercharge