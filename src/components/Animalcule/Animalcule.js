import React from 'react';

const Animalcule = ({animalcule:{id,cat,dog},animalculeDelete}) => {

    return (
        <div>
            {cat && <h2>Cat: {cat}</h2>}
            {dog && <h2>Dog: {dog}</h2>}
            <button onClick={() => animalculeDelete(id)}>Delete</button>
        </div>
    );
};

export {Animalcule};