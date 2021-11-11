import React from 'react';
import {NavLink } from 'react-router-dom';


export default function ContactLink({contact}){
  const {id, name} = contact;

  return (
    <div >
      <NavLink 
        className={({ isActive }) => isActive ? "text-red-400" : "text-blue-400"}
        data-testid={`link-${id}`}
        id={`contato-${id}`}
        to={`/contatos/${id}`}>
        {name}
      </NavLink>
    </div>
  )
};