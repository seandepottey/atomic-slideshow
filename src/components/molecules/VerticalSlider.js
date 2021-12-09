import React, { useState } from 'react';

import Slide from '../atoms/slide';

const VerticalSlider = ({
    children
}) => {
    const [activeSlide, setActiveSlide] = useState(0);

    document.addEventListener('keydown', (e) => {
        if(e.code === 'ArrowDown') {
            if(activeSlide < (children.length - 1)) {
                setActiveSlide(activeSlide + 1);
            }
        }

        if(e.code === 'ArrowUp') {
            console.log(e);
            if(0 < activeSlide) {
                setActiveSlide(activeSlide - 1);
            }
        }
    });

    const slides = children.map((el, index) => {
        let isActive = false;
        if(index <= activeSlide) {
            isActive = true;
        }
        return (
            <Slide
                key={`Slide_${index}`}
                active={isActive}
                className={'tertiary-bg flex flex-j-center flex-a-center'}
            >
                {el}
            </Slide>
        );
    });

    return (
        <div className='VerticalSlider'>
            {slides}
        </div>
    );
};

export default VerticalSlider;