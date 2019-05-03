
import React, { Component } from 'react'
import { HashRouter, BrowserRouter, Router, Route, Link, Redirect } from "react-router-dom"
//import logo from './logo.svg'
import API from "../utils/API";
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
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      login:''
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    console.log(this.state.username +" "+ this.state.password);
    console.log("called");
        API.getLogin()
            .then(res =>
                console.log(res.data)
                //this.setState({tickets: res.data})
                )
                .catch(err => console.log(err));
                
        this.setState({login:true});
    
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }
    render() {
      return(
        <form onSubmit={this.handleSubmit}>
        <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" data-test="username" placeholder="Username" value={this.state.username} onChange={this.handleUserChange} required />
        </div>
        <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="password" data-test="password" placeholder="Password" value={this.state.password} onChange={this.handlePassChange} required />
        </div>
          <button className="btn btn-dark" id="login">Login</button>
          <button className="btn btn-dark" id="Createaccount"  onClick={() => { document.location.href = "./Signup"; }}>Create Account</button>  
      </form>

      

      )
    }

    


}


export default Home;

