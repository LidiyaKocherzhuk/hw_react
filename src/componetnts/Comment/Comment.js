import React from 'react';

import css from '../../App.module.css';

const Comment = ({comment}) => {
    const {postId,id,name,email,body} = comment;

    return (
        <div className={css.item}>

            <h2><u>postId:</u> {postId};</h2>
            <h2><u>id:</u> {id};</h2>
            <h2><u>name:</u> {name};</h2>
            <h2><u>email:</u> {email};</h2>
            <h2><u>body:</u> {body};</h2>

        </div>
    );
};

export {Comment};