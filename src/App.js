import React, { Component } from 'react';
import { HashRouter, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Tickets from './component/Tickets';
import { Switch } from 'react-router/esm/react-router';

class App extends Component {
  render() {
    return (
      <Router>
        
        <Switch>

        <Route  path={"/Home"} component={Home} />
        <Route  path={"/Tickets"} component={Tickets} />


        <Route  path={"/"} component={Home} />
        </Switch>
        

        
      </Router>

      );
    }


}

//const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
