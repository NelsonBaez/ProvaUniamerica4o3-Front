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
    <div className="flex flex-col flex-wrap ">
      <h2>Novo Contato { error}</h2>
      <form action="">
        <div className="m-3 flex-1">
          <label>Nome: </label>
          <input className="p-2 rounded" type="text" name="name" value={contact.name} onChange={handleInputChange}/>
        </div>
        <div className="m-3 flex-1">
          <label>Email: </label>
          <input className="p-2 rounded" type="text" name="email" value={contact.email} onChange={handleInputChange}
          /> 
        </div>
        <div className="m-3 flex-1">
          <label>Telefone: </label>
          <input className="p-2 rounded" type="text" name="phone" value={contact.phone} onChange={handleInputChange} />
        </div>
        <div>
          <button
            className="p-2 bg-green-100 rounded m-1"
            id="cadastrar"
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