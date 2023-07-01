// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import style from "./Navbar.module.css";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
        // console.log('soy un click', click)
    }

    const close = () => {
        setClick(false)
        // console.log('soy open', click)
    }

    return (
        <nav className={style.navbar}>
            <div className="container">
                <div className={style.navbar_content}>
                    <div className={style.brand_and_toggler}>
                        <a href="#" alt='' className={style.navbar_brand}>
                            <h1>star wars</h1>
                        </a>
                        <button
                            type='button'
                            className={style.navbar_show_btn}
                            onClick={handleClick}
                        >
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: 32 }} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
