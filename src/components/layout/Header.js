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
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <i className="fas fa-home"></i> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact/add" className="nav-link">
                                    <i className="fas fa-plus"></i> Add Contact</Link>
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
