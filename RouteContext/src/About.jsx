import React , { useContext } from 'react'
import { Route, Link, Routes , useNavigate  } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import { AppContext } from './Appcontext'

function About() {
  let navigate = useNavigate()
  const { data } = useContext(AppContext)
  return (
    <>
      <h1>name : {data}</h1>

        <Link to='/'> Home</Link>
        <Link to='/contact'> Contact</Link>
        {/* <Link to='/about'> About</Link> */}
        <button onClick={()=>{navigate('/')}}>home</button>
      <div>
      <h1>g</h1>
        <Routes>
          <Route Component={Home} path='/' />
          <Route Component={About} path='/about' />
          <Route Component={Contact} path='/contact' />
        </Routes>
      </div>
    </>
  )
}

export default About