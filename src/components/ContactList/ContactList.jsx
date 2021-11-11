import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';
import api from '../../api/api';
import ContactLink from '../ContactLink/ContactLink';


export default function ContactList(){
  const [contacts, setContacts] = useState([]);
  const history = useParams();

  let newContact = {
    id: 'new',
    name: 'Cadastrar novo Contato'
  }

  function getContacts(){
    api.get('/contacts')
      .then( (response) => setContacts(response.data))
      .catch((err) => {
        console.error(err);
      })
  }
  useEffect(() => {
    getContacts();
  }, [history]);
  
  return (
    <div className="flex flex-row flex-wrap container text-center mx-auto shadow-md">
      <div className="p-5 border-r-2 text-xl bg-green-200"> 
          <ContactLink key="new" contact={newContact}  />
        {
          contacts.map((contact) => {
            return <ContactLink key={contact.id} contact={contact} />
          })
        }
      </div>
      <div className="flex-1 p-5 bg-gray-100">
        <Outlet />
      </div>
    </div>
  )
};