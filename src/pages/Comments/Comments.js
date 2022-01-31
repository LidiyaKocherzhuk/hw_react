import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/slices/comment.slice";
import {Comment} from "../../componetnts/Comment/Comment";
import css from '../../App.module.css';


const Comments = () => {

    const {comments, error} = useSelector(state => state['commentReducer']);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, []);

    return (
        <div className={css.items}>

            {error && <h2>{error}</h2>}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export {Comments};