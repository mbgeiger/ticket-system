
import React, { Component } from 'react'
import { HashRouter, Router, Route, Link } from "react-router-dom"
//import logo from './logo.svg'
import '../App.css'

class Tickets extends Component {
  render() {
    return (
      <div className="wrapper">
      <Nav/>
      
      </div>
     
    )
   }
}

class Nav extends React.Component {
    render() {
        return(

    
            <div class="navbar navbar-expand navbar-light bg-light justify-content-between">
            <button type="button" class="btn btn-lg btn-success" data-toggle="modal" data-target="#ticketModal"><span class="fas fa-plus" id="createTicket"></span> Create Ticket
             </button>
             </div>
       

       
        )
    }
}



//const Home = () => <div><h2>Home</h2></div>
//const About = () => <div><h2>About</h2></div>

export default Tickets;
