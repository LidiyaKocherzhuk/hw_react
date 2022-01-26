import React, {useEffect, useState} from 'react';

import './Character.css'
import {urlFromEpisode} from "../../services/api.service";

const Character = ({item}) => {

    const [character, setCharacter] = useState({})

    useEffect(()=>{
        urlFromEpisode.getInfo(item)
            .then(value => setCharacter(value))
    },[])

    const {image, name, status, species, gender, origin={name}, location={name}} = character;


    return (
        <div className={'character'}>

            <img src={image} alt="picture"/>
            <h3>{name}</h3>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Species:</strong> {species}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Origin:</strong> {origin.name}</p>
            <p><strong>Location:</strong> {location.name}</p>

        </div>
    );
};

export {Character};