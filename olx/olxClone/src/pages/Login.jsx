import React, { useState, useContext } from 'react'
import './Login.css'
import LogoFile from '../../src/assets/olx-logo-0.webp'
import { collection, getDoc, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const { firestore, auth , updateProfile } = useContext(AppContext)
    let navigate = useNavigate()

    const HandleRequest = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                await updateProfile(result.user,{displayName:username})
                console.log(result);
                await addDoc(collection(firestore, 'Users'), {
                    id: result.user.uid,
                    name: username,
                    email: email,
                    password: password,
                    mobile: phone,
                }).then(() => {
                    navigate('/login');
                })
            })
            .catch((error) => {
                console.error('Error creating user:', error.message);
            });
    }

    return (
        <div className='Login_Page'>
            <div className='Login_Seperate'>
                <div>
                    <img src={LogoFile} alt="" />
                </div>
                <div>
                    <h3>SignUp</h3>
                </div>
            </div>
            <form style={{ display: "contents" }} onSubmit={HandleRequest}>
                <label htmlFor="">Name</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name='name' placeholder='Enter Name' autoComplete='name'/>
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Enter Email' autoComplete='email'/>
                <label htmlFor="">Phone Number</label>
                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} name='number' placeholder='Enter number' />
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Enter Paswword' />
                <button type='submit' className='sin_btn'>Signup</button>
            </form>
        </div>
    )
}

export default Login