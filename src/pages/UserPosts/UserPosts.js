import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {userService} from "../../services/api.service";
import UserPost from "../../components/UserPost/UserPost";

const UserPosts = () => {

    const location = useLocation();
    const id = location.state.id;
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        userService.getIdPosts(id)
            .then(posts => setPosts(posts))
    },[id])

    return (
        <div>
            {posts.map(post => <UserPost key={post.id} item={post} />)}
        </div>
    );
};

export default UserPosts;