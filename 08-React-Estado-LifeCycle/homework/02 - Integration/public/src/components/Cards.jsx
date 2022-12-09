import Card from './Card';
import s from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={s.cardsContainer}>
         {characters.map((characters,index)=>(
           
            <Card
               key={index}
               name={characters.name}
               species={characters.species}
               gender={characters.gender}
               image={characters.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
             />
         ))}
      </div>
   );
}
