import s from './App.module.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import React from 'react';
import { Routes, Route } from 'react-router-dom';


export default function App () {

  const [characters, setCharacters] = React.useState([])
  
  const onSearch = (character)=>{
  //   const example = {
  //     name: 'Morty Smith',
  //     species: 'Human',
  //     gender: 'Male',
  //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //  };
  //  setCharacters([...characters,example])
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
      } else {
          window.alert('No hay personajes con ese ID');
      }
    });
  }

  const onClose = (id) =>{
    setCharacters(characters.filter(char => char.id !== id))
  }

  return (
    <div className={s.App} style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <hr/>
      <Routes>
        <Route path='/home' element={<Cards
          characters={characters}
          onClose = {onClose}
        />}/>
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
      </Routes>
    
    </div>
  )
}

 
