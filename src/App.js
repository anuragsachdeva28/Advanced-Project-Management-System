import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import SignIn from './components/SignIn/SignIn';
import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Route path="/" component={Sidebar} />
          <Route path="/Clients" component={Main} />
          
          <Route path="/sign-in" component={SignIn} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
