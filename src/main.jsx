import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RealStateApp } from './RealStateApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <RealStateApp />
    </React.StrictMode>
  </BrowserRouter>
)
