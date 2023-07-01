// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './Header.module.css'


const Header = () => {
  return (
    <header className={style.header} id='header'>
        <div className="container">
          <div className={style.header_bg}>
              <div className={style.header_content}>
                  <div  className={style.header_title}>
                    <span>Episode IX</span>
                    <h1>
                        THE RISE OF SKYWALKER
                    </h1>
                  </div>
                  <p className={style.header_description}>
                    The dead speak! The galaxy has
                    heard a mysterious broadcast,
                    a threat of REVENGE in the
                    sinister voice of the late
                    EMPEROR PALPATINE.
                  </p>
                  <p className={style.header_description}>
                    GENERAL LEIA ORGANA
                    dispatches secret agents to
                    gather intelligence, while REY,
                    the last hope of the Jedi, trains
                    for battle against the diabolical
                    FIRST ORDER.
                  </p>
                  <p className={style.header_description}>
                    Meanwhile, Supreme Leader
                    KYLO REN rages in search
                    of the phantom Emperor,
                    determined to destroy any
                    threat to his power....
                  </p>  
              </div>
          </div>
        </div>
    </header>
  )
}

export default Header
