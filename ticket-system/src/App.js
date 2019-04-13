
import React, { Component } from 'react';
import { HashRouter, BrowserRouter as Router, Route, Link } from "react-router-dom";

//import logo from './logo.svg';
import './App.css';

import Home from "./component/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path={"Home"} component={Home}/>
        <Route path={"/"} component={Home}/>

        
      </Router>

      );
    }


}

//const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
