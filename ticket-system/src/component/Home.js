
import React, { Component } from 'react'
import { HashRouter, Router, Route, Link } from "react-router-dom"
import { Button, Nav, NavDropdown, NavItem, Navbar, Form, ButtonToolbar, ButtonGroup} from 'react-bootstrap';

//import logo from './logo.svg'

import  '../../src/App.css'




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

    <div className="card card-login mx-auto text-center bg-dark">

    <div className="card-header mx-auto bg-dark">
    </div>
    <div className="container">
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

     

        <Form action="/api/login" method = "post">
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
          <Button bsStyle='Primary' id="login">Login</Button>

         
      </Form>


      )
      

    }


}



export default Home;
