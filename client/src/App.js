import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Tickets from './component/Tickets';
import Signup from './component/Signup';
import Detail from "./component/Details";

class App extends Component {
  render() {
    return (
      <Router>
        
        <Switch>
          <Route exact path={"/Home"} component={Home} />
          <Route exact path={"/tickets"} component={Tickets} />
          <Route exact path={"/Signup"} component={Signup} />
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/ticket/:id"} component={Detail} />
        </Switch>
        

        
      </Router>

      );
    }


}



export default App;
