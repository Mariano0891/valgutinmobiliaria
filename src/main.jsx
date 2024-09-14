import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RealStateApp } from './RealStateApp'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_apiKey,
  authDomain: import.meta.env.VITE_APP_authDomain,
  projectId: import.meta.env.VITE_APP_projectId,
  storageBucket: import.meta.env.VITE_APP_storageBucket,
  messagingSenderId: import.meta.env.VITE_APP_messagingSenderId,
  appId: import.meta.env.VITE_APP_appId
}

const app = initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <RealStateApp />
    </React.StrictMode>
  </BrowserRouter>
)
