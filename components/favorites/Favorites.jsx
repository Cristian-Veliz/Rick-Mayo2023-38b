import { connect } from "react-redux";
import Card from "../card/Card";
import styles from '../favorites/Favorites.module.css'








const Favorites = ({myFavorites}) => {


 return(
    <div className={styles.favorita}>
        
        {
           myFavorites?.map(({ id, name, status, species, gender, origin, image }) => {
            return(
             <Card
               key= {id}
               id= {id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               image={image}
               origin={origin}
               
             />
            )
            })
        }
    </div>
 )   
}

const mapStateToProps = (state) => {
    return {
     myFavorites: state.myFavorites
    }
}


export default connect(mapStateToProps, null)(Favorites);