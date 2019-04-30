import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Tickets from './component/Tickets';
//import { Switch } from 'react-router/esm/react-router';
import Signup from './component/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        
        <Switch>

        <Route  exact path={"/Home"} component={Home} />
        <Route  exact path={"/tickets"} component={Tickets} />
        <Route  exact path={"/Signup"} component={Signup} />
        <Route  exact path={"/"} component={Home} />
        </Switch>
        

        
      </Router>

      );
    }


}



export default App;
