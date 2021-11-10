import React from 'react';


export default function Contact({contact}){
  const {name} = contact;

  return (
    <div>
      <div>{name}</div>
    </div>
  )
};