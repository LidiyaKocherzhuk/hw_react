export default function Post(props) {

    const {userId, id, title, body} = props;

    return (
        <div className={'post'}>
            <div><strong>userId:</strong> {userId}</div>
            <div><strong>id:</strong> {id}</div>
            <div><strong>title:</strong> {title}</div>
            <div><strong>body:</strong> {body}</div>
            <hr/>
        </div>
    );
};