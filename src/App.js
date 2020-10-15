import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import FirebaseFunctions from './FirebaseInit';

import Header from './components/Header';
import ChatRoom from './components/ChatRoom';
import Landing from './components/Landing';

const {auth} = FirebaseFunctions;

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            {user ? <Landing /> : null}
          </Route>
          <Route path='/rooms/:id' component={user ? ChatRoom : null} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
