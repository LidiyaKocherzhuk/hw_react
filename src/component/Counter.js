import React, {useReducer} from 'react';

import './Couter.css'

const reduser = (state, active) => {

    switch (active.type) {
        case 'inc':
            return {...state, counter1: state.counter1 + 1}
        case 'inc2':
            return {...state, counter2: state.counter2 + 1}
        case 'inc3':
            return {...state, counter3: state.counter3 + 1}
        case 'dec':
            return {...state, counter1: state.counter1 - 1}
        case 'dec2':
            return {...state, counter2: state.counter2 - 1}
        case 'dec3':
            return {...state, counter3: state.counter3 - 1}
        case 'reset':
            return {...state, counter1: 0}
        case 'reset2':
            return {...state, counter2: 5}
        case 'reset3':
            return {...state, counter3: 10}
        default:
        throw new Error('Error 404');
    }

};

const Counter = () => {

    const [state, dispatch] = useReducer(reduser, {counter1: 0, counter2: 5, counter3: 10})

    return (
        <div>

            <div className={'counter'}>
                <h2>Counter first <span>{state.counter1}</span>---</h2>
                <div>
                    <button onClick={() => dispatch({type: 'inc'})}>Increment</button>
                    <button onClick={() => dispatch({type: 'dec'})}>Decrement</button>
                    <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
                </div>
            </div>

            <hr/>

            <div className={'counter'}>
                <h2>Counter second <span>{state.counter2}</span>---</h2>
                <div>
                    <button onClick={() => dispatch({type: 'inc2'})}>Increment</button>
                    <button onClick={() => dispatch({type: 'dec2'})}>Decrement</button>
                    <button onClick={() => dispatch({type: 'reset2'})}>Reset</button>
                </div>
            </div>

            <hr/>

            <div className={'counter'}>
                <h2>Counter third <span>{state.counter3}</span>---</h2>
                <div>
                    <button onClick={() => dispatch({type: 'inc3'})}>Increment</button>
                    <button onClick={() => dispatch({type: 'dec3'})}>Decrement</button>
                    <button onClick={() => dispatch({type: 'reset3'})}>Reset</button>
                </div>
            </div>

            <hr/>


        </div>
    );
};

export {Counter};