import s from './SearchBar.module.css'
import React, { useState } from 'react';

export default function SearchBar(props) {
   const {onSearch} = props;
   const [character,setCharacter] = useState("");
   const handleChange = (e) => {
      setCharacter(e.target.value);
   }
   return (
      <div>
         <input className={s.Input} type='search' onChange={handleChange} value={character} />
         <button className={s.Submit} onClick={()=> onSearch(character)} >Agregar</button> 
      </div>
   );
}
