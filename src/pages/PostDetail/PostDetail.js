import React from 'react';
import {NavLink, Outlet, useLocation} from "react-router-dom";

import './PostDetail.css'

const PostDetail = () => {
    const location = useLocation();
    const {state: post} = location;

    return (
        <div className={'postDetail'}>

            <div className={'postD'}>
                <h4>userId: {post.userId}</h4>
                <h4>id: {post.id}</h4>
                <h4>title: {post.title}</h4>
                <h4>body: {post.body}</h4>
                <NavLink to={'comments'} state={{...post}}>Comments</NavLink>
            </div>
            <hr/>
            <Outlet/>

        </div>
    );
};

export default PostDetail;