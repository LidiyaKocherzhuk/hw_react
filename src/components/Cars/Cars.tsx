import {FC, useEffect} from "react";
import React from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllCars} from "../../store";
import {Car} from "../Car/Car";


const Cars: FC = () => {

    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [])


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
