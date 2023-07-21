/* eslint-disable react/prop-types */
import style from './Character.module.css';

const Character = ({_id, name, gender, homeworld, films, image}) => {
  return (
    <div className={style.card} key={_id}>
        <div className={style.content}>

            <figcaption className={style.front}>
                <h1 className={style.title}>{name}</h1>
                <p className={style.subtitle}>Home: {' '}
                    {homeworld?.name}
                </p>
                <p className={style.subtitle}>Gender: {' '} {gender}</p>
                <div  className={style.card_image}>
                    <img src={image} alt="character_image" className={style.imageChar}/>
                </div>
            </figcaption>

            <figcaption className={style.back}>
                <h1 className={style.title}>Planet:  {name}</h1>
                <p className={style.description}>
                    {films.map((film) => (
                    <li key={film._id}>{film.title}</li>
                    ))}    
                </p>

            </figcaption>
        </div>
    </div>
    )
}

export default Character
