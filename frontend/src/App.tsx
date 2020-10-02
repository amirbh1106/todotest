import React from 'react';
import './App.css';
import {Loginpage} from './components /login'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
       <Route exact path="/">
            <Loginpage />
        </Route>
        <Route exact path="/hay">
            <h1>hay</h1>
            <p>you need to start from the beginning</p>
            <Link to="/">to the beginning</Link>
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
