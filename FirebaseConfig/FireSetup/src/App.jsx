import React from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc , updateDoc} from 'firebase/firestore';
import { firestore } from './firebase/Config';

const App = () => {
  const fetchData = async () => {
    const snapshot = await getDocs(collection(firestore, 'Products'));
    snapshot.forEach((doc) => {
      // const data = { id: doc.id, ...doc.data() };
      console.log(doc.data());
    });
  };

  const addData = async () => {
    const docRef = await addDoc(collection(firestore, 'Products'), {
      name: 'Vivo',
      Price: '4000',
      type: 'mobile'
    })
    console.log(docRef);
  }

  const deleteData = async () => {
    const id = 'iMDEQCZbjZ68pDwPPbN8';
    const docRef = await deleteDoc(doc(firestore, 'Products', id));
    console.log(docRef);
  }

  const UpdateData = async () => {
    const id = 'zLPTks3X5ErdOKDaDosv';
    const docRef = await updateDoc(doc(firestore, 'Products', id),{
      name:'newApple',
    });
    console.log(docRef);
  }

  return (
    <div>
      <h1>Your Vite React App with Firebase Firestore</h1>
      <h2>Firestore Data:</h2>
      <button onClick={fetchData}>Load Data</button>
      <button onClick={addData}>Add Data</button>
      <button onClick={UpdateData}>Update Data</button>
      <button onClick={deleteData}>Delete Data</button>
    </div>
  );
};

export default App;
