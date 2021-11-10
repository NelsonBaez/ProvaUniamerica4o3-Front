import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import api from '../../api/api';
import ContactLink from '../ContactLink/ContactLink';


export default function ContactList(){
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get('/contacts')
      .then( (response) => setContacts(response.data))
      .catch((err) => {
        console.error(err);
      })
  }, []);
  
  return (
    <div>
      <div>
        {
          contacts.map((contact) => {
            return <ContactLink contact={contact} />
          })
        }
      </div>
        <Outlet />
    </div>
  )
};