
import style from './SearchBar.module.css'
import Random from './random/Random'
import Search from './search/Search'

const searchBar = () => {
    return (
        <div className={style.searchBar}>
            <Search />
            <Random />
        </div>
    )
}

export default searchBar
