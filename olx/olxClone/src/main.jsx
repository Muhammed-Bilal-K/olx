import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { AppContext } from './Context/AppContext.jsx'
import Context from './Context/AppContext.jsx'
import { firestore, auth, updateProfile, onAuthStateChanged ,signOut , storage } from './firebase/Config.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext.Provider value={{ firestore: firestore, auth: auth, updateProfile: updateProfile, onAuthStateChanged:onAuthStateChanged, signOut :signOut , storage:storage}}>
      <Context>
        <Router>
          <App />
        </Router>
      </Context>
    </AppContext.Provider>
  </React.StrictMode>,
)
