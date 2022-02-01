import React from 'react';

const Dog = ({dog}) => {
    return (
        <div>
            <h2>Dog name: {dog.name}</h2>
            <button>Delete</button>
        </div>
    );
};

export {Dog};