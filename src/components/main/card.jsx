import React, { Component } from 'react';

class Card extends Component {
    render() {
        const {
            src,
            title,
            cuisineType,
            mealType,
            menuType,
            rate,
            price,
            margin,
            width
        } = this.props;
        return (
            <div className='card col-1-of-3' style={{width: width+"px",marginRight: margin+"px"}}>
                <img src={src} alt={title} />
                <h3 className="title">{title}</h3>
                <p className="tags">
                    $ {cuisineType} <b>&#183;</b> {mealType} <b>&#183;</b>{' '}
                    {menuType}
                </p>
                <div className="more">
                    <span className="">20-30 min</span>
                    <span className="rate">{rate} (+500)</span>
                    <span className="price">${price} Delivery fee</span>
                </div>
            </div>
        );
    }
}

export default Card;
