
import React, { Component } from 'react'
import axios from "axios";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { AutoComplete } from 'material-ui';



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
          <div>
          <MuiThemeProvider>
            <div>
            <AppBar
               title="IT HelpDesk"
             />
          
            </div>
           </MuiThemeProvider>
        </div>
      );
    }
  }
  const style = {
    margin: 15,
  };
  

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
    var data='';
    axios.post("/api/login",null,{params:{username:this.state.username, password:this.state.password}})
          .then((response) => 
              {
                  if(response.data.length < 1)
                    {
                      console.log("Incorrect Username or Password")
                      this.setState({login: false});
                      console.log(this.state.login);
                    }
                    else
                    {
                      this.setState({login:true});
                    }
              })
          .catch(err => console.warn(err));         
        
        console.log(data)
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
      if(this.state.login)
        {
          document.location.href = "./signup"; 
        }
      else
      {
        return(
            <form  onSubmit={this.handleSubmit}>
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
}


export default Home;

