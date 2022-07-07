import React from 'react';

class NoScreen extends React.Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    render()
    {
        return (
            <div className='Main'>
                <h1>404 Not Found</h1>
            </div>
        );
    }
}

export default NoScreen;