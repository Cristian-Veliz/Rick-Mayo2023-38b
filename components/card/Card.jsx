import { addFav, removeFav } from '../../redux/actions';
import { Link } from "react-router-dom";
import styles from './Card.module.css'
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

function Card(props) {
   // props= { addFav: f(characters), remoFav(id)}  con connec se agrega a las props de Card
 const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props

 const [isFav, setIsfav] = useState(false);  // creo un estado y lo seteo en false

 useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsfav(true);
      }
   });
}, [myFavorites]);



 const handleFavorite = () => {
   if(isFav){
      setIsfav(false);
      removeFav(id)
   }else{
      setIsfav(true)
      addFav(props)
   }
 }
   return (
      <div className={styles.container}>
{
    isFav ? (
      <button className={styles.favoritos} onClick={handleFavorite}>❤️</button>
   ) : (
      <button className={styles.favoritos} onClick={handleFavorite}>🤍</button>
   )
}   

         <button onClick={() => onClose(id)} className={styles.cerrarBoton}> X </button>
         <Link className={styles.text} to={`/detail/${id}`}>
         <img className={styles.img} src={image} alt={name} />
         <h3>Name: {name}</h3>
         <h3>Especies: {species}</h3>
         <h3>Gender: {gender}</h3>
         {/* <h2>Origin: {origin}</h2> */}
         </Link>
      </div >
   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispathToProps = (dispatch) => {   // esta funcion retorna un {} con mis 2 metodos (ADDFAV y Remove)
   return {
addFav: (character) => dispatch(addFav(character)),
removeFav: (id) => dispatch(removeFav(id))

   }
}

export default connect(mapStateToProps, mapDispathToProps)(Card);   
//connect recibe 2 parametros (Que traigo de la store?, que quiero despachar?)(el componente)
//                                             1er parametro                   2do parametro

// null si no necesito nada de la store
//connect maneja un estado global
//el hook use effect solo se usa en componente funcional, recordad que simula el ciclo de vida de un componente de clase.