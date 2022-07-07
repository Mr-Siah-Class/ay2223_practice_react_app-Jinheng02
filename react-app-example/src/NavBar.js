import React from 'react';

class NavBar extends React.Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    render()
    {
        return (
            <div id='Nav'>
                <a href='/'>Home</a>
                <a href='/products'>Products</a>
                <a href='/cart'>Cart</a>
                <a href='/profile'>Profile</a>
            </div>
        );
    }
}

export default NavBar;