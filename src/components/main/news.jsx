import React, { Component } from 'react';
import Card from './card';
import { priority } from '../../http/menu';
import { connect } from 'react-redux';
import { handleWidths } from '../../actions/postsAction';
class News extends Component {
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
    }
    render() {
        const {postInPage , width} = this.props.responsive;
        
        return (
            <div className="news">
                <div className="row">
                    <h2>New on Uber Eats</h2>
                </div>
                <div className="row">
                        {priority().map((card,index) => {
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
        );
    }
}

export default connect(state => ({responsive:state.posts.responsive}))(News);
