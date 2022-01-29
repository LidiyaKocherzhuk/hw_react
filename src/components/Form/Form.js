import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";

import './Form.css'
import {Cats} from "../Cats/Cats";
import {Dogs} from "../Dogs/Dogs";


const reducer = (state, active) => {

    console.log(active.cat)
    switch (active.type) {
        case 'addCat':
            state.push({
                id: new Date().getTime(),
                cat: active.cat.cat
            })
            return state
        case 'addDog':
            state.push({
                id: new Date().getTime(),
                dogs: active.dog.dog
            })
            return state

        default:
            throw new Error('Error 404')
    }
};

const Form = () => {

    const [state, dispatch] = useReducer(reducer, [])
    const {register, handleSubmit, reset} = useForm()

    const submitCat = (cat) => {
        dispatch({type: 'addCat', cat})
        reset()
    }
    const submitDog = (dog) => {
        dispatch({type: 'addDog', dog})
        reset()
    }
    console.log(state)

    return (
        <div>

            <div className={'forms'}>

                <form onSubmit={handleSubmit(submitCat)}>
                    <label>Add Cat: <input type='text' {...register('cat')}/></label>
                    <button>Save</button>
                </form>

                <form onSubmit={handleSubmit(submitDog)}>
                    <label>Add Dog: <input type="text" {...register('dog')}/></label>
                    <button>Save</button>
                </form>

            </div>

            <hr/>

            {/*<div>{arr && arr.map((value, id) => <Cats key={id} cat={value}/>)}</div>*/}
            {/*{state.cats && <Cats cat={state.cats}/>}*/}
            {/*{onSubmitD && arrDogs.map((value,id)=> <Dogs key={id} dog={value}/>) }*/}

        </div>
    );
};

export {Form};