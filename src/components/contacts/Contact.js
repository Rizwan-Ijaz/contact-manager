import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from "../../Context";

class Contact extends React.Component {

    state = {
        showContactInfo: false
    };

    onDeleteClick = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload: id});
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
