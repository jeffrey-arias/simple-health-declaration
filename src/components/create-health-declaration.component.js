import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class CreateHealthDeclaration extends Component {
    
    constructor(props) {
        super(props);
        this.state ={
            name : "",
            surname : "",
            birthday : "",
            email : "",
            phone : "",
            city : "",
            attestation : ""
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange (e){
        this.setState ( {
            [e.target.dataset.name] : e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const healthDeclaration = {
            name : this.state.name,
            surname : this.state.surname,
            birthday : this.state.birthday,
            email : this.state.email,
            phone : this.state.phone,
            temperature: this.state.temperature,
            city : this.state.city,
            attestation : this.state.attestation
        }
        console.log(healthDeclaration);
        axios.post('http://localhost:5000/simpleHealthDeclaration/add', healthDeclaration)
            .then(response => console.log(response.data))
            .catch(error => console.log("An error has been encountered: "+error));
    }

    render () {
        return (
            <div className='container'>
                <h2>Please answer the following questions truthfully:</h2>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" className="form-control" data-name="name" required onChange={this.onValueChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Surname: </label>
                        <input type="text" className="form-control" data-name="surname" required onChange={this.onValueChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Birthday: </label>
                        <input type="date" className="form-control" data-name="birthday" required onChange={this.onValueChange}></input>
                    </div>
                    <div className="form-group">
                        <label>City: </label>
                        <input type="text" className="form-control" data-name="city" required onChange={this.onValueChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        <input type="tel" className="form-control" data-name="phone" required onChange={this.onValueChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email" className="form-control" data-name="email" required onChange={this.onValueChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Temperature: </label>
                        <input type="number" className="form-control" data-name="temperature" step=".1"required onChange={this.onValueChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Do you feel any of the following symptoms?</label><br/>
                        <input type="radio" data-name="attestation" value="True" onChange={this.onValueChange}/>
                        <label>Yes</label>
                        <input type="radio" data-name="attestation" value="False" onChange={this.onValueChange}/>
                        <label>No</label>
                    </div>
                <button type="submit" className="btn btn-primary">Submit</button>
 
                </form>
            </div>
        );
    }
}