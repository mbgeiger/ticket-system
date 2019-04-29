import React, {Component} from 'react';

class Signup extends Component {
    render() {
        return (
            <div className="form-inline" >
                <h2>Sign Up</h2>
                <div className="form group">
                    <input className="form-control"
                    type="text"
                    placeholder="Username"
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        />
                        <button
                            className="btn btn-light"
                            type="button"
                            >
                            Sign up
                            </button>
                </div>
                </div>

            
           

        )
    }
}

export default Signup