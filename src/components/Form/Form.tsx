import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {addThunkCar, updateThunkCar} from "../../store";

const Form: FC = () => {

    let {update}= useAppSelector(state => state.carReducer);
    const {handleSubmit, register, reset, setValue} = useForm<ICar>();
    let dispatch = useAppDispatch();

    useEffect(()=>{
        if (update) {
            setValue("model", update.model);
            setValue("price",update.price)
            setValue("year", update.year)
        }

    },[update]);


    const submit: SubmitHandler<ICar> = (car) => {
        if (update && update.id) {
            dispatch(updateThunkCar(car))
        }
        dispatch(addThunkCar({car}))
        reset();

    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <label>Modal: <input type="text" {...register("model")}/></label>
                <label>Price: <input type="text" {...register("price")}/></label>
                <label>Year: <input type="text" {...register("year")}/></label>
                <button>Save</button>
            </form>
            <hr/>

        </div>
    );
};

export {Form};