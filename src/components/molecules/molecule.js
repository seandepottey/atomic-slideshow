import React from "react";
import Logo from './logo';

const Molecule = ({
    color = 'light',
    size = 'large'
}) => {
    return (
        <div>
            <div class='flex flex-j-center'>
                <Logo color={color} size={size} />
                <Logo color={color} size={size} />
            </div>
            <div className='flex flex-j-center'>
                <Logo color={color} size={size} />
            </div>
        </div>
    );
}

export default Molecule;