import React, { useEffect, useState } from 'react';
import Pricecart from '../PriceCart/Pricecart';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])

    return (
        <div>
            <h2 className='text-5xl text-center text-purple-950 bg-purple-300 font-bold p-4'>Awesome Affordable Prices</h2>
            <div className='grid grid-cols-3 gap-3'>
                {
                    prices.map(price => <Pricecart
                        key={price.id}
                        price={price}
                    ></Pricecart>)
                }
            </div>
        </div>
    );
};

export default PriceList;