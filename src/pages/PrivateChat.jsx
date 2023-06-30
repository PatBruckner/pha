import React, { useState } from 'react';
import './MainPage.css';
import { Scoop } from './CreateScoop.jsx';

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
const PrivateChat = () => {
    return (
        <div>
            <section>
            <PrivateChatRoom />
            </section>
        </div>
    );
};
function PrivateChatRoom() {

    const messagesRef = firestore.collection(Scoop);
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
                <h1 className='chat'>Private Chat</h1>
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
export default PrivateChat;