import React, {FC} from 'react';

import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {deleteThunkCar, updateCarRedux} from "../../store";

const Car:FC<{car:ICar}> = ({car}) => {
    const {id,model,price,year} = car;
let dispatch = useAppDispatch();

    return (
        <div>

            <h2>id: {id}</h2>
            <h2>model: {model}</h2>
            <h2>price: {price}</h2>
            <h2>year: {year}</h2>
            <button onClick={()=> dispatch(deleteThunkCar({id}))}>Delete</button>
            <button onClick={()=> dispatch(updateCarRedux({car}))}>Update</button>

            <hr/>

        </div>
    );
};

export {Car};