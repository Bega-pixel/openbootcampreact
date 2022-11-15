import React, { useState } from 'react';

const ComponenteB = () => {

  const [conectado, setConectado] = useState(false)

  return (
    <div>
      <p> <strong>{ conectado ? 'Online' : 'Offline' }</strong> </p>
      <button onClick={() => setConectado(!conectado)}>Conectar</button>
    </div>
  )
}

export default ComponenteB;