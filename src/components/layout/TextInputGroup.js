import React from "react";
import PropTypes from 'prop-types';

export const TextInputGroup = ({lable, type, name, value, placeholder, changeHandler}) => {

    return (
        <div className="form-group">
            <label htmlFor={name}>{lable}</label>
            <input type={type} name={name} value={value} onChange={changeHandler}
                   className="form-control"
                   placeholder={placeholder} required/>
        </div>
    )
};

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    lable: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired
}

TextInputGroup.defaultProps = {
    type: 'text'
}
