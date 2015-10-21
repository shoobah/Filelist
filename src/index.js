import 'babel-core/polyfill' // Får Object.assign att lira i applikationen
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './app'
import store from './data/findstore'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('filelist')
)
