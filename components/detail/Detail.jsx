import axios from "axios";
import styles from './Detail.module.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = (props) => {

   const {id} = useParams();
   const [character, setCharacter] = useState({});

   useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return(
       <div className={styles.container}>
            
            <h1>{character.name}</h1>
            <img className={styles.img} src={character.image} alt={character.name} />
            <h3>Origin | {character.origin?.name}</h3>
            <h3>Specie | {character.species}</h3>
            <h3>Gender | {character.gender}</h3>
        </div>
    )
}


export default Detail;
