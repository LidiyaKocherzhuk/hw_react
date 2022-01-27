import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>

            <div className={'header'}><Link to={'/page1'}>Rick and Morty!</Link></div>
            <Outlet/>

        </div>
    );
};

export {Layout};