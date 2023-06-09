import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites";

import { connect } from "react-redux";
import { addFav, removeFav } from "./redux/actions";

//revisar bien la importaciones de los componentes y hooks

function App({ removeFav }) {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function logout(access) {
    setAccess(false);
    navigate("/");
  }

  const onSearch = async (id) => {
    try {
      // Para evitar duplicados
      const characterId = characters.filter(
        (character) => character.id === Number(id)
      );
      console.log(characterId);
      if (characterId.length) return alert("¡The character already exists!");
      if (id < 1 || id > 826)
        return alert("¡There is no character with the entered ID!");

      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      //console.log(data)
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡There is no character with the entered ID!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((element) => element.id !== Number(id)));
    removeFav(Number(id));
  };

  const location = useLocation();
  //console.log(location)

  return (
    <div className="App">
      {
        location.pathname !== "/" && <Nav logout={logout} onSearch={onSearch} />

        // El && si el 1ro es true retorna el segundo
      }

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

function mapDispatch(dispatch) {
  return {
    addFav: function (char) {
      dispatch(addFav(char));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export default connect(null, mapDispatch)(App);

//Notas:
// recordar instalar axios 'npm install axios' e importar axios!
//recordar instalar todas las dependencias en el package.json

// nota3
