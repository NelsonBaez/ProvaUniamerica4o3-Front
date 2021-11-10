import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default function ContactLink({contact}){
  const {id, name} = contact;

  return (
    <div>
      <NavLink 
        className={({ isActive }) => isActive ? "red" : "blue"}
        to={`/contatos/${id}`}>
        {name}
      </NavLink>
    </div>
  )
};