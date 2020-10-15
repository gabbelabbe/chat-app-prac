import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import FirebaseFunctions from '../FirebaseInit';
import { useLocation } from 'react-router-dom';

import SignOut from './SignOut';
import SignIn from './SignIn';

const {auth, firestore} = FirebaseFunctions;

export default function Header() {

  const [user] = useAuthState(auth);
  const location = useLocation();
  console.log(location.pathname.split('/')[location.pathname.split('/').length - 1])
  const roomDocRef = firestore.collection('rooms').doc(
    location.pathname.split('/')[location.pathname.split('/').length - 1] ? (
      location.pathname.split('/')[location.pathname.split('/').length - 1]
      ) : (
        'l2bZouNc6nrUKmE5Y9ie'
      )
    );
  const [room] = useDocumentData(roomDocRef);
  console.log(room)
  
  return (
    <header className='header'>
      {
        location.pathname.split('/')[location.pathname.split('/').length - 1] ? (
          <h2>{room && room.roomName}</h2>
        ) : (
          <h2>Chatter</h2>
        ) 
      }
      {user ? <SignOut /> : <SignIn />}
    </header>
  )
}