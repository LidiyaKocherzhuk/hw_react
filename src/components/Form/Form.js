import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";

import './Form.css'
import {Animalcule} from "../Animalcule/Animalcule";


const reducer = (state, active) => {

    switch (active.type) {
        case 'addCat':
            return [...state, state.push({
                id: new Date().getTime(),
                cat: active.cat
            })]

        case 'addDog':
            state.push({
                id: new Date().getTime(),
                dog: active.dog.dog
            })
            return state


        default:
            throw new Error('Error')
    }
};

const Form = () => {

    let [state, dispatch] = useReducer(reducer, [])
    const {register, handleSubmit, reset} = useForm()

    const submitCat = (e) => {
        e.preventDefault();
        dispatch({type: 'addCat', cat: e.target.cat.value})
        reset()
    }
    const submitDog = (dog) => {
        dispatch({type: 'addDog', dog})
        reset()
    }
    const animalculeDelete = (id) => {
        // dispatch({type: 'id', id})
        // state = state.filter(item => item.id !== id)
    };

    return (
        <div>

            <div className={'forms'}>

                <form onSubmit={submitCat}>
                    <label>Add Cat: <input type='text' name={'cat'}/></label>
                    <button>Save</button>
                </form>

                <form onSubmit={handleSubmit(submitDog)}>
                    <label>Add Dog: <input type="text" {...register('dog')}/></label>
                    <button>Save</button>
                </form>

            </div>

            <hr/>

            {state && state.map(value=> <Animalcule key={value.id} animalcule={value} animalculeDelete={animalculeDelete}/>) }

        </div>
    );
};

export {Form};