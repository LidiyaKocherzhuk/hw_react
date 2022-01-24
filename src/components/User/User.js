export default function User(props) {
    const {id, name, username, email, street, suite, city,zipcode, lat, lng,phone,website} = props;

    return (
        <div className={'user'}>
            <div><strong>id:</strong> {id}</div>
            <div><strong>name:</strong> {name}</div>
            <div><strong>username:</strong> {username}</div>
            <div><strong>email:</strong> {email}</div>
            <div><strong>address:</strong> <div className={'m-left'}>street: {street}</div>
                <div className={'m-left'}><strong>suite:</strong> {suite}</div>
                <div className={'m-left'}><strong>city:</strong> {city}</div>
                <div className={'m-left'}><strong>zipcode:</strong> {zipcode}</div>
                <div className={'m-left'}><strong>geo:</strong> <div className={'m-left'}><strong>lat:</strong>{lat}</div>
                    <div className={'m-left'}><strong>lng:</strong>{lng}</div>
                </div>
            </div>
            <div><strong>phone:</strong> {phone}</div>
            <div><strong>website:</strong> {website}</div>
            <hr/>

        </div>
    );
}