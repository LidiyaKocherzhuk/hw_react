import './Posts.css';

export default function Posts ({post}) {

    return (
        <div className={'post'}>
            <h4>userId:  {post.userId}</h4>
            <h4>id:  {post.id}</h4>
            <h4>title:  {post.title}</h4>
            <h4>body:  {post.body}</h4>
        </div>
    );
}