import React from 'react';
import {carsService} from "../../services/cars.service";

const Car = ({car, update, setCarForUpdate}) => {
    const {id, model, price, year} = car;

    const deleteCar = () => {
        carsService.deleteCar(id)
        update({})
    }
    const setCar = () => {
        setCarForUpdate(car);
    }

    return (
        <div>
            <h2>id:{id}</h2>
            <h2>model:{model}</h2>
            <h2>price:{price}</h2>
            <h2>year:{year}</h2>
            <button onClick={setCar}>Update</button>
            <button onClick={deleteCar}>Delete</button>


            <hr/>
        </div>
    );
};

export default Car;