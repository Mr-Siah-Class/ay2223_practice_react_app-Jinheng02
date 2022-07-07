import React from 'react';

class SingleProductScreen extends React.Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    render()
    {
        return (
            <div className='Main'>
                <h1>Product {this.props.productId}</h1>
            </div>
        );
    }
}

export default SingleProductScreen;