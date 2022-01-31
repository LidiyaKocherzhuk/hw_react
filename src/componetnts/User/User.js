import React from 'react';

import './User.css';

const User = ({user}) => {

    const {
        id, name, username, email, address: {
            street, suite, city
        }, phone, website
    } = user

    return (
        <div className={'user'}>

            <h2><u>id:</u> {id};</h2>
            <h2><u>name:</u> {name};</h2>
            <h2><u>username:</u> {username};</h2>
            <h2><u>email:</u> {email};</h2>
            <h2><u>address:</u>;</h2>
            <div>
                <h3><u>street:</u> {street};</h3>
                <h3><u>suite:</u> {suite};</h3>
                <h3><u>city:</u> {city};</h3>
            </div>
            <h2><u>phone:</u> {phone};</h2>
            <h2><u>website:</u> {website};</h2>

        </div>
    );
};

export {User};