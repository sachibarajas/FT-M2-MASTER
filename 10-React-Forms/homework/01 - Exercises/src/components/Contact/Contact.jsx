import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs){
  const errors = {};
  if(!inputs.name){
    errors.name = 'Se requiere un nombre';
  } 
  if(!regexEmail.test(inputs.email)){
    errors.email='Debe ser un correo electrónico';
  }
  if(inputs.phone<0){
    errors.phone='Sólo números positivos';
  }
  if(!inputs.subject){
    errors.subject='Se requiere un asunto';
  }
  if(!inputs.message){
    errors.message='Se requiere un mensaje';
  }
  return errors;
}

export default function Contact () {
  const [inputs,setInputs] = React.useState({
    name: '',
    email: '',
    phone: 0,
    subject:'',
    message:'',
  });

  const [errors,setErrors] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject:'',
    message:'',
  });

  const handleCHange = (e)=>{
    
    setInputs({
      ...inputs, [e.target.name]: e.target.value
    });

    setErrors(
        validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    )
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(Object.entries(errors).length===0){
      alert('Datos completos');
      setInputs({
        name: '',
        email: '',
        phone: 0,
        subject:'',
        message:'',
      })
      
      setErrors(
        validate({
          name: '',
          email: '',
          phone: '',
          subject:'',
          message:'',
        })
      )
    } else{
      alert("Debes corregir los errores");
    }
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        className={errors.name && 'warning'}
        type="text" 
        name='name' 
        placeholder='Escribe tu nombre...' 
        value={inputs.name}
        onChange={handleCHange}
      />
      <p className='danger'>{errors.name}</p>
      <br />
      <label htmlFor="">Correo Electrónico:</label>
      <input
        className={errors.email && 'warning'}
        type="text"
        name='email'
        placeholder='Escribe tu email...'
        value={inputs.email}
        onChange={handleCHange}
      />
      <p className='danger'>{errors.email}</p>
      <br />
      <label htmlFor="">Teléfono:</label>
      <input
        className={errors.phone && 'warning'}
        type="number"
        name='phone'
        placeholder='Escribe un teléfono...'
        value={inputs.phone}
        onChange={handleCHange}
      />
      <p className='danger'>{errors.phone}</p>
      <br />
      <label htmlFor="">Asunto:</label>
      <input 
        className={errors.subject && 'warning'}
        type="text"
        name='subject'
        placeholder='Escribe el asunto...'
        value={inputs.subject}
        onChange={handleCHange}
      />
      <p className='danger'>{errors.subject}</p>
      <br />
      <label htmlFor="message">Mensaje:</label>
      <textarea 
        className={errors.message && 'warning'}
        type= 'text' 
        name="message" 
        id="message" 
        cols="30" rows="10" placeholder='Escribe tu mensaje...'
        value={inputs.message}
        onChange={handleCHange}
      />
      <p className='danger'>{errors.message}</p>
      <br />
      <button type='submit' >Enviar</button>
    </form>
  </div>
}
