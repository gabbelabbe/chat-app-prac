import React from 'react';

import FirebaseFunctions from '../FirebaseInit';

const {firebase, auth} = FirebaseFunctions;

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle} className='signIn'>Sign in with Google</button>
  );
}
