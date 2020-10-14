import React from 'react';
import FirebaseFunctions from '../FirebaseInit';

const {auth} = FirebaseFunctions;

export default function SignOut() {
  return auth.currentUser &&
    <button onClick={() => auth.signOut()} className='signOut'>Sign Out</button>
}
