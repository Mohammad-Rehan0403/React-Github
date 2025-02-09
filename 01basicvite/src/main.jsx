import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

const AnotherElement = (
    <a href="https://google.com" target="_blank">visit google</a>
)

const areactElement = React.createElement(
    'a',
    {href: "https://google.com", target: "_blank"},
    'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // areactElement
    <App />

)
