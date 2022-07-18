import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './views/Home/Home.view'
import store from '../reducers/store'
import { Provider } from 'react-redux'
import './global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>
)
