import './App.css';
import ComponenteA from './components/ComponenteA';

function App(prop) {
  
  const usuario = {
    nombre: 'Eddy',
    apellido: 'Jam',
    email: 'eddyjam@example.com',
    conectado: false,
  };

  return (
    <div className="App">
      <ComponenteA  contacto={usuario} />
    </div>
  );
}

export default App;
