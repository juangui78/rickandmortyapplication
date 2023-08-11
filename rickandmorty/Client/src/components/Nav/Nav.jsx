import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import NavStyle from "./Nav.module.css";
import { ButtonTexture } from "../ButtonTexture/ButtonTexture.js";
import { ButtonRandom } from "../ButtonTexture/ButtonRandom.js";
import { ButtonRed } from "../ButtonTexture/ButtonRed.js";
export default function Nav(props) {
    
    return(
        <div>
            <div className={NavStyle.buttonsDiv}>
                <NavLink to="/home"><ButtonTexture className={NavStyle.homeButton}>Home</ButtonTexture></NavLink>
                <NavLink to="/favorites"><ButtonTexture className={NavStyle.favButton}>Favorites</ButtonTexture></NavLink>
                <NavLink to="/about"><ButtonTexture className={NavStyle.aboutButton}>About</ButtonTexture></NavLink>
                <SearchBar className='search' onSearch={props.onSearch}/>
                <ButtonTexture className={NavStyle.homeButton} onClick={props.onRandom}>Random</ButtonTexture>
                <ButtonRed className={NavStyle.homeButton} onClick={props.logout}>Logout</ButtonRed>
            </div>
        
        
        
        </div>
    )
}