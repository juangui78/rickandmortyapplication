import { TextBar, Button, ImgLogo } from "./DivSearchBar";
import Logo from '../assets/add.png';
import { useState } from "react";

export default function SearchBar(props) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      let { value } = event.target;
      setId(value)
   };
   return (
      <div>
         <TextBar type='search' placeholder="Personaje..." value={id} onChange={handleChange} />
         <Button onClick={() => props.onSearch(id)}><ImgLogo src={Logo}></ImgLogo></Button>
      </div>
   );
}
