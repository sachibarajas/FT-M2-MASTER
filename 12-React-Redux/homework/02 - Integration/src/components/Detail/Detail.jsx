import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import s from './Detail.module.css'


export default function Detail(){
    const {detailId} = useParams();
    
    const [character , setCharacter] = useState()
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/home')
    }
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);
     console.log(character)
    return <div>
        {character ? (
        <div>
            <div>
                <h1>{character.name}</h1>
                <h5>STATUS: {character.status}</h5>
                <h5>SPECIE: {character.species}</h5>
                <h5>GENDER: {character.gender}</h5>
                <h5>ORIGIN: {character.origin?.name}</h5>
            </div>
            <img src={character.image} alt={character.name} />
        </div>
        ) : ("") }
        <button onClick={handleClick}>Home</button>
    </div>
}