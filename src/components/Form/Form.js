import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";

import './Form.css'
import {Animalcule} from "../Animalcule/Animalcule";


// const reducer = (state, active) => {
//
//     // switch (active.type) {
//     //     case 'addCat':
//     //         return [...state, state.cats:{
//     //             id: new Date().getTime(),
//     //             cat: active.cat
//     //         }]
//
//         case 'addDog':
//             state.push({
//                 id: new Date().getTime(),
//                 dog: active.dog.dog
//             })
//             return state
//
//
//         default:
//             throw new Error('Error')
//     }
// };

const Form = () => {

    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <div>

            <div className={'forms'}>

                <form onSubmit={submit}>
                    <label>Add Cat: <input type='text' name={'cat'}/></label>
                    <button>Save</button>
                    <label>Add Dog: <input type="text" name={'dog'}/></label>
                    <button>Save</button>
                </form>

            </div>

        </div>
    );
};

export {Form};