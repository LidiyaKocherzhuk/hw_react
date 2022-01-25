import React from 'react';

const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div className={"user"}>
                <h4>{id}) {name} {username} -- {email}</h4>
            </div>
        </div>
    );
};

export default User;