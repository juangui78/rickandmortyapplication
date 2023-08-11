import Card from "../Card/Card"
import { DivCards } from "./DivCards";
import style from './sizestyle.module.css'
export default function Cards(props){
    const { characters, onClose } = props;
    return <DivCards>
        {characters.map((character) => (
            
            <div className={style.sizeDiv} key={character.id}><Card 
            id={character.id}
            name={character.name} 
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            img={character.image}
            
            onClose={() => onClose(character.id)}/>
            </div>
        ))}
    </DivCards>
}