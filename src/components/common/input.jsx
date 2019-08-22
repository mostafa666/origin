import React from 'react';
// icons
import location from './../../common/images/location.png'
function Input() {
    return (
        <div className="inputContainer">
            <img src={location} alt="search icon" />
            <input type="text" placeholder="Enter delivery Address" />
        </div>
    )
}

export default Input;




