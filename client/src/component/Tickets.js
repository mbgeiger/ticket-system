import React, { Component } from 'react'
import { Button, ButtonToolbar, Modal} from 'react-bootstrap';
import {Link} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import '../App.css'
import API from "../utils/API";

class Tickets extends Component {
  render() {
    return (
      <div className="wrapper">
      <MuiThemeProvider>
            <div>
            <AppBar
               title="Tickets"
             />
          
            </div>
           </MuiThemeProvider>
        <Nav />
        <Ticketmodal />
        <TicketDisplay />
      </div>
    )
   }
}

class Nav extends React.Component {
    constructor(...args) {
        super(...args);
    
        this.state = { modalShow: false };
      }
    render() {
            let modalClose = () => this.setState({ modalShow: false });
  
      return (
         
        <ButtonToolbar>
          <Button className="btn btn-dark"
            variant="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            Create Ticket
          </Button>
  
          <Ticketmodal
            show={this.state.modalShow}
            onHide={modalClose}
          />

        </ButtonToolbar>     

        );
    }
}

class Ticketmodal extends React.Component {
    state={
        title: "other",
        description: "",
        status: "open"
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value =event.target.value;
        this.setState({
            [name]: value    
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("called");
        console.log(this.state.title);
        console.log(this.state.description);
        if(this.state.title && this.state.description){
            API.createTicket({
                title: this.state.title,
                description: this.state.description,
                status: "open"
            })
            //.then(this.props.onHide)   
            .catch(err => console.log(err))
            .then(window.location.reload());
        }
        
    };

    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Request Type
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="dropdown">
                        <label htmlFor="request-type">Request Type</label>
                        <select className="form-control" id="request-type" value={this.state.title} onChange={this.handleInputChange} name="title">
                            <option name="title" value="log in">Log In</option>
                            <option name="title" value="facilities">Facilities</option>
                            <option name="title" value="software">Software</option>
                            <option name="title" value="hardware">Hardware</option>
                            <option name="title" value="security">Security</option>
                            <option name="title" value="other">Other</option>
                        </select>
                    </div>
                    <div className="md-form">
                        <i className="fas fa-pencil prefix grey-text"></i>
                        <textarea type="text" id="problem-description" className="md-textarea form-control" rows="4" value={this.state.description} name="description" onChange={this.handleInputChange}></textarea>
                        <label data-error="wrong" data-success="right" htmlFor="form8">Description</label>
                    </div>
                   
          </Modal.Body>
          <Modal.Footer>
            <Button id='submit' className="btn btn-dark"  onClick= {this.handleFormSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

class TicketDisplay extends React.Component{
    state = {
        tickets: []
    };

   componentDidMount() {
        this.loadTickets();
    }

    loadTickets = () => {
        API.getTickets()
            .then(res =>

                {this.setState({tickets: res.data}) 
                console.log(this.state.tickets)    
            }
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
                            {this.state.tickets.length ? (
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
                                        {this.state.tickets.map(ticket => (
                                            <tbody id="userTicketsAppend">
                                                <tr className="table-row">
                                                    <td>{ticket._id}</td>
                                                    <td>{ticket.description}</td>
                                                    <td>{ticket.status}</td>
                                                    <td>
                                                        <Link to={"/ticket/"+ticket._id}>
                                                        <button className="btn btn-warning" key={ticket._id} value={ticket._id}>Details</button>
                                                        </Link>
                                                    </td>
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