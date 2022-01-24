import {useEffect, useState} from "react";

import Post from "../Post/Post";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(post => setPosts(post))
    }, [])

    return (
        <div className={'posts'}>
            {posts.map(value => <Post key={value.id}
                                      userId={value.userId}
                                      id={value.id}
                                      title={value.title}
                                      body={value.body}
            />)}
        </div>
    );
};