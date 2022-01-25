import React from 'react';

import './Comment.css'

const Comment = ({item}) => {

    const {postId, id, name, email, body} = item;

    return (
        <div className={'comment'}>

            <h4>postId: {postId}</h4>
            <h4>id: {id}</h4>
            <h4>name: {name}</h4>
            <h4>email: {email}</h4>
            <h4>body: {body}</h4>

        </div>
    );
};

export default Comment;