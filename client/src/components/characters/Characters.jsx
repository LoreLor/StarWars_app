/* eslint-disable no-unused-vars */
import React from 'react'
import style from './Characters.module.css'
import Character from './character/Character'

const Characters = () => {
  return (
    <section id="characters" className={style.characters}>
        <div className="container">
            <div className={style.section_title}>
                <h2 className={style.title}>characters</h2>
            </div>
            <Character name={'lorena'}
            height={'1.74'} />
        </div>
    </section>
  )
}

export default Characters
