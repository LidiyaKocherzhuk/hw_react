import React from 'react';

import './UserPost.css'

const UserPost = ({item}) => {
    const {userId, id, title, body} = item;

    return (
        <div className={'userPost'}>

            <h3>userId: {userId}</h3>
            <h3>id: {id}</h3>
            <h3>title: {title}</h3>
            <h3>body: {body}</h3>

        </div>
    );
};

export default UserPost;