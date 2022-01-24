import {useEffect, useState} from "react";

import User from "../User/User";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => setUsers(user))
    }, [])

    return (
        <div className={'users'}>
            {users.map(value => <User key={value.id}
                                      id={value.id}
                                      name={value.name}
                                      username={value.username}
                                      email={value.email}
                                      street={value.address.street}
                                      suite={value.address.suite}
                                      city={value.address.city}
                                      zipcode={value.address.zipcode}
                                      lat={value.address.geo.lat}
                                      lng={value.address.geo.lng}
                                      phone={value.phone}
                                      website={value.website}
            />)}
        </div>
    );
}

export default Users;