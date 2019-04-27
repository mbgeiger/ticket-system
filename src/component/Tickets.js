import React, { Component } from 'react'
import { HashRouter, Router, Route, Link } from "react-router-dom"
import '../App.css'
import API from "../utils/API";

class Tickets extends Component {
  render() {
    return (
      <div classNameName="wrapper">
      <Nav />
      <Modal />
      <TicketDisplay />
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

class TicketDisplay extends React.Component{
    state = {
        Tickets: [],
        id: "",
        Title: "",
        Status: "",
        Assigned_To: "",
        Description: "",
        Closed: Boolean,
        Notes: "",
        Created_By: ""
    };


   componentDidMount() {
        this.loadTickets();
    }

    loadTickets = () => {
        API.getTickets()
            .then(res =>
                this.setState({Tickets: res.data, Title: "", id: "", Status: "", Assigned_To: "", Description: "", Closed: "false", Notes: "", Created_By: ""})
                )
                .catch(err => console.log(err));
    };

    render(){
        return(
            <div className="container" id="userTickets">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default ticket-list">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">All Tickets</h3>
                            </div>
                            {this.state.Tickets.length ? (
                                <div className="panel-body ">
                                    <table className="table">
                                        <thead className='table-head'>
                                            <tr className='table-head'>
                                                <th>Ticket Number</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>                                      
                                        {this.state.Tickets.map(ticket => (
                                            <tbody id="userTicketsAppend">
                                                <tr className="table-row">
                                                    <td>{ticket.id}</td>
                                                    <td>{ticket.Description}</td>
                                                    <td>{ticket.Status}</td>
                                                    <td><button className="btn btn-warning">Details</button></td>
                                                </tr>
                                            </tbody>
                                                 ))}
                                    </table>
                                </div>
                                    ) : (
                                        <h3>No results to Display</h3>
                                    )}               
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tickets;
