import React from "react";

import Circle from '../atoms/circle.js';

const Logo = ({
    className = '',
    color = 'light',
    size = 'xlarge'
}) => {
    let outerSize, innerSize, floaterSize;

    if(size === 'xlarge') {
        outerSize = 'xlarge';
        innerSize = 'large';
        floaterSize = 'medium'
    }

    if(size === 'large') {
        outerSize = 'large';
        innerSize = 'medium';
        floaterSize = 'small'
    }

    if(size === 'medium') {
        outerSize = 'medium';
        innerSize = 'small';
        floaterSize = 'xsmall'
    }

    return (
        <Circle className={`Logo ${outerSize} ${color}-outline_large position-relative flex flex-j-center flex-a-center ${className}`}>
            <Circle className={`${color}-bg ${innerSize}`} />
            <Circle className={`floater ${color}-bg ${floaterSize} position-absolute left-50 top-0`} />
        </Circle>
    );
};

export default Logo;