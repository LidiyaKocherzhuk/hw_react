import './UserDetail.css';

export default function UserDetail ({user, getPostsUserId}) {
    console.log(user)

    return (
        <div className={'user'}>
            <div className={'userDetails'}>
                <h3>id:  {user.id}</h3>
                <h3>name:  {user.name}</h3>
                <h3>username:  {user.username}</h3>
                <h3>email:  {user.email}</h3>
                <h3>address:</h3>
                <div>
                    <h4>street:  {user.address.street}</h4>
                    <h4>suite:  {user.address.suite}</h4>
                    <h4>city:  {user.address.city}</h4>
                    <h4>zipcode:  {user.address.zipcode}</h4>
                    <h4>geo:</h4>
                    <div>
                        <h5>lat:  {user.address.geo.lat}</h5>
                        <h5>lng:  {user.address.geo.lng}</h5>
                    </div>
                </div>
                <h3>phone:  {user.phone}</h3>
                <h3>website:  {user.website}</h3>
                <h3>company:</h3>
                <div>
                    <h4>Company:  {user.company.name}</h4>
                    <h4>catchPhrase:  {user.company.catchPhrase}</h4>
                    <h4>bs:  {user.company.bs}</h4>
                </div>
            </div>
            <button onClick={()=>getPostsUserId(user.id)}>Get Posts</button>

        </div>
    );
};