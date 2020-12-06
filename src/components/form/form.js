import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { User } from '../../model/user';
import './form.css';
import { LoginService } from '../../service/login.service';
export class Form extends React.Component {

    error = {};

    constructor(props) {
        super(props);
        this.state = new User();
        console.log(this.state);

        LoginService.loginByEmailPassword('solvar@msn.com', 'totototo').then((g) => console.log(g));
        LoginService.agoraLogin('solvar@msn.com', 'dah6d72').then((g) => console.log(g));
    }

    isSubmit = false;

    handleChange = (field, event) => {
        console.log('change', event)
        if (this.isSubmit) {
            this.checkField();
        }

        this.setState(Object.assign(this.state, { [field]: event }));
    }

    submitForm = (event) => {
        event.preventDefault();
        this.isSubmit = true;
        this.checkField();

        console.log(this.state);
        console.log(this.error);
        
    }

    checkField = () => {
        this.error = {};
        if (!this.state.firstname) {
            this.error['firstname'] = true;
        }
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className="form-container">
                    <div>
                        <label>Firstname</label>
                        <input className={this.error['firstname'] ? 'invalid' : ''} onChange={(event) => { this.handleChange('firstname', event.target.value) }} type="text" />
                    </div>

                    <div>
                        <label>Lastname</label>
                        <input onChange={(event) => { this.handleChange('lastname', event.target.value) }} type="text" />
                    </div>

                    <div>
                        <label>Age</label>
                        <input type="number" onChange={(event) => { this.handleChange('age', event.target.value) }} />
                    </div>

                    <div>
                        <label>Area</label>
                        <select value={this.state.area} onChange={(event) => { this.handleChange('area', event.target.value) }}>
                            <option value="Lille">Lille</option>
                            <option value="Lyon">Lyon</option>
                            <option value="Paris">Paris</option>
                            <option value="Marseille">Marseille</option>
                        </select>
                    </div>

                    <div>
                        <label>Gender</label>
                        Male <input checked={this.state.gender === "M"} onChange={(event) => { this.handleChange('gender', event.target.value) }} type="radio" name="gender" value="M" />
                        Female <input checked={this.state.gender === "F"} onChange={(event) => { this.handleChange('gender', event.target.value) }} type="radio" name="gender" value="F" />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;