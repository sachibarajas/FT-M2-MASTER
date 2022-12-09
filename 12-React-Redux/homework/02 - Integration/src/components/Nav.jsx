import SearchBar from "./SearchBar";
import s from "./Nav.module.css";
import { Link } from 'react-router-dom';


export default function Nav(props){

    return(
    <div className={s.navContainer}>
        <Link className={s.link} to='/home'>Home</Link>
        <Link className={s.link} to='/about' >About</Link>
        <SearchBar onSearch={props.onSearch} />
    </div>
    )
}