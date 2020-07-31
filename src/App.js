import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton';
import Chat from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" /> 
            <ChatScreen></ChatScreen>
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chat></Chat>
          </Route>
          <Route path="/">
            <Header />
            <TinderCards></TinderCards>
            <SwipeButton></SwipeButton>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
