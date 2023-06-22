import React, { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "../nav/Nav.module.css";





const Nav = (props) =>{
    const[access, setAccess] = useState({});    
return(
    <div className={styles.nav}>
        <NavLink to='/home'>
            <button>Home</button>
        </NavLink>
        <NavLink to='/favorites'>
        <button>Favorites</button>
        </NavLink>
        <NavLink to='/about'>
            <button>About</button>
        </NavLink>
        <NavLink to='/'>
            <button onClick={() => setAccess(false)}>Logout</button>
        </NavLink>




       <SearchBar onSearch={props.onSearch} />
    </div>
)

}







export default Nav;