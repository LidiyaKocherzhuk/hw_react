import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services/cars.service";

const Form = ({update, carForUpdate: {id, model, price, year}}) => {

    const {register, handleSubmit, setValue} = useForm()

    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    }, [id])

    const submitSave = async (car) => {
        let newCar;
        if (id) {
            newCar = await carsService.update(id,car)
        }else {
            newCar = await carsService.create(car)
        }
        update(newCar)
    };


    return (
        <div>

            <form onSubmit={handleSubmit(submitSave)}>
                <div><label>Model: <input type="text"
                                          defaultValue={''} {...register('model')}/></label></div>
                <div><label>Price: <input type="number"
                                          defaultValue={''} {...register('price')}/></label></div>
                <div><label>Year: <input type="number"
                                         defaultValue={''} {...register('year')}/></label></div>
                <button>{id ? 'Update': 'Create'}</button>

            </form>

        </div>
    );
};

export default Form;