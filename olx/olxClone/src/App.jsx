import React, { useState, useEffect, useContext } from 'react'
import './App.css'
import SignUp from './pages/login';
import Login from './pages/FirsLogin';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import { AppContext, AuthContext } from './Context/AppContext';
import Create from './components/Create/Create';
import Pview from './components/Views/Pview';
import Post from './Context/PostContext';

function App() {
  const { setUser } = useContext(AuthContext)
  const { auth, onAuthStateChanged } = useContext(AppContext)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        console.log("User is signed out");
      }
    });
  })

  return (
    <>
    <Post>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp pass={value} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />} />
        <Route path='/view' element={<Pview />} />
      </Routes>
    </Post>
    </>
  )
}

export default App
