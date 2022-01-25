import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {userService} from "../../services/api.service";
import Album from "../../components/Album/Album";

const Albums = () => {

    const {userId} = useParams()
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userService.getIdAlbums(userId)
            .then(albums => setAlbums(albums));
    }, [userId])

    return (
        <>

            <div>
                { albums.map(album => <Album key={album.id} album={album}/>) }

                <Outlet/>

            </div>


        </>
    );
};

export default Albums;