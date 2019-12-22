import React, {Component} from "react";
import {Consumer} from '../../Context';
import uuid from 'uuid';
import {TextInputGroup} from "../layout/TextInputGroup";

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };

    inputChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmitHandler = (dispatch, e) => {
        e.preventDefault();

        const {name, email, phone} = this.state;

        const newContact = {id: uuid(), name, email, phone};

        dispatch({type: 'ADD_CONTACT', payload: newContact});

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
                                Add Contact
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

                                    <button type="submit" className="btn btn-primary btn-block">Add Contact</button>
                                </form>
                            </div>

                        </div>
                    );

                }}
            </Consumer>
        )
    }
}

export default AddContact;
