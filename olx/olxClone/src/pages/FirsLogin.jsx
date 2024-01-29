import React, { useState, useContext } from 'react'
import './FirsLogin.css'
import LogoFile from '../../src/assets/olx-logo-0.webp'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

function FirsLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { auth } = useContext(AppContext);
    let navigate = useNavigate();

    const HandleRequest = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/');
        })
    }

    return (
        <div className='Login_Page'>
            <div className='Login_Seperate'>
                <div>
                    <img src={LogoFile} alt="" />
                </div>
                <div>
                    <h3>SignIn</h3>
                </div>
            </div>
            <form style={{ display: "contents" }} onSubmit={HandleRequest}>
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Enter Email' autoComplete='email' />
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Enter Paswword' />
                <button type='submit' className='sin_btn'>SignIn</button>
            </form>
        </div>
    )
}

export default FirsLogin