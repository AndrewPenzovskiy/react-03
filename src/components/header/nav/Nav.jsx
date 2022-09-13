import React from "react";
import './Nav.css'
import {NavLink} from "react-router-dom";

const Nav = ({navData}) => {
    console.log(navData);
    return (
        <nav>
            {/*{navData.map((item, i) => (*/}
            {/*    <a href='#' key={`id-${i}`}>{item}</a>*/}
            {/*))}*/}
            <NavLink to={'/'} className={'item'}>Home</NavLink>
            <NavLink to={'/about-me'} className={'item'}>About me</NavLink>
            <NavLink to={'/portfolio'} className={'item'}>Portfolio</NavLink>
            <NavLink to={'/contact'} className={'item'}>Contact</NavLink>
        </nav>
    )
}
export default Nav