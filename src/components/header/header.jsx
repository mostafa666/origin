import React from 'react';
import Navigation from './navigation';
import images from './../../http/images.json'
import Input from '../common/input';
function Header() {
    const {leftHeader , rightHeader } = images;
    return (
        <header>
            <Navigation />
            <div className="header">
                <img className="leftHeader"  src={leftHeader} alt="" />
                <img className="rightHeader" src={rightHeader} alt="" />
                <div className="header--content">
                    <h1>Restaurants you love, delivered to you</h1>
                    <form>
                        <div className="header--input">
                            <Input />
                        </div>
                        <input type="submit" className="searchButton" value="Find Food" />
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header;
