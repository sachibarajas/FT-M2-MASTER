import React, { useState } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate  (inputs) {
  let errors = {};
  if (!inputs.name) errors.name = "Se requiere un nombre";
  if (!regexEmail.test(inputs.email)) errors.email = "Debe ser un correo electrónico";
  if (inputs.phone<=0) errors.phone = "Sólo números positivos";
  if (!inputs.subject) errors.subject = "Se requiere un asunto";
  if (!inputs.message) errors.message = "Se requiere un mensaje";

  return errors
}

export default function Contact () {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: '',
  });

  const [errors,setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    
    setInputs(
      {
        ...inputs,
        [e.target.name]: e.target.value
      }
    )
    setErrors(
      validate({
        ...inputs, 
        [e.target.name]: e.target.value,
      })
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.entries(errors).length===0){
      alert('Datos completos')
      
      setErrors(validate({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      }))

      setInputs({
        name: '',
        email: '',
        phone: 0,
        subject: '',
        message: '',
      })
    } else{
      alert('Debes corregir los errores')
    }
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Nombre:</label>
      <input 
        type="text" 
        name='name' 
        placeholder='Escribe tu nombre...' 
        value={inputs.name}
        onChange={handleChange}
        className = {errors.name && 'warning'}/>
      <p className='danger'>{errors.name}</p>
      
      <label htmlFor="email">Correo Electrónico:</label>
      <input 
        name='email' 
        placeholder='Escribe tu email...'  
        type="text" 
        value={inputs.email} 
        onChange={handleChange}
        className = {errors.email && 'warning'}/>
      <p className='danger'>{errors.email}</p>

      <label htmlFor="phone">Teléfono:</label>
      <input 
        type="number" 
        name='phone' 
        placeholder='Escribe un teléfono...'  
        value={inputs.phone} 
        onChange={handleChange}
        className = {errors.phone && 'warning'} />
      <p className='danger'>{errors.phone}</p>

      <label htmlFor="subject">Asunto:</label>
      <input 
        type="text" 
        name='subject'
        placeholder='Escribe el asunto...' 
        value={inputs.subject} 
        onChange={handleChange}
        className = {errors.subject && 'warning'} />
      <p className='danger'>{errors.subject}</p>

      <label htmlFor="message">Mensaje:</label>
      <textarea 
        type="text" 
        name='message' 
        placeholder='Escribe tu mensaje...' 
        value={inputs.message} 
        onChange={handleChange}
        className = {errors.message && 'warning'} />
      <p className='danger'>{errors.message}</p>

      <button type='submit'>Enviar</button>
    </form>
  </div>
}
