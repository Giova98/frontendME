import React, { useState } from 'react';
import './App.css'
import './index.css'


const form = () => {

  const [values, setValues] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    reference: '',
    masculino: false,
    femenino: false
  });

  const handleInputChange = (event) => {
    const {name, value} = event.target // Extrae el atributo "name" y el valor actual del input
    setValues({ 
      ...values, // Copia los valores actuales del estado
      [name]: value, // Actualiza solo el campo correspondiente basado en el atributo "name"
    })
  }

  console.log( window.location.hostname )

  const structure = window.location.hostname === 'localhost' ? [
    {
      html: 'input',
      type: 'text',
      name: 'name',
      onChange: handleInputChange,
      value: values.name,
      placeholder: 'ingrese su nombre' 
    },
    {
      html: 'input',
      type: 'text',
      name: 'lastname',
      onChange: handleInputChange,
      value: values.lastname,
      placeholder: 'ingrese su apellido' 
    },
    {
      html: 'input',
      type: 'text',
      name: 'email',
      onChange: handleInputChange,
      value: values.email,
      placeholder: 'ingrese su email' 
    }
  ] : [
    {
      html: 'input',
      type: 'password',
      name: 'password',
      onChange: handleInputChange,
      value: values.password,
      placeholder: 'ingrese su password' 
    },
    {
      html: 'checkbox',
      type: 'checkbox',
      name: 'masculino',
      onChange: handleInputChange,
      value: values.masculino
    },
    {
      html: 'checkbox',
      type: 'checkbox',
      name: 'femenino',
      onChange: handleInputChange,
      value: values.femenino
    }
  ]

  const handleForm = (event) => {
    event.preventDefault() // Evita que el formulario recargue la página al enviarse
    console.log(values); // Imprime los valores del formulario en la consola
  }

  return (
    <div id='formulario'>
      <form onSubmit={handleForm}>
        <h1>Form</h1>
        { structure.map( element => (
                  <input
                    type={element.type}
                    name={element.name} // Clave para identificar el campo en el estado
                    value={element.value} // Muestra el valor actual desde el estado
                    placeholder={element.placeholder}
                    onChange={element.onChange} // Actualiza el estado cuando el usuario escribe
                  />
        )) }
        <button type='submit'>Enviar datos</button>
      </form>
    </div>
  );
}

export default form;

//hacer cambios de inputs, acciones, estilos para las 2 distintas paginas
//hacer un backend con node js para usarlo con cualquier front-end
//que el correo electronico no exista en la base de datos (para el registro)
//que no se haya ingresado la contraseña mal 3 veces (para el login)
//investigar taildwing y mui(material ui)