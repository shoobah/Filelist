import 'babel-core/polyfill' // Får Object.assign att lira i applikationen
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

let el=document.getElementById('filelist')
let data=el.getAttribute('data-files')

ReactDOM.render(<App files={data} />,el)
