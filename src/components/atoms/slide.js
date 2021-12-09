import React from "react";

const Slide = ({
    className,
    children,
    active = false
}) => {
    let activeClass = '';
    if(active) {
        activeClass = 'active';
    }

    return (
        <div className={`Slide fill-viewport ${className} ${activeClass}`}>
            {children}
        </div>
    );
};

export default Slide;