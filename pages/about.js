import React from 'react'

class About extends React.Component {
    render() {
        return <React.Fragment>
            <h1>Hola Mundo</h1>
        </React.Fragment>
    }
}

export default About;
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({/* my next config */})

// function HACK_removeMinimizeOptionFromCssLoaders(config) {
//     config.module.rules.forEach(rule => {
//         if (Array.isArray(rule.use)) {
//             rule.use.forEach(u => {
//                 if (u.loader === 'css-loader' && u.options) {
//                     delete u.options.minimize;
//                 }
//             });
//         }
//     });
// }

// module.exports = withCSS({
//     webpack(config) {
//         HACK_removeMinimizeOptionFromCssLoaders(config);
//         return config;
//     },
// });