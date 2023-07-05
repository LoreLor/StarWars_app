/* eslint-disable react/prop-types */
import style from './Character.module.css';

const Character = ({name, height}) => {
  return (
    <div className={style.card}>
        <div className={style.content}>
            <figcaption className={style.front}>
                <h1 className={style.title}>{name}</h1>
            </figcaption>
            <figcaption className={style.back}>
                <p className={style.description}>
                    {height}    
                </p>
            </figcaption>

        </div>
</div>
  )
}

export default Character
