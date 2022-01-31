import React from 'react';

import css from '../../App.module.css';

const Post = ({post}) => {
    const {userId, id, title, body} = post;

    return (
        <div className={css.item}>

            <h2><u>userId:</u> {userId};</h2>
            <h2><u>id:</u> {id};</h2>
            <h2><u>title:</u> {title};</h2>
            <h2><u>body:</u> {body};</h2>

        </div>
    );
};

export {Post};