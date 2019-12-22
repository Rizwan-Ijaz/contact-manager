import React, {Component} from "react";
import {Consumer} from '../../Context';
import uuid from 'uuid';
import {TextInputGroup} from "../layout/TextInputGroup";
import axios from 'axios';

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };

    async componentDidMount() {
        debugger;
        const {id} = this.props.match.params;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = response.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }

    inputChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmitHandler = async (dispatch, e) => {
        e.preventDefault();

        const {name, email, phone} = this.state;

        const updateContact = {name, email, phone};

        const {id} = this.props.match.params;

        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);

        dispatch({type: 'UPDATE_CONTACT', payload: response.data});

        this.setState({
            name: '',
            email: '',
            phone: ''
        });

        this.props.history.push('/');
    };

    render() {
        const {name, email, phone} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;

                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                Edit Contact
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmitHandler.bind(this, dispatch)}>
                                    <TextInputGroup lable={'Name'} name={'name'} placeholder={'Enter Name'}
                                                    value={name} changeHandler={this.inputChangeHandler}/>

                                    <TextInputGroup lable={'Email'} type={'email'} name={'email'}
                                                    placeholder={'Enter Email'}
                                                    value={email} changeHandler={this.inputChangeHandler}/>


                                    <TextInputGroup lable={'Phone'} name={'phone'} placeholder={'Enter Phone'}
                                                    value={phone} changeHandler={this.inputChangeHandler}/>

                                    <button type="submit" className="btn btn-primary btn-block">Update Contact</button>
                                </form>
                            </div>

                        </div>
                    );

                }}
            </Consumer>
        )
    }
}

export default EditContact;
