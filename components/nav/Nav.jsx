import React, { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "../nav/Nav.module.css";





const Nav = ({onSearch, logout}) =>{
      
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
            <button onClick={logout}>Logout</button>
        </NavLink>

        <SearchBar onSearch={onSearch} />
    </div>
)

}







export default Nav;