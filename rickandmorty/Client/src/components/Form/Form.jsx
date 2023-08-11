import { useState } from "react"
import style from "./Form.module.css"
import validate from "./validation"
export default function Form (props){
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
        setErrors(
            validate({...userData, [event.target.name]: event.target.value})
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(userData)

    }
    return(
        <div>
            <form className={style.form}>
                <label className={style.inputTexts}>Email:</label>
                <input className={style.inputForm}
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
                />
                <label className={style.warning}>{errors.email}</label>

                <label className={style.inputTexts}>Password:</label>
                <input className={style.inputForm}
                type="text"
                name="password"
                value={userData.password}
                onChange={handleChange}
                />
                <label className={style.warning}>{errors.password}</label>
            
                
                <button className={style.buttons} type="submit" onClick={handleSubmit}>Login</button>
                <button className={style.buttons} type="submit" onClick={props.invited}>Login as Guest</button>
            </form>
        </div>
    )

}

