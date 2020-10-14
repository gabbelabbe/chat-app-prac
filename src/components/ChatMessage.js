import React from 'react';
import FirebaseFunctions from '../FirebaseInit';
import '../App.css';

const {auth} = FirebaseFunctions;

export default function ChatMessage({ message }) {
  const {text, uid, photoURL} = message;

  const cssClass = auth.currentUser.uid === uid ? 'messageSent' : 'messageRecived'

  return (
    <div className={cssClass}>
      <img src={photoURL || 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'} alt='cool profile img' />
      <p>{text}</p>
    </div>
  )
}