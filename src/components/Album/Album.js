import React from 'react';
import {NavLink} from "react-router-dom";

import './Album.css'

const Album = ({album}) => {
    const {userId, id, title} = album;

    return (
        <div className={'album'}>

            <div>
                <h3>userId: {userId}</h3>
                <h3>id: {id}</h3>
                <h3>title: {title}</h3>
            </div>

            <NavLink to={`${id}/photos`}>Photos</NavLink>
        </div>
    );
};

export default Album;