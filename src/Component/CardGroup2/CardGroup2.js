import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {

    const products = [
        { id: 1, name: 'laptop', price: 34000 },
        { id: 2, name: 'Mobile', price: 20000 },
        { id: 3, name: 'Desktop', price: 54000 },
        { id: 4, name: 'Smart Watch', price: 54000 },
        { id: 5, name: 'Smart tv', price: 54000 },
        { id: 6, name: 'Tablet Pc', price: 54000 },

    ]
    return (
        <div>
            <CardGroup>
                {
                    products.map(product => <Card2 key={product.id} product={product}></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;