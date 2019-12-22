import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    debugger;
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
};

export class Provider extends Component {

    state = {
        contacts: [
            {
                id: 1,
                name: 'Rizwan Ijaz',
                email: 'rizwanijaz2@gmail.com',
                phone: '0313-7823033'
            }
        ],
        dispatch: action =>
            this.setState(state => reducer(state, action))
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
