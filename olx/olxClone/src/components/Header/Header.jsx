import React, { useContext } from 'react'
import './Header.css'
import logoOlx from '../../assets/olx-logo-0.webp'
import { AppContext, AuthContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'

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
                    <span>{user ? `Welcome ${user.displayName}` : 'Login'}</span>
                    {user && <span onClick={HandleLogoOut}>LogOut</span>}
                    <hr />
                </div>
                <div>
                    <p>SELL +</p>
                </div>
            </div>
        </div>
    )
}

export default Header