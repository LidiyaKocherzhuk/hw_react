export default function Comment (props) {

    const {postId, id, name, email, body} = props;

    return (
        <div className={'comment'}>
            <div><strong>postId:</strong> {postId}</div>
            <div><strong>id:</strong> {id}</div>
            <div><strong>name:</strong> {name}</div>
            <div><strong>email:</strong> {email}</div>
            <div><strong>body:</strong> {body}</div>
        </div>
    );
}