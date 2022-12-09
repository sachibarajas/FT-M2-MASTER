const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export function validation(userData){
    let errors = {}
    if (!userData.username) errors.username = 'Ingrese un usuario'
    else if (!regexEmail.test(userData.username)) errors.username = 'El usuario debe ser un email'
    else if (userData.username.length>35) errors.username = 'Usuario demasiado largo'

    if (!regexPassword.test(userData.password)) errors.password = 'La password debe tener al menos un numero'
    else if(userData.password<6 && userData.password>10) errors.password= 'la password debe tener una longitud entre 6 y 10 caracteres'

    return errors
}