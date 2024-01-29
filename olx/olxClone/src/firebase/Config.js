import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, updateProfile, onAuthStateChanged, signOut } from 'firebase/auth';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAW7Tdn3E0KMQewjDfcsbJOIWhIg83ugeY",
    authDomain: "fireconnection-b32d5.firebaseapp.com",
    projectId: "fireconnection-b32d5",
    storageBucket: "fireconnection-b32d5.appspot.com",
    messagingSenderId: "5983462102",
    appId: "1:5983462102:web:0ceb40d719931778db5f77",
    measurementId: "G-FKPBF0RS0Z"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();

export { firestore, auth, updateProfile, onAuthStateChanged, signOut , storage};
