import React from 'react';
import {NavLink} from "react-router-dom";

const NotFoundPage = ()=> {
    return (
        <div className={'page-item'}>
            <h2>Error</h2>
            <h1>404</h1>
            <p>Page not found. Click to go <NavLink to="/">Home page</NavLink></p>
        </div>
    );
}

export default NotFoundPage;