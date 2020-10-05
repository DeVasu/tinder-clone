import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Header';
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import ChatScreen from './ChatScreen';
import Chats from './Chats'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
//  /* Header 


// { /* Tinder Cards */}
// { /* Buttons below tinder cards */ }

// { /* Chats screen */ }
// { /* Individual chat screen */ }