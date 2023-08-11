import image from '../assets/juan.png'
import style from './JuanStyle.module.css'
export default function Juan () {
    return(
        <div>
            <img src={image} className={style.image}></img>
        </div>
    )
}