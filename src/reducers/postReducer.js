import { HANDLEWIDTH,HANDLELEFT,SETLEFTZERO } from './../actions/types';


const initialState = {
    responsive : {
        width: 0,
        postInPage: 0
    },
    carousel: {
        left: 0
    }
};
export default (state = initialState, action) => {
    switch (action.type) {
        case HANDLEWIDTH:
            return {
                ...state,
                responsive: {
                     width: action.width,
                     postInPage: action.postInPage
                }
            }
        case HANDLELEFT:
            var newWidth;
            if(action.width > 1200) {
                newWidth = 1200;
            }else if (action.width < 1200 && action.width > 960) {
                newWidth = (action.width - 10) * .9;
            } else if (action.width < 960  && action.width > 480) {
                newWidth = (action.width - 10) * .9;
            } else {
                newWidth = (action.width - 10) * .9;
            }
            let newLeft  = action.operator === '+' ? newWidth : - newWidth;
            console.log(state.carousel.left)
            return {
                ...state,
                carousel: {
                    left: state.carousel.left + newLeft
                }
            }
        case SETLEFTZERO:
                return {
                    ...state,
                    carousel: {
                        left: 0
                    }
                }
        default:
            return state;
    }
};
