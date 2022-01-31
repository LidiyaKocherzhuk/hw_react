import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../store/slices/post.slice";
import {Post} from "../../componetnts/Post/Post";
import css from '../../App.module.css';

const Posts = () => {

    const {posts, error} = useSelector(state => state['postReducer']);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPosts())
    },[])

    return (
        <div className={css.items}>

            {error && <h2>{error}</h2>}
            {posts.map(post=><Post key={post.id} post={post}/>)}

        </div>
    );
};

export {Posts};