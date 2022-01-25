import React from 'react';
import {NavLink, Outlet, useLocation} from "react-router-dom";

import './UserDetail.css'

const UsersDetail = () => {

    let location = useLocation();

    let {state: user} = location;
    const {id, name, username, email, address, phone, website, company} = user;
    return (
        <div>

            <div className={'userDetail'}>
                <h2>id: {id}</h2>
                <h2>name: {name} {username}</h2>
                <h2>email: {email}</h2>
                <div><h2>address: </h2>
                    <h3>street: {address.street}</h3>
                    <h3>suite: {address.suite}</h3>
                    <h3>city: {address.city}</h3>
                    <h3>zipcode: {address.zipcode}</h3>
                    <div><h3>geo:</h3>
                        <h3>lat: {address.geo.lat}</h3>
                        <h3>lng: {address.geo.lng}</h3>
                    </div>
                </div>
                <h2>phone: {phone}</h2>
                <h2>website: {website}</h2>
                <div><h2>company:</h2>
                    <h3>name: {company.name}</h3>
                    <h3>catchPhrase: {company.catchPhrase}</h3>
                    <h3>bs: {company.bs}</h3>
                </div>

                <NavLink to={'post'} state={{...user}}>Posts</NavLink>
            </div>

            <hr/>
            <Outlet/>

        </div>
    );
};

export default UsersDetail;