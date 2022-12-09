import SearchBar from "./SearchBar"
import s from "./Nav.module.css"

export default function Nav(props){

    return(
    <div className={s.navContainer}>
        <SearchBar onSearch={props.onSearch} />
    </div>
    )
}