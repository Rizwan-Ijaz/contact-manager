import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from "../../Context";
import axios from 'axios';
import {Link} from 'react-router-dom';

class Contact extends React.Component {

    state = {
        showContactInfo: false
    };

    onDeleteClick = async (id, dispatch) => {
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({type: 'DELETE_CONTACT', payload: id});
        } catch (e) {
            dispatch({type: 'DELETE_CONTACT', payload: id});
        }
    };

    render() {
        const {id, name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name}
                                <i className="fas fa-sort-down" style={{cursor: 'pointer'}}
                                   onClick={() => {
                                       this.setState({showContactInfo: !this.state.showContactInfo})
                                   }}></i>
                                <i className="fas fa-times text-danger" style={{float: 'right', cursor: 'pointer'}}
                                   onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                                <Link to={`/contact/edit/${id}`}>
                                    <i className="fas fa-pencil-alt"
                                       style={{float: 'right', marginRight: '1rem', cursor: 'pointer'}}></i>
                                </Link>
                            </h4>
                            {showContactInfo ?
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>
                                : null
                            }

                        </div>
                    )
                }}

            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
