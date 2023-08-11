import Logo from "../components/Logo/Logo";
import Cards from "../components/Cards/Cards";
export default function Home (props) {
    return(
        <div>
            <Logo/>
            <Cards characters={props.characters} onClose={props.onClose}/>
        </div>
    )
}