import React from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './ComponenteB';
import { Contacto } from '../models/contacto.class.js';


const ComponenteA = ({ contacto }) => {
  return (
    <div>
      <p>Nombre:{ contacto.nombre }</p>
      <p>Apellido:{ contacto.apellido }</p>
      <p>Email:{ contacto.email }</p>
      <p>Conectado:<ComponenteB estado={ false }/></p>
    </div>
  )
}

ComponenteA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponenteA;
