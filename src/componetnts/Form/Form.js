import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addCar} from "../../store/car.slice";

const Form = () => {

    const {register,handleSubmit,reset} = useForm()
    let dispatch = useDispatch();

    const submit = (car) => {
        dispatch(addCar({car}))
        reset()
    };

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" {...register('model')}/></label>
                <label>Price: <input type="text" {...register('price')}/></label>
                <label>Year: <input type="text" {...register('year')}/></label>
                <button>Save</button>
            </form>

        </div>
    );
};

export {Form};