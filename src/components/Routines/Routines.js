import React from 'react';
import {useSelector} from "react-redux";

import {Routine} from "../Routine/Routine";

const Routines = () => {

    let {routines} = useSelector(state => state['routineReducer']);

    return (
        <div>
            {routines.map(item => <Routine key={item.id} item={item}/>)}
        </div>
    );
};

export {Routines};