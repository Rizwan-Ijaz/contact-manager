import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Header = (props) => {
    const {branding} = props;
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
                <div className="container">
                    <a className="navbar-brand" href="/">{branding}</a>

                    <div className="navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact/add" className="nav-link">Add Contact</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1"
                                   aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

Header.defaultProps = {
    branding: 'My App'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;
