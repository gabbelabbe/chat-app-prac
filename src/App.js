import React from 'react';
import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import FirebaseFunctions from './FirebaseInit';

import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';

const {auth} = FirebaseFunctions;

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="app">
      <header className='header'>
        {user ? <SignOut /> : <SignIn />}
      </header>

      {user ? <ChatRoom /> : null}
    </div>
  );
}

export default App;
