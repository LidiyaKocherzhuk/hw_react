import React from 'react';

import './Dog.css'

const Dog = ({dog: {id, name}, dispatch}) => {

    return (
        <div className={'dog'}>
            <h2>Dog name: {name}</h2>
            <button onClick={() => dispatch({type: "deleteDog", id})}>Delete</button>
        </div>
    );
};

export {Dog};