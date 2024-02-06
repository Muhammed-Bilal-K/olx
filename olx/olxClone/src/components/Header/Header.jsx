import React, { useContext } from 'react'
import './Header.css'
import logoOlx from '../../assets/olx-logo-0.webp'
import { AppContext, AuthContext } from '../../Context/AppContext'
import { useNavigate, Link } from 'react-router-dom'

function Header() {
    const { user } = useContext(AuthContext)
    const { auth, signOut } = useContext(AppContext)
    const navigate = useNavigate()

    const HandleLogoOut = () => {
        signOut(auth);
        navigate('/login')
    }

    return (
        <div className='HeaderFirst'>
            <div className='Sub-header'>
                <img src={logoOlx} alt="OlxLogo" />
            </div>
            <div className='Sub-navbar'>
                <div className='login'>
                    <span style={{marginRight: "15px"}}>{user ? `Welcome ${user.displayName}` : <Link className='loginColor' to='/login'> Login </Link>}</span>
                    {user && <span onClick={HandleLogoOut}>LogOut</span>}
                    <hr />
                </div>
                <div>
                    <p>{user ? <Link className='sellColor' to='/create'>SELL +</Link>: ''}</p>
                </div>
            </div>
        </div>
    )
}

export default Header