import Card from '../card/Card';
import { CardsContenedor } from './styledComponents';

export default function Cards({characters, onClose}) {
   
   return (    
   <CardsContenedor>
      {
         
         characters.map(({ id, name, status, species, gender, origin, image }) => {
         return(
          <Card
            key= {id}
            id= {id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            image={image}
            origin={origin?.name}
            onClose={onClose}
          />
         )

      })
         
   }
   </CardsContenedor>
)};   

// La key es solo para uso interno de react, es un identificador