import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/cars.service";
import Car from "../Car/Car";

const Cars = ({trigger}) => {

    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carsService.getAll().then(cars => setCars([...cars])
        );
    },[trigger])

    // const filter = () =>{
    //     if (trigger.model){
    //
    //     }
    // }



    return (
        <div>

            {cars.map(car => <Car key={car.id} car={car}/>)}

        </div>
    );
};

export default Cars;