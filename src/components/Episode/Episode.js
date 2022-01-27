import React from 'react';
import {Link} from "react-router-dom";

import './Episode.css'

const Episode = ({item, epiItem}) => {

    const {name, air_date,episode} = item;

    return (
        <div className={'episode'}>

            <h2>{name}</h2>
            <h3>air_date: {air_date}</h3>
            <h3>episode: {episode}</h3>
            <Link to={`/episode`} state={{...item}}>Episode Detail</Link>

        </div>
    );
};

export {Episode};