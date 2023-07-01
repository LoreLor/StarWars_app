// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './Header.module.css'
import bg_wars from '../../assets/star_landing.jpg'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <header className={style.header} id='header'>
        <Navbar />
        <div className="container">
            <div className={style.header_content}>
                <div className={style.header_content_left}>
                  <p className={style.header_description}>
                    The dead speak! The galaxy has
                    heard a mysterious broadcast,
                    a threat of REVENGE in the
                    sinister voice of the late
                    EMPEROR PALPATINE.

                    GENERAL LEIA ORGANA
                    dispatches secret agents to
                    gather intelligence, while REY,
                    the last hope of the Jedi, trains
                    for battle against the diabolical
                    FIRST ORDER.

                    Meanwhile, Supreme Leader
                    KYLO REN rages in search
                    of the phantom Emperor,
                    determined to destroy any
                    threat to his power....
                  </p>
                </div>
                <div className={style.header_content_right}>
                  <img src={bg_wars} alt='bg_swars' />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
