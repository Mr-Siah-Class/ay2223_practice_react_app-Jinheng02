import React from 'react';

class ProductsScreen extends React.Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    render()
    {
        const aList = [];

        for (var i=0; i<10; i++) 
        {
            aList.push(<li key={i}><a href={'products/'+i}>Item {i}</a></li>);
        }

        return (
            <div className='Main'>
                <h1>ProductScreen</h1>
                <ul>{aList}</ul>
            </div>
        );
    }


}

export default ProductsScreen;