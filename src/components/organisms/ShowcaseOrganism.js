import React from "react";
import Logo from "../molecules/logo";
import Button from "../atoms/Button";

import ShowcaseMolecule from "../molecules/ShowcaseMolecule";

const ShowcaseOrganism = ({
    theme = 'dark'
}) => {
    let themeClasses = 'dark-bg light-txt';
    let buttonTheme = '';
    let logoTheme = 'light';
    if(theme === 'light') {
        themeClasses = 'light-bg dark-txt';
        buttonTheme = 'light';
        logoTheme = 'dark';
    }
    if(theme === 'primary') {
        themeClasses = 'primary-bg dark-txt';
        buttonTheme = 'dark';
        logoTheme = 'dark';
    }
    return (
        <nav className={`ShowcaseOrganism flex flex-j-between flex-a-center  p-3 mb-5 ${themeClasses}`}>
            <div className='flex flex-a-center'>
                <div class='mr-3'>
                    <Logo color={logoTheme} size='medium' />
                </div>
                <div className='flex nav-left'>
                    <Button theme={`${buttonTheme}`}>Home</Button>
                    <Button theme={`${buttonTheme}`}>About</Button>
                    <Button theme={`${buttonTheme}`}>Portfolio</Button>
                </div>
            </div>
            <ShowcaseMolecule />
        </nav>
    );
}

export default ShowcaseOrganism;