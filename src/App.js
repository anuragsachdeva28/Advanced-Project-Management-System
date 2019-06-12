import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import SignIn from './components/SignIn/SignIn'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Route path="/" exact component={Sidebar} />
          <Route path="/" exact component={Main} />
          
          <Route path="/sign-in" component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
