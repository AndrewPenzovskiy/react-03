import './layout.css'
import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

const Layout = () => {
    return (
        <div className={'layout'}>
            <Header />
            <Outlet />
            <Main />
            <Footer />

        </div>
    );
};

export default Layout;