import React, { Component } from 'react'
import { Button, ButtonToolbar, Modal} from 'react-bootstrap';

import '../App.css'
import API from "../utils/API";

class Tickets extends Component {
  render() {
    return (
      <div classNameName="wrapper">
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
                   
          </Modal.Body>
          <Modal.Footer>
            <Button id='submit' onClick={this.props.onHide}>Submit</Button>
          </Modal.Footer>
        </Modal>
      );
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