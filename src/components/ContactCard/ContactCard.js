import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import Contact from '../Contact/Contact';


export default function ContactCard(){
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
      {
        contacts.map((contact) => {
          return <Contact contact={contact} />
        })
      }
    </div>
  )
};