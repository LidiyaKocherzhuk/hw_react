import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments, limitsComment} from "../../store/slices/comment.slice";
import {Comment} from "../../componetnts/Comment/Comment";
import css from '../../App.module.css';


const Comments = () => {

    const {comments, status, error, start, limit} = useSelector(state => state['commentReducer']);
    let dispatch = useDispatch();

    console.log(start)

    const prev = () => {
        dispatch(limitsComment({type:'prev'}))
    };
    const next = () => {
        dispatch(limitsComment({type:'next'}))
    };

    useEffect(() => {
        dispatch(getAllComments({start, limit}))
    }, [start, limit]);

    return (
        <div className={css.items}>

            <h1 className={css.h1}>All comments</h1>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}

            <div className={css.buttons_menu}>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>

        </div>
    );
};

export {Comments};