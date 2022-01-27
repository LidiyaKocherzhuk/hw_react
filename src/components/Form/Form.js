import React, {useReducer} from 'react';

import './Form.css'
import {Cats} from "../Cats/Cats";
import {Dogs} from "../Dogs/Dogs";
import {useForm} from "react-hook-form";

const reducer = (state, active) => {

    let dogs = []
    let cats = []
    if (active.type === 'addDog') {
        console.log(state)
    }
    if (active.type === 'addCat') {
        cats.push(state.cats)
    }
};

const Form = () => {

    const [state, dispatch] = useReducer(reducer, {cats: '', dogs: ''})
    const {register, handleSubmit, setValue, watch} = useForm();

    const onChange = (e) => {
        e.preventDefault()
        state.dogs = e.target.name
    }

    return (
        <div>

            <div className={'forms'}>

                <form onSubmit={(e) => {
                    e.preventDefault()
                    console.log(e.target.value);
                    dispatch({type: 'addCat'})
                }}>
                    <label>Add Cat: <input type='text' name='cat'/></label>
                    <button>Save</button>
                </form>

                <form onSubmit={()=>dispatch({type:'addDog'})}>
                    <label>Add Dog: <input type="text" {...register('cat')}/></label>
                    <button>Save</button>
                </form>

            </div>

            <hr/>

            {/*<Cats cat={state.cats}/>*/}
            {/*<Dogs dog={state.dogs}/>*/}

        </div>
    );
};

export {Form};