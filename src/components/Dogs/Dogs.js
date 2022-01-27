import React from 'react';

const Dogs = ({dog}) => {
    let dogs = [dog];
    // dogs.set({dog})
    return (
        <div>
            {dogs.map(value => <h2>dog:{value}</h2>)}
        </div>
    );
};

export {Dogs};