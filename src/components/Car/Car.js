import React from 'react';

const Car = ({car}) => {
    const {id, model, price, year} = car;

    return (
        <div>
            <h2>id:{id}</h2>
            <h2>model:{model}</h2>
            <h2>price:{price}</h2>
            <h2>year:{year}</h2>
            <hr/>
        </div>
    );
};

export default Car;