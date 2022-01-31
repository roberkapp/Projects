import React from 'react';
import "./Tarjeta.css";

const Tarjeta = ({sprite,name}) => {
  return <figure className='tarjeta'>
      <img className='poke-sprite' src={sprite} alt={name}/>
      <figcaption className='nombre'>{name}</figcaption> 
    </figure>
};

export default Tarjeta