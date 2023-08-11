import myImage from '../assets/logo.png';
import { StyleLogo } from './DivLogo';


export default function Logo(props) {
    return (
        <div>
            <StyleLogo src={myImage}/>
        </div>
    
    );
}

