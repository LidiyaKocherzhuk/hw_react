import React from 'react';
import {useDispatch} from "react-redux";

import {checkRoutine, deleteRoutine} from "../../store/routine.slice";
import './Routine.css'

const Routine = ({item}) => {
    const {id,value,status} = item;
    const dispatch = useDispatch();

    const submit = (e) => {
      e.preventDefault();
    }

    const change = (e) => {
        const checked = e.target.checked;
        dispatch(checkRoutine({checked,id}))
    }

    return (
        <div>

            <form onSubmit={submit}>
                <input type="checkbox" name={'checkbox'} onChange={change}/>
                <h2 className={status ? 'text':null}>{value}</h2>
                <button onClick={()=> dispatch(deleteRoutine({id}))}>Delete</button>
            </form>

        </div>
    );
};

export {Routine};