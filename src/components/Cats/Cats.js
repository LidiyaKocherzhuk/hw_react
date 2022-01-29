import React from 'react';

let arrayCats = [];
const Cats = ({cat}) => {
arrayCats.push(cat)
    console.log(arrayCats)
    return (
        <div>
            {/*{arrayCats.map(value => value )}*/}
        </div>
    );
};

export {Cats};