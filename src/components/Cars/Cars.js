import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/cars.service";
import Car from "../Car/Car";

const Cars = ({trigger, update, setCarForUpdate}) => {

    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carsService.getAll().then(cars => setCars([...cars])
        );
    },[trigger])

    return (
        <div>

            {cars.map(car => <Car key={car.id} car={car} update={update} setCarForUpdate={setCarForUpdate}/>)}

        </div>
    );
};

export default Cars;