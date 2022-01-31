import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './Layout.css'

const Layout = () => {

    return (
        <div>

            <div className={'menu'}>
                <button><NavLink to='/'>Cars</NavLink></button>
                <button><NavLink to='users'>Users</NavLink></button>
                <button><NavLink to='posts'>Posts</NavLink></button>
                <button><NavLink to='comments'>Comments</NavLink></button>
            </div>

            <Outlet/>

        </div>
    );
};

export {Layout};