import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./views/Home";
import Detail from "./views/Detail";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from "./views/Abbout";
import Login from "./views/Login";
import Favorites from './views/Favorites.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)
  const EMAIL = "invited@rnm.com"
  const PASSWORD = "1234567"
  const navigate = useNavigate();

  // function login(userData){
  //   if (userData.email === EMAIL && userData.password === PASSWORD) {
  //     setAccess(true)
  //     navigate("/home")
  //   } else {
  //     alert("Datos Incorrectos")
  //   }
  // }

  function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login';
   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
   }).catch((error) => alert('Datos Incorrectos'))
  }


  function signInvited(event){
    setAccess(true)
    event.preventDefault()
    navigate("/home")
  }

  function logout(){
    setAccess(false)
    window.location.reload()
  }

  useEffect(() => {
    !access && navigate("/")
  }, [access])

  function onSearch(id) {

    if(id === '') return;
    if(id > 826) {
      window.alert('Este personaje no existe!')
      return;
    }

    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters([data, ...characters]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id){
   setCharacters(characters.filter((character) => character.id !== id));
 }

  function onRandom() {
  let randomId = Math.ceil(Math.random() * 826);
  onSearch(randomId);
}

  const location = useLocation();

  return (
    <div className="App">
      
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} onRandom={onRandom} logout={logout}/>)}
      <Routes>
        <Route path="/" element={<Login login={login} invited={signInvited}/>}></Route>
        <Route path="/home" element={<Home characters={characters} onClose={onClose}></Home>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/favorites" element={<Favorites onClose={onClose}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
