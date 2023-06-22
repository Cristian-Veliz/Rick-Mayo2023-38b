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

   const randomChar = () => {
      const numRan = Math.floor(Math.random() * 825) + 1;
      onSearch(numRan);
   }

   return (
      <div className={styles.container}>
         <input 
         value={id}
         type='text'
         name= 'search'
         id= 'search'
         placeholder="Enter character id of 826..."
         onChange={handleChange} 
         />
         <button onClick={handleOnClick}>Search</button>
         <button onClick={randomChar}>Random</button>
        
      </div >
   );
}

// handleChange es como un manejador que esta vinculado al evento 
// onChange lo uso para cuando el usuario hace cambios
// onClick lo uso para cuando el usuario hace click, recordar pasar la funcion como callback para que solo se ejecute cuando el usuario haga click