import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Nav.module.css'
const Nav = () => {
    return (
        <div className={s.Nav}>
             <NavLink to = '/Profile'>
                 Profile
             </NavLink>
            <NavLink to = '/Messages'>
                 Messages
            </NavLink>
            <NavLink to = '/Users'>
                 Users
             </NavLink >
            <NavLink to = '/Music'>
                 Music
             </NavLink>


        </div>
    );
};

export default Nav;