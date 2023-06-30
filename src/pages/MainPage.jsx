import React, { useState } from 'react';
import './MainPage.css';

//import {firebase, firestore, auth, signInWithGoogle, messagesRef, q } from "../firebase"; 
//import {collection} from "@firebase/firestore"
//import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
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

const auth = firebase.auth();
const firestore = firebase.firestore();
const  MainPage = () => {
    const [user] = useAuthState(auth);

    return ( 
        <div>
            <section>
            {user ? <ChatRoom /> : <SignIn />}
            </section>
        </div>
    );

};
function SignIn() {
  
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
    
      return (
        <>
          <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
          
        </>
      )
  
 }
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }
  
  
function ChatRoom() {

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) => {

        e.preventDefault();

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),

        })
        
        setFormValue('');
    }

    return (
        <>
            <div>
                <h1 className='chat'>Global Chat</h1>
                <div><SignOut/></div>
                <div className='messages'>
                
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                </div>
            </div>
            <div className='sub'>
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
            
            </div>
        </>
    )

}
function ChatMessage(props){
    const {text, uid} = props.message;

    return (
    <div className='msg'>
        {text}
    </div>
    )
}
export default MainPage;