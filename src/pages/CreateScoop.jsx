import React, { createContext, useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateScoop.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyAB2NVdIl_MI0stp_tnxY9hjGpPJChSvCo",
    authDomain: "phachat-b7597.firebaseapp.com",
    projectId: "phachat-b7597",
    storageBucket: "phachat-b7597.appspot.com",
    messagingSenderId: "47230423181",
    appId: "1:47230423181:web:a3b41a888cf859093a12c4"
  })
  

const firestore = firebase.firestore();

let privateTitle = '/private';

const CreateScoop = () => {
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState('');
    const [title, setTitle] = useState("");
    const sendTitle = async(e) => {
        e.preventDefault();
        const newChatRef = firestore.collection(formValue);
        await newChatRef.add({
            text: "collectionInitialized",
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        
        setFormValue('');
        navigate(privateTitle);
    }
    
    return (
        <div>
            <h1 className='create'>Create Private Chat</h1>
            <div className='addCollection'>
            <form onSubmit={sendTitle}>
                <input value={formValue} onChange={(e) => {setFormValue(e.target.value); changeTitle(e.target.value)}}/>
                <button type="submit">Send</button>
            </form>
            
            </div>
        </div>
    );
};
function changeTitle(newTitle){
    // privateTitle = newTitle;
    // return privateTitle
}
//privateTitle = title;
export default CreateScoop;
export const Scoop = privateTitle;
console.log(Scoop);
