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
    <div>
      <div>
          <ContactLink key="new" contact={newContact}  />
        {
          contacts.map((contact) => {
            return <ContactLink key={contact.id} contact={contact} />
          })
        }
      </div>
        <Outlet />
    </div>
  )
};