import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts, limits} from "../../store/slices/post.slice";
import {Post} from "../../componetnts/Post/Post";
import css from '../../App.module.css';


const Posts = () => {

    const {posts,status, error, start, limit} = useSelector(state => state['postReducer']);
    const dispatch = useDispatch();

    const prev = (e) => {
        e.preventDefault();
        dispatch(limits({type:'prev'}))
    };
    const next = (e) => {
        e.preventDefault();
        dispatch(limits({type:'next'}))
    };

    useEffect(()=>{
        dispatch(getAllPosts({start, limit}))
    },[start,limit]);

    return (
        <div className={css.items}>

            <h1 className={css.h1}>All posts</h1>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {posts.map(post=><Post key={post.id} post={post}/>)}

            <div className={css.buttons_menu}>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>

        </div>
    );
};

export {Posts};