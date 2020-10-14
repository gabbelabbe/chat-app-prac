import React, { useState, useRef } from 'react';
import FirebaseFunctions from '../FirebaseInit';

import ChatMessage from './ChatMessage';

import { useCollectionData } from 'react-firebase-hooks/firestore';

const {firebase, firestore, auth} = FirebaseFunctions;

export default function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(50);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='content'>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder='Write a message!' />
        <button type='submit' disabled={!formValue}>Send!</button>
      </form>
    </section>
  );
}