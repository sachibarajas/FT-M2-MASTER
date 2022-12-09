import s from './Card.module.css';
import {Link} from 'react-router-dom';

export default function Card(props) {
   console.log(props)
   return (
      <div className={s.cardContainer}>
         <button className={s.closeButton} onClick={props.onClose}>X</button>
         <div className={s.headDiv}>
            <img src={props.image} alt="img" />
            <Link to={`/detail/${props.id}`} ><h2 className={s.name }>{props.id}. {props.name}</h2></Link >
         </div>
        
         <div className={s.infoDiv}>
            <h2>{props.species} </h2>
            <h2>{props.gender} </h2>
         </div>
      </div>
   );
}
