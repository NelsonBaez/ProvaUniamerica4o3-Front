import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import api from '../../api/api';


export default function NewContact(){
  let navigate = useNavigate();

  const [contact, setContact] = useState({});
  const [error, setError] = useState();

  const handleInputChange = event => {
    const { name, value } = event.target

    setContact({ ...contact, [name]: value })
};

  function createContact(data) {
    api.post('contacts', data)
      .then( (response) => setContact(response))
      .catch((err) => {
        setError(err.response.data.message);
        alert(err.response.data.title);
        console.error(err);
      })
  }

  return (
    <div>
      <h2>Novo Contato { error}</h2>
      <form action="">
        <div>
          <label>Nome: </label>
          <input type="text" name="name" value={contact.name} onChange={handleInputChange}/>
        </div>
        <div>
          <label>Email: </label>
          <input type="text" name="email" value={contact.email} onChange={handleInputChange}
          /> 
        </div>
        <div>
          <label>Telefone: </label>
          <input type="text" name="phone" value={contact.phone} onChange={handleInputChange} />
        </div>
        <div>
          <button
            onClick={() => {
              createContact(contact);
              navigate('/contatos');
            }}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  )
};