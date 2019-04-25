
import React, { Component } from 'react'
import { HashRouter, Router, Route, Link } from "react-router-dom"
//import logo from './logo.svg'

import classes from '../../src/'


class Home extends Component {
  render() {
    return (
      <div className="wrapper">
      <TopWrapper />
      <InputGroup />
      </div>
     
    )
   }
}

class TopWrapper extends React.Component {
    render() {
        return(

    <div className="container">

    
    <div className="jumbotron">
        <h1>IT Help Desk</h1>
        <p>Please Login to Access Your Tickets</p>
    </div>

  </div>

  

  
 


        )
    }
}

class InputGroup extends Component {
    render() {
      return(
        <form action="/api/login" method = "post">
        <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" placeholder="Username" name="username" id="username" required/>
        </div>
        <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="password" placeholder="Password" name="password" required/>
        </div>
          <button className="btn btn-success" id="login">Login</button>
      </form>

      )
    }


}

//const Home = () => <div><h2>Home</h2></div>
//const About = () => <div><h2>About</h2></div>

export default Home;
