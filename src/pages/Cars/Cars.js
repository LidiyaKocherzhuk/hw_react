import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllCars} from "../../store/slices/car.slice";
import {Car} from "../../componetnts";
import {Form} from "./Form";

const Cars = () => {

    const {cars, update, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCars())
    },[update])

    return (
        <div>

            <Form/>
            <div>
                <h2>All cars:</h2>
                {status === 'pending' && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {cars && cars.map(car => <Car key={car.id} car={car}/>)}
            </div>

        </div>
    );
};

export {Cars};