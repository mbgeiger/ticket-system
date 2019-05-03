import React, {Component} from "react";
import API from "../utils/API";

class UpdateTicket extends Component {
    state = {
        tickets: [],
        title: "",
        notes: "",
        status: ""
    };

    componentDidMount(){
        this.loadTicket();
    }

    loadTicket = () => {
        API.findOneTicket(this.props.match.params.id)
            .then(res =>
                this.setState({ tickets: res.data }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("called");
        console.log(this.state.notes);
        console.log(this.state.status);
        API.updateOne({
            title: this.state.title,
            notes: this.state.notes,
            status: this.state.status
        })  
            .catch(err => console.log(err))
            //.then(window.location.reload());
    };

    render() {
        return (
            <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" placeholder={this.state.tickets.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" rows="3" placeholder={this.state.tickets.description}></textarea>
                </div>  
                <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea className="form-control" name="notes" value={this.state.notes} onChange={this.handleInputChange} rows="3" placeholder={this.state.tickets.notes}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select className="form-control" name="status" value={this.state.status} onChange={this.handleInputChange}>
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                        <option value="waiting for outside repair">Waiting for outside repair</option>
                        <option value="waiting for parts">Waiting for parts</option>
                        <option value="waiting for more information">Waiting for more information</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Update</button>
            </form>
            </div>
        );

    }
}

export default UpdateTicket;