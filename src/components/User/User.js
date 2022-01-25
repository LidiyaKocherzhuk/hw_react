import React from 'react';
import {NavLink} from "react-router-dom";

import './User.css'

const User = ({item}) => {
    const {id, name, username} = item;

    return (

        <div className={'user'}>
            <h3>{id}. {name} {username}</h3>
            <NavLink to={id.toString()} state={{...item}}>Details</NavLink>
            <NavLink to={`${id.toString()}/albums`}> Albums </NavLink>
        </div>

    );
};

export default User;