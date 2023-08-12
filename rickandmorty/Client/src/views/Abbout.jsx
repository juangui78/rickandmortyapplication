import Juan from "../components/Juan/Juan";
import Portal from "../components/Portal/Portal";
import style from "./AboutStyle.module.css"
export default function About () {
    return(
        <div>
            <h1 className={style.subt}>
                Hey, I am <span className={style.title}>Juan</span>
            </h1> 
            <div className={style.divFather}>
                <div className={style.divContainer}>
                    <div className={style.rotateImage}><Portal/></div>
                    <Juan/>
                </div>
            </div>
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 className={style.title}>This is my first project using REACT, REDUX, EXPRESS and POSTGRES</h3>
                <p className={style.subt}>You are able to search cards from Rick and Morty characters!
                <br></br>
                And add it to your favs!</p>
                <p className={style.subt}>Full Stack Developer in making</p>
                
            </div>
            
        </div>
    )
    
}