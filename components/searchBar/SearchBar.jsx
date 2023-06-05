import { useState } from "react";
import styles from "./Searchbar.module.css";


export default function SearchBar({onSearch}) {
   const[id, setId] = useState('');

   const handleChange = event =>{
      const{value} = event.target;
      setId(value);
      console.log('id: ', id);
   }

   const handleOnClick = event =>{
      event.preventDefault();
      {onSearch(id)};
      setId(''); 
   }

   return (
      <div className={styles.container}>
         <input 
         value={id}
         type='text'
         name= 'search'
         id= 'search'
         placeholder="Enter character id..."
         onChange={handleChange} 
         />
         <button onClick={handleOnClick}>SEARCH</button>
         {/* <button onClick={() => onSearch(id)}>AGREGAR</button> */}
      </div >
   );
}

// handleChange es como un manejador que esta vinculado al evento 
// onChange lo uso para cuando el usuario hace cambios
//onClick lo uso para cuando el usuario hace click, recordar pasar la funcion como callback para que solo se ejecute cuando el usuario 
//haga click
