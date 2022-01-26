import React from 'react';
import {Episodes} from "../Eposodes/Episodes";

const EpisodesPage2 = () => {
    return (
        <div>
            <Episodes namber={{page: '2', prev: '1', next: '3'}}/>
        </div>
    );
};

export {EpisodesPage2};