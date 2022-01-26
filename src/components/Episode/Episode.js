import React from 'react';
import {Link} from "react-router-dom";

import './Episode.css'

const Episode = ({item, epiItem}) => {

    const {name, air_date,episode} = item;

    return (
        <div className={'episode'}>

            <h3>{name}</h3>
            <h5>air_date: {air_date}</h5>
            <h5>episode: {episode}</h5>
            <Link to={`/episode`} state={{...item}}>Episode Detail</Link>

        </div>
    );
};

export {Episode};