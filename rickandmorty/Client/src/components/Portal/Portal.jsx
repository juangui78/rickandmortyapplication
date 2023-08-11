import image from '../assets/portalto.png';
import style from './PortalStyle.module.css';
export default function Portal () {
    return(
        <img src={image} className={style.image}></img>
    )
}