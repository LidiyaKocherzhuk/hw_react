import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import './Posts.css'
import {postService} from "../../services/api.service";
import Post from "../../components/Post/Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(posts => setPosts(posts));
    }, []);

    return (
        <>

            <div className={'posts'}>
                {posts.map(value => <Post key={value.id} item={value} />)}
            </div>

            <Outlet/>

        </>
    );
};

export default Posts;