import React from "react";

const Layout = ({
    header,
    quote,
    children
}) => {
    return (
        <div class='flex flex-j-center'>
            <div className='flex-10'>
                <div className='mb-5'>
                    <h1>{header}</h1>
                    <blockquote>"{quote}"</blockquote>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Layout;