import React, { useContext, useEffect, useState } from 'react'
import './Product.css'
import { AppContext } from '../../Context/AppContext'
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { PostContext } from '../../Context/PostContext';
import { useNavigate } from 'react-router-dom';

function Product() {
    const navigate = useNavigate();
    const { firestore } = useContext(AppContext);
    const [product, setProducts] = useState([]);
    const { setPostDetails } = useContext(PostContext);

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(firestore, 'Products'));
            const allProducts = querySnapshot.docs.map((product) => ({
                ...product.data(),
                id: product.id,
            }));
            setProducts(allProducts);
        };
        fetchProducts();
    }, []);


    return (
        <div className='Product_list'>
            <div className="container">
                <h3>
                    Latest Product List
                </h3>
                <div class="row">
                    {
                        product.map((value) => (
                            <div class="col-md-4 mt-5">
                                <div className="card" onClick={() => {
                                    setPostDetails(value)
                                    navigate('/view')
                                }}>
                                    <img src={value.imageUrl} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        {/* <h5 className="card-title">Royal Enfield</h5> */}
                                        <h5 className="card-title">{value.name}</h5>
                                        <p className="card-text">Price : {value.price}</p>
                                        <div className='Price_data'>
                                            <div className='Price_Sub_Place'>
                                                <div>
                                                    <h6>23km</h6>
                                                </div>
                                                <div>
                                                    {/* <h6>Kerala</h6> */}
                                                    <h6>{value.category}</h6>
                                                </div>
                                                <div>
                                                    {/* <h6>Kerala</h6> */}
                                                    <h6>{value.createdAt}</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                                                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Product