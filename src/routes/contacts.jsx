import React from 'react';
import ContactList from '../components/ContactList/ContactList';

export default function Contacts(){
  return (
    <main>
      <h2 className="font-bold my-5 text-3xl">Contatos</h2>
      <ContactList />
    </main>
  );
}