import React from 'react';

const Cat = ({cat}) => {

    return (
        <div>
            <h2>Cat name: {cat.name}</h2>
            <button>Delete</button>
        </div>
    );
};

export {Cat};