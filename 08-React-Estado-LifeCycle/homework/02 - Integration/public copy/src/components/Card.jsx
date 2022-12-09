import s from './Card.module.css';

export default function Card(props) {
   return (
      <div className={s.cardContainer}>
         <button className={s.closeButton} onClick={props.onClose}>X</button>
         <div className={s.headDiv}>
            <img src={props.image} alt="img" />
            <h2 className={s.name }>{props.name}</h2>
         </div>
        
         <div className={s.infoDiv}>
            <h2>{props.species} </h2>
            <h2>{props.gender} </h2>
         </div>
         
        
      </div>
   );
}
