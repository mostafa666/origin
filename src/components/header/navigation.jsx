import React from 'react';
import {logo} from './../../http/images.json'
import Input from '../common/input.jsx';
function Navigation() {
    return (
        <nav className="navbar">
            <div className="row">
                <ul>
                    <li className="navbar--logo"><img src={logo} alt="Uber Eats logo" /></li>
                    <li className="navbar--searchBox">
                        <div className="navbar--searchBox__box">
                            <Input />
                        </div>
                    </li>
                    <li className="navbar--signIn">sign In</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;
