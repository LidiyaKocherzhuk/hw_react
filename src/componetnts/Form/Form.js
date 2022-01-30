import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, updateCarAsync} from "../../store/car.slice";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";

const Form = () => {

    const {register,handleSubmit,reset,setValue,formState:{errors},} = useForm({
        resolver: joiResolver(carValidator), mode:"onTouched"
    })
    const {update, error} = useSelector(state => state['carReducer']);
    const {id,model,price,year} = update;
    const dispatch = useDispatch();

    useEffect(()=>{
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    },[update])

    const submit = (car) => {
        if (id) {
            dispatch(updateCarAsync({id, car}))
        }
        else {
            dispatch(createCar({car}));
        }
            reset()
    };

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" {...register('model')}/></label>
                {errors.model && <span>{errors.model.message}</span>}
                <label>Price: <input type="text" {...register('price')}/></label>
                {errors.price && <span>{errors.price.message}</span>}
                <label>Year: <input type="text" {...register('year')}/></label>
                {errors.year && <span>{errors.year.message}</span>}
                <button>Save</button>
            </form>

            {error && <h2>{error}</h2>}

        </div>
    );
};

export {Form};