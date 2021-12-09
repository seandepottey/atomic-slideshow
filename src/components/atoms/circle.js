import React from "react";

const Circle = ({
    className,
    children
}) => {
    return (
        <div className={`Circle ${className}`}>
            {children}
        </div>
    );
};

export default Circle;