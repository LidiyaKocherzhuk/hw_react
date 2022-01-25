import React from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services/cars.service";

const Form = ({deleteUpdate}) => {

    const {register, handleSubmit} = useForm()

    const submitSave = (car) => {
          deleteUpdate(car)
          console.log(car)
    };
    const createCar = (car) =>{
        carsService.create(car).then(cars=> console.log(cars))
    }


    return (
        <div>

            <form onSubmit={handleSubmit(submitSave)}>
                <div><label>Model: <input type="text"
                                          defaultValue={''} {...register('model')}/></label></div>
                <div><label>Price: <input type="number"
                                          defaultValue={''} {...register('price')}/></label></div>
                <div><label>Year: <input type="number"
                                         defaultValue={''} {...register('year')}/></label></div>
                <button onClick={createCar}>Save</button>

            </form>

        </div>
    );
};

export default Form;