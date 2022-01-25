import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/api.service";
import User from "../../components/User/User";
import './Users.css'

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll()
            .then(users => setUsers([...users]));
    },[]);

    return (
        <>

            <div className={'users'}>
                {users.map(user => <User key={user.id} item={user}/>)}
            </div>

            <div className={'detail_albums'}>
                <Outlet/>
            </div>

        </>
    );
};

export default Users;