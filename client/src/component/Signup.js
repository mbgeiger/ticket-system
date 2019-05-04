
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    signUp() {
        console.log('this.state', this.state);

        
    }

  
    
    render() {
        return (
            <div>
            <MuiThemeProvider>
              <div>
              <AppBar
                 title="Register a New User"
               />
               <Registeruser />
              
              </div>
             </MuiThemeProvider>
          </div>
        );
      }
    }
    const style = {
      margin: 15,
    };


    class Registeruser extends Component {
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

                    <button className="btn btn-dark" id="Signup">Sign Up</button>
                </form>
      
              )
            }
          }
      
          
      
      
      }
      
    

export default Signup