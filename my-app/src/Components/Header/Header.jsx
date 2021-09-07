import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import Preloader from "../Preloader/Preloader";


const Header = (props) => {
    debugger

    return (
        <div className={s.Header}>
            <div className={s.Header_Logo}>
                <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/23197467/original/7fe4f022a60d8c54335a09d1ed3ad86b86df63f6/design-an-impressive-logo.jpg" alt="#"
                     className={s.img}/>
            </div>
            <div className={s.auth}>
                {props.isAuth ?

                    <div className={s.authAcountImgAndLogin}>
                        <img src={props.userProfile ? "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
                            : <Preloader />}


                               alt="#" className={s.authImg}/>
                        {props.login}
                    </div>
                    : <NavLink to='/Login'>
                        Login
                    </NavLink>

                }
            </div>

        </div>
    );
};

export default Header;