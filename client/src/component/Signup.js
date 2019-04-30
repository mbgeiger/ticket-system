import React, {Component} from 'react';

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
            <div className="signup"><h2>Create an account</h2>
            
            <div className="form-inline" >
                
            <div className="form group">
                    <input className="form-control"
                    type="text"
                    placeholder="Username"
                    onChange={event => this.setState({username: event.target.value})}
                    />
                    <input
                        className="form-control"
                        type="Password"
                        placeholder="Password"
                        onChange={event => this.setState({password: event.target.value})}
                        />
                        <button
                            className="btn btn-dark"
                            type="button"
                            onClick={() => this.signUp()}
                            >
                            Sign up
                            </button>
                </div>
                </div>
                </div>

            
           

        )
    }
}

export default Signup