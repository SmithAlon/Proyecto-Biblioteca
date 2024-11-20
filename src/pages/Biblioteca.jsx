import Cabecera from '../components/Cabecera.jsx';
import Archivero from '../components/Archivero.jsx';
import librosData from '../Libros.js';

const Biblioteca = () => {
  return (
    <section className="biblioteca-container">
      <div className='fixed top-0 left-0 w-full'>
        <Cabecera />
      </div>
      <div className='mt-28'> {/* Añade un margen superior para separar los componentes */}
        <Archivero libros={librosData} />
      </div>
    </section>
  );
};

export default Biblioteca;