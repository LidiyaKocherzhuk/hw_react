import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCarAsync, updateCar} from "../../store/car.slice";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    let dispatch = useDispatch();

    return (
        <div>
            <h2>Model: {model}</h2>
            <h2>Price: {price}</h2>
            <h2>Year: {year}</h2>
            <button onClick={()=>dispatch(updateCar({car}))}>Update</button>
            <button onClick={()=>dispatch(deleteCarAsync({id}))}>Delete</button>
            <hr/>
        </div>
    );
};

export {Car};