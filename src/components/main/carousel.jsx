import React, { Component } from 'react';
import Card from './card';
import { connect } from 'react-redux';
import { handleWidths, handleLeft, setLeftZero } from './../../actions/postsAction';

class Carousel extends Component {
    componentWillMount() {
        this.handleWidth();
    }
    componentDidMount() {
        window.addEventListener('resize',this.handleWidth)
        
    }
    componentWillUnmount() {
        window.removeEventListener('resize',this.handleWidth)
    }
    handleWidth = () => {
        this.props.dispatch(handleWidths(window.innerWidth))
        this.props.dispatch(setLeftZero())
    }
    goRight = () => {
        if(this.props.posts.carousel.left >= 0) return;
        this.props.dispatch(handleLeft('+',window.innerWidth))
    }
    goLeft = () => {
        const {cards, posts} = this.props;
        const {width} = posts.responsive;
        const {left} = posts.carousel;
        console.log((cards.length) * width , Math.abs(left - (9 * width)))
        if(window.innerWidth > 960 && cards.length % 3 === 0 && (cards.length) * width <= Math.abs(left - (3 * width))) return
        if((cards.length - 1) * width <= Math.abs(left)) return;
        this.props.dispatch(handleLeft('-',window.innerWidth))
    }
    render() {
        const { cards, posts } = this.props;
        const {width,postInPage} = posts.responsive;
        const {left} = posts.carousel;
        return (
            <div className="carousel">
                <div className="row top">
                    <h2>Food Delivery in Piscataway</h2>
                    <div>
                        <span onClick={() => this.goLeft()}>left</span>
                        <span onClick={() => this.goRight()}>rigth</span>
                    </div>
                </div>
                <div className="row">
                    <div className="gal" style={{left:left+"px"}}>
                        {cards.map((card,index) => {
                            let margin = index % postInPage !== (postInPage - 1) ? 20: 0;
                            return (
                                <Card
                                margin={margin}
                                width={width}
                                key={card.id}
                                src={card.image}
                                title={card.title}
                                cuisineType={card.cuisineType.title}
                                mealType={card.mealType.title}
                                menuType={card.menuType.title}
                                rate={card.rate}
                                price={card.price}
                            />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({posts:state.posts}))(Carousel);
