import { HANDLEWIDTH,HANDLELEFT,SETLEFTZERO } from "./types";

export const handleWidths = (pageWidth) => {
        var width,postInPage;
        if(pageWidth > 1200) {
            width = (1200 - (2 * 20))/3;
            postInPage = 3;
        }else if (pageWidth < 1200 && pageWidth > 960) {
            width = ( .9 * (pageWidth-10)  - (2 * 20))/3;
            postInPage = 3;
        } else if (pageWidth < 960  && pageWidth > 480) {
            width = ( .9 * (pageWidth-10)  - ( 20)) / 2;
            postInPage = 2;
        } else {
            width = .9 * (pageWidth-10) ;
            postInPage = 1;
        }
    return {
        type: HANDLEWIDTH,
        width,
        postInPage
    };
};

export const handleLeft = (operator,width) => {
   
    return {
        type: HANDLELEFT,
        operator,
        width
    };
};
export const setLeftZero = () => {
   
    return {
        type: SETLEFTZERO,
    };
};
