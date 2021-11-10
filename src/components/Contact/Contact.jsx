import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/api';


export default function Contact(){
  let params = useParams();
  let navigate = useNavigate();

  const [contact, setContact] = useState({});
  const [error, setError] = useState();

  function deleteContact(id){
    api.delete(`contacts/${id}`)
      .then( (response) => setContact(response))
      .catch((err) => {
        setError(err.response.data.message);
        console.error(err);
      })
  }
  useEffect(() => {
    api.get(`contacts/${parseInt(params.contactId)}`)
      .then( (response) => setContact(response.data))
      .catch((err) => {
        setError(err.response.data.message);
        console.error(err);
      })
  }, [params.contactId]);

  return (
    <div>
      <h2>Contato: { contact.name ?? error}</h2>
      <div>
        <label>Nome: </label>
        <input type="text" name="name" value={contact.name} />
      </div>
      <div>
        <label>Email: </label>
        <input type="text" name="email" value={contact.email} />
      </div>
      <div>
        <label>Telefone: </label>
        <input type="text" name="phone" value={contact.phone} />
      </div>
      <div>
        <button
          onClick={() => {
            deleteContact(contact.id);
            navigate('/');
          }}
        >
          Deletar
        </button>
      </div>
    </div>
  )
};