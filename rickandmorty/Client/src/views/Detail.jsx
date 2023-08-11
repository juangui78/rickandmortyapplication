import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./DetailStyle.module.css"
import { TextRectangle } from "../components/Card/DivCard";

export default function Detail () {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     
     const OriginName = character.origin && character.origin.name
    return(
        <div className={style.generalDiv}>
            <div className={style.divData}>
                <div className={style.textSpace}><h1 className={style.nameCharacter}>{character.name}</h1></div>
                <div><h2>
                    Status: <span className={style.dataCharacter}>{character.status}</span>
                    </h2></div>
                <div><h2>
                    Species: <span className={style.dataCharacter}>{character.species}</span>
                    </h2></div>
                <div><h2>
                    Gender: <span className={style.dataCharacter}>{character.gender}</span>
                    </h2></div>
                <div><h2>
                    Origin: <span className={style.dataCharacter}>{OriginName}</span>
                    </h2></div>
            </div>
            <div>
                <img src={character.image} className={style.divImg}/>
            </div>
        </div>
    )
}