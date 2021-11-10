import React from 'react';


export default function Contact({contact}){
  const {name, email, phone} = contact;

  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{phone}</div>
    </div>
  )
};