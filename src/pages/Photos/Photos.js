import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Photo from "../../components/Photo/Photo";
import {albumService} from "../../services/api.service";

const Photos = () => {

    const {albumId} = useParams()
    const [photos, setPhotos] = useState([]) ;

    useEffect(()=>{
        albumService.getId(albumId)
            .then(photos => setPhotos(photos))
    },[albumId])

    return (
        <div>
            {
                photos.map(value => <Photo key={value.id} item={value}/>)
            }
        </div>
    );
};

export default Photos;
