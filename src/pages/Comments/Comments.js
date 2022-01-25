import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Comment from "../../components/Comment/Comment";
import {postService} from "../../services/api.service";

const Comments = () => {

    const {id} = useParams()
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        postService.getIdComments(id)
            .then(comments => setComments(comments));
    },[])

    return (
        <div>

            {comments.map(value => <Comment key={value.id} item={value}/>)}

        </div>
    );
};

export default Comments;