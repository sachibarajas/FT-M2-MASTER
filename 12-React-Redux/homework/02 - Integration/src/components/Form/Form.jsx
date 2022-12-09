import { useState } from "react"
import { validation } from "./validation"
import s from './Form.module.css';

export default function Form(props){
    
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })

    function handleInputChange (e){
        console.log(e.target.name)
        setUserData(
            {
              ...userData,
              [e.target.name]: e.target.value,
            }
          )
        
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value}
            ))
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        props.login(userData);
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <label className={s.label} htmlFor="usuario">Username: </label>
            <input
                id="username"
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
            />
            <p className={s.danger}>{errors.username}</p>

            <label htmlFor="password" className={s.label}>Password: </label>
            <input
                id="password"
                type="text"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
            />
            <p className={s.danger}>{errors.password}</p>
            
            <button type="submit">LOG IN</button>
        </form>
    </div>
}