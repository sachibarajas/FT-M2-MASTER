import s from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
      <button className={s.Submit} onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
