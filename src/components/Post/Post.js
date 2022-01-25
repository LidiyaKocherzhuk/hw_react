import React from 'react';
import {NavLink} from "react-router-dom";

import './Post.css'

const Post = ({item}) => {
    const {id, title} = item;

    return (
        <div className={'post'}>

            <h3>{id}. {title}
                <NavLink to={id.toString()} state={{...item}}>Post Detail</NavLink></h3>

        </div>
    );
};

export default Post;