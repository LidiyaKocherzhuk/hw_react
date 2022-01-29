import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteCar} from "../../store/car.slice";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    let dispatch = useDispatch();

    return (
        <div>
            <h2>Model: {model}</h2>
            <h2>Price: {price}</h2>
            <h2>Year: {year}</h2>
            <button onClick={()=>dispatch(deleteCar({id}))}>Delete</button>
        </div>
    );
};

export {Car};