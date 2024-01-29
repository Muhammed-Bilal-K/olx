import React, { useContext, useState } from 'react'
import './Create.css'
import { AppContext, AuthContext } from '../../Context/AppContext';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const { storage, firestore } = useContext(AppContext);
    const { user } = useContext(AuthContext)
    const date = new Date();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const imageRef = ref(storage, `/images/${image.name}`);
        await uploadBytes(imageRef, image);
        // Get the download URL of the uploaded image
        const imageUrl = await getDownloadURL(imageRef);
        
        await addDoc(collection(firestore, 'Products'), {
            name,
            category,
            price,
            imageUrl,
            userId: user.uid,
            createdAt: date.toDateString(),
        });

        navigate('/');
    };



    return (
        <div className='FirstDiv'>
            <form>
                <label htmlFor="fname">Name</label>
                <br />
                <input
                    className="input"
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    id="fname"
                    name="Name"
                />
                <br />
                <label htmlFor="fname">Category</label>
                <br />
                <input
                    className="input"
                    type="text"
                    id="fname"
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value)
                    }}
                    name="category"
                />
                <br />
                <label htmlFor="fname">Price</label>
                <br />
                <input className="input" value={price}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }} type="number" id="fname" name="Price" />
                <br />
                <br />
                <img alt="Posts" width="100px" height="100px" src={image ? URL.createObjectURL(image) : ''}></img>
                <br />
                <input onChange={(e) => {
                    setImage(e.target.files[0])
                }} type="file" />
                <br />
                <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
            </form>
        </div>
    )
}

export default Create