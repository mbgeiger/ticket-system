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
            <div className="form-inline" >
                <h2>Sign Up</h2>
                
                <div className="form group">
                    <input className="form-control"
                    type="text"
                    placeholder="Username"
                    onChange={event => this.setState({username: event.target.value})}
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={event => this.setState({password: event.target.value})}
                        />
                        <button
                            className="btn btn-light"
                            type="button"
                            onClick={() => this.signUp()}
                            >
                            Sign up
                            </button>
                </div>
                </div>

            
           

        )
    }
}

export default Signup