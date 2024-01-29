import React, { useContext, useState, useEffect } from 'react'
import car from '../../assets/car.jpg'
import './Pview.css'
import { PostContext } from '../../Context/PostContext';
import { AppContext } from '../../Context/AppContext';
import { collection, getDocs, query, where } from 'firebase/firestore';

function Pview() {
    const [userDetails, setUserDetails] = useState()
    const { postDetails } = useContext(PostContext);
    const { firestore } = useContext(AppContext);
    const { userId } = postDetails;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userQuery = query(collection(firestore, "Users"), where("id", "==", userId));

                const querySnapshot = await getDocs(userQuery);
                const userData = querySnapshot.docs.map((doc) => doc.data())[0];
                setUserDetails(userData)
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchData();
    }, [postDetails]);




    return (
        <div className="viewParentDiv">
            <div className="imageShowDiv">
                <img
                    src={postDetails ? postDetails.imageUrl : ""}
                    alt=""
                />
            </div>
            <div className="rightSection">
                <div className="productDetails">
                    <p>&#x20B9; {postDetails ? postDetails.price : ""}</p>
                    <span>{postDetails ? postDetails.name : ""}</span>
                    <p>{postDetails ? postDetails.category : ""}</p>
                    <span>{postDetails ? postDetails.createdAt : ""}</span>
                </div>
                <div className="contactDetails">
                    <p>Seller details</p>
                    <p>{userDetails ? userDetails.name : ''}</p>
                    <p>{userDetails ? userDetails.mobile : ''}</p>
                </div>
            </div>
        </div>
    )
}

export default Pview