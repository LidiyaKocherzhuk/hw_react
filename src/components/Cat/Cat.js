import React from 'react';
import './Cat.css'

const Cat = ({cat: {id, name}, dispatch}) => {


    return (
        <div className={"cat"}>
            <h2>Cat name: {name}</h2>
            <button onClick={() => dispatch({type: "deleteCat", id})}>Delete</button>
        </div>
    );
};

export {Cat};