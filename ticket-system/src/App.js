
import React, { Component } from 'react'
import { HashRouter, Route, Link } from "react-router-dom"
//import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div class="wrapper">
      <TopWrapper />
      <InputGroup />
      </div>
     
    )
   }
}

class TopWrapper extends React.Component {
    render() {
        return(

    <div class="card card-login mx-auto text-center bg-dark">

    <div class="card-header mx-auto bg-dark">
    </div>
    <div class="container">
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
        <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div>
            <input type="text" placeholder="Username" name="username" id="username" required/>
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-key"></i></span>
            </div>
            <input type="password" placeholder="Password" name="password" required/>
        </div>
          <button id="login">Login</button>
      </form>

      )
    }


}

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
