import {useEffect, useState} from "react";

import Comment from "../Comment/Comment";

export default function Comments() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comment => setComments(comment))
    }, [])

    return (
        <div className={'comments'}>
            {comments.map(value => <Comment key={value.id}
                                            postId={value.postId}
                                            id={value.id}
                                            name={value.name}
                                            email={value.email}
                                            body={value.body}
            />)}
        </div>
    );
};