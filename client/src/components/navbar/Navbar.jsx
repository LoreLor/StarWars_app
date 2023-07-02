// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo_wars from '../../assets/logo_wars.png'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = () => {
        setOpenMenu(!openMenu)
        console.log('soy un click', openMenu)
    }

    return (
        <nav className={style.navbar}>
            <div className="container">
                <div className={style.navbar_content}>
                    <div className={style.brand_and_toggler}>
                        <a href="#" alt='' className={style.navbar_brand}>
                            <img src={logo_wars} alt="logo_wars" />
                        </a>
                        <button
                            type='button'
                            className={style.navbar_show}
                            onClick={handleClick}
                        >
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: 32 }} />
                        </button>
                    </div>
                    
                    <div className={`${style.navbar_collapse} ${openMenu ? style.navbar_show : ''}`}>
                        <button
                            type="button"
                            className={style.navbar_hide}
                            onClick={handleClick}
                        >
                            <FontAwesomeIcon icon={faXmark} style={{ fontSize: 32 }} />
                        </button>

                        <ul className={style.navbar_nav}>
                            <li className={style.nav_item}>
                                <a href="#header" className={style.nav_link}>intro</a>
                            </li>
                            <li className={style.nav_item}>
                                <a href="#characters" className={style.nav_link}>characters</a>
                            </li>
                            <li className={style.nav_item}>
                                <a href="#films" className={style.nav_link}>films</a>
                            </li>
                            <li className={style.nav_item}>
                                <a href="#planets" className={style.nav_link}>planets</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
