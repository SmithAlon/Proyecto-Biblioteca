import { useState } from 'react';
import Archivero from './components/Archivero.jsx';
import libros from './Libros.js';

const App = () => {
  const [mostrarArchivero, setMostrarArchivero] = useState(false);

  const handleArchivero = () => {
    setMostrarArchivero(!mostrarArchivero);
  };

  return (
    <>
      <div>
        <h1>Biblioteca</h1>
      </div>

      <button onClick={handleArchivero}>
        {mostrarArchivero ? 'Ocultar Archivero' : 'Mostrar Archivero'}
      </button>

      {mostrarArchivero && <Archivero libros={libros} />}
    </>
  );
};

export default App;