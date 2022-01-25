const User = ({user:{id, name, username}, getUserId}) => {
    return (
        <div>
            <h3>
                {id}) {name} {username}__
                <button onClick={()=>getUserId(id)}>Get Details</button>
            </h3>
        </div>
    );
};

export default User;