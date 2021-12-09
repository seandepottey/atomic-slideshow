import React from 'react';

const Layer = ({
    className,
    children
}) => {
    return (
        <div className={`Layer ${className}`}>
            {children}
        </div>
    );
}

export default Layer;