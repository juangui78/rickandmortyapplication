export default function validate(userData) {
    const errors = {}

    const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!userData.email) {
        errors.email = "Ingresa un correo electrónico"
    } else if (userData.email.length > 35) {
        errors.email = "No se permiten mas de 35 caracteres"
    } else if (!regexEmail.test(userData.email)) {
        errors.email = "Correo electronico no valido"
    } else {
        errors.email = ""
    }

    if (!userData.password) {
        errors.password = "Ingresa una contraseña"
    } else if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "Tu contraseña debe tener entre 6 y 8 caracteres"
    }   else {
        errors.password = ""
    }


    return errors;
}