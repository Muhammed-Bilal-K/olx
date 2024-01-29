import React, { useState } from 'react'
import { Route, Link, Routes , useNavigate  } from 'react-router-dom';

import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { AppContext } from './Appcontext'

function App() {
  const [first, setfirst] = useState('10');
  let navigate = useNavigate()
  return (
    <div>
        <Link to='/'> Home</Link>
        <Link to='/contact'> Contact</Link>
        {/* <Link to='/about'> About</Link> */}
        <button onClick={()=>{navigate('/about')}}>about</button>
      <div>
      <h1>g</h1>
      <AppContext.Provider value={{data:first}}>
        <Routes>
          <Route Component={Home} path='/' />
          <Route Component={About} path='/about' />
          <Route path='/contact' element={<Contact />}/>
          {/* <Route path='/contact' element={<Contact value={first} />}/> */}
        </Routes>
      </AppContext.Provider>
      </div>
    </div>
  )
}

export default App
