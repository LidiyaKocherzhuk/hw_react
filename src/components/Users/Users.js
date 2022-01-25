import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import User from "../User/User";
import UserDetail from "../UserDetail/UserDetail";
import {postService} from "../../services/post.service";
import Posts from "../Posts/Posts";
import './Users.css';


const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [postsId, setPostsId] = useState([]);


    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    const getUserId = (id) => {
        userService.getById(id)
            .then(user => {
                setUser(user)
                setPostsId([])
            })
    }

    const getPostsUserId = (id) => {
        postService.getPosts(id)
            .then(posts =>
                setPostsId(posts.data)
            )
    };

    return (
        <div className={'title'}>
            <div className={'users'}>{users.map(value => <User key={value.id} user={value}
                                                               getUserId={getUserId}/>)}</div>
            <div className={'users'}>{user && <UserDetail user={user}
                                                           getPostsUserId={getPostsUserId}/>}</div>
            <div className={'posts'}>{postsId.map(value => <Posts key={value.id} post={value}/>)}</div>
        </div>
    );
};

export default Users;