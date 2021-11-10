import React, { useEffect, useState } from 'react';
import api from '../../api/api';


export default function Contact(){
  const [contact, setContact] = useState();

  useEffect(() => {
    api.get('/contacts')
      .then( (response) => setContact(response.data))
      .catch((err) => {
        console.error(err);
      })
  }, []);
  
  return (
    <div>
      <div>{contact.name}</div>
      <div>{contact.email}</div>
      <div>{contact.phone}</div>
    </div>
  )
};