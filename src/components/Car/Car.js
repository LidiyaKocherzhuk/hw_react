import React from 'react';
import {carsService} from "../../services/cars.service";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const deleteCar = (id) => {
        carsService.deleteCar(id)
    }

    return (
        <div>
            <h2>id:{id}</h2>
            <h2>model:{model}</h2>
            <h2>price:{price}</h2>
            <h2>year:{year}</h2>
            <button onClick={deleteCar}>Delete</button>

            <hr/>
        </div>
    );
};

export default Car;