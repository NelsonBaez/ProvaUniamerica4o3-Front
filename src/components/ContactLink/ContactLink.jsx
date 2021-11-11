import React from 'react';
import {NavLink } from 'react-router-dom';


export default function ContactLink({contact}){
  const {id, name} = contact;

  return (
    <div>
      <NavLink 
        className={({ isActive }) => isActive ? "red" : "blue"}
        data-testid={`link-${id}`}
        to={`/contatos/${id}`}>
        {name}
      </NavLink>
    </div>
  )
};