import React from "react";

const Label = ({
    text = 'Label'
}) => {
    return (
        <label className='pr-3'>{text}</label>
    );
}

export default Label;