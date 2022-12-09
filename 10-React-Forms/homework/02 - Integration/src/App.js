import s from './App.module.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import React, {useEffect} from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';


export default function App () {

  const [characters, setCharacters] = React.useState([])
  const [access,setAccess] = React.useState(false);
  const username = 'barajas03@gmail.com'
  const password = 'sbs123'
  const location = useLocation();
  const navigate = useNavigate();

  function login(userData){
    if(userData.username===username && userData.password===password){
      setAccess(true);
      navigate('/home');
    } else{
      alert('Datos incorrectos')
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  
  const onSearch = (character)=>{

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
        {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      </div>
      <Routes>
        <Route path='/' element={<Form login={login}/>} />
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

 
