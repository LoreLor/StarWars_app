/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Characters.module.css'
import Character from './character/Character'
import { getCharacters } from '../../store/actions/characters_actions'
import Loader from '../loaders/Loader'
import MessageBox from '../message_box/MessageBox'



const Characters = () => {
  const dispatch = useDispatch();
  const characterList = useSelector((state) => state.characters.characters);
  const loading = useSelector((state) => state.characters.loading);
  const error = useSelector((state) => state.characters.error);


  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);



  return (
    <section id="characters" className={style.characters}>
      <div className="container">
        <div className={style.section_title}>
          <h2 className={style.title}>characters</h2>
        </div>
        <div className={style.content}>
          {loading ? (
            <Loader />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            characterList.map((c) => {
              return (
              <div data-aos="fade-up" data-aos-duration="3000" key={c._id}>
              <Character
                  _id={c._id}
                  name={c.name}
                  gender={c.gender}
                  homeworld={c.homeworld}
                  films={c.films}
                  image={c.image}
              />
              </div>
            )}))
          }
        </div>
      </div>
    </section>
  );
};

export default Characters;
