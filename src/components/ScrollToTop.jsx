import React from 'react';
import { animateScroll as scroll } from 'react-scroll';



const ScrollToTop = () => {
    const handleClick = () => {
        
        scroll.scrollToTop();
    }


    return (
        <div onClick={handleClick}>
            <img className='scrollToTopIcon' src="/img/scroll.png" />
        </div>
    );
};

export default ScrollToTop;