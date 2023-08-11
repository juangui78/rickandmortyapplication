import Form from "../components/Form/Form";
import background from "../components/assets/loginback.png";
import style from "./LoginStyle.module.css"

export default function Login (props) {
    return(
        <div style={{backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        position: "absolute"
        }}> 
            <Form login={props.login} invited={props.invited}/>
        </div>
        
    )
}