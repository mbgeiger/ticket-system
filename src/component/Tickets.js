
import React, { Component } from 'react'
import { HashRouter, Router, Route, Link } from "react-router-dom"
//import logo from './logo.svg'
import '../App.css'

class Tickets extends Component {
  render() {
    return (
      <div classNameName="wrapper">
      <Nav />
      <Modal />
      
      </div>
     
    )
   }
}

class Nav extends React.Component {
    render() {
        return(

    
            <div classNameName="navbar navbar-expand navbar-light bg-light justify-content-between">
            <button type="button" classNameName="btn btn-lg btn-success" data-toggle="modal" data-target="#ticketModal"><span className="fas fa-plus" id="createTicket"></span> Create Ticket
             </button>
             </div>
       

       
        )
    }
}

class Modal extends React.Component {
  render() {
      return(

  
         
        <div id="ticketModal" className="modal fade" role="dialog">
        <div classNameName="modal-dialog">
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">What Can We Help You With?</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
                </div>
                <div className="modal-body mx-3">
                    <div className="dropdown">
                        <label for="request-type">Request Type</label>
                        <select className="form-control" id="request-type">
                            <option value="log in">Log In</option>
                            <option value="facilities">Facilities</option>
                            <option value="software">Software</option>
                            <option value="hardware">Hardware</option>
                            <option value="security">Security</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="md-form">
                        <i className="fas fa-pencil prefix grey-text"></i>
                        <textarea type="text" id="problem-description" className="md-textarea form-control" rows="4"></textarea>
                        <label data-error="wrong" data-success="right" for="form8">Description</label>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button className="btn btn-unique" id="submit" data-dismiss="modal">Send <i className="fas fa-paper-plane-o ml-1"></i></button>
                    </div>
                </div>
            </div>
        </div>




    </div>
     

     
      )
  }
}





//const Home = () => <div><h2>Home</h2></div>
//const About = () => <div><h2>About</h2></div>

export default Tickets;
