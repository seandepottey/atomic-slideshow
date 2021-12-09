import React from "react";

const Button = ({
    children = 'Click Me',
    theme = 'primary'
}) => {
    return (
        <button className={`btn-${theme}`}>{children}</button>
    );
}

export default Button;