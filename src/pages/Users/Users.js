import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store/slices/user.slice";
import {User} from "../../componetnts/User/User";
import './Users.css';
import css from '../../App.module.css';

const Users = () => {

    const {users,status, error} = useSelector(state => state['userReducer']);
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])


    return (
        <div className={'users'}>

            <h1 className={css.h1}>All users</h1>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {users.map(user => <User key={user.id} user={user}/>)}

        </div>
    );
};

export {Users};