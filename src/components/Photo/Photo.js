import React from 'react';

import './Photo.css'

const Photo = ({item}) => {
    const {albumId, title, thumbnailUrl} = item;

    return (
        <div className={'photo'}>
            <img src={`${thumbnailUrl}.link`} alt="picture"/>
            <div>
                <h3>albumId: {albumId}</h3>
                <h3>title: {title}</h3>
            </div>
        </div>
    );
};

export default Photo;