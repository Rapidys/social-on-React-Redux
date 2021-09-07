import React from 'react';
import img from "../../img/preloader.gif";
import s from './Preloader.module.css'
const Preloader = () => {
    return (
        <div className={s.Preloader}>
            <img src = {img} alt="preloader"/>
        </div>
    );
};

export default Preloader;