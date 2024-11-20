import Cabecera from '../components/Cabecera.jsx';
import BuscarLibros from '../components/BuscarLibros.jsx';

const Biblioteca = () => {
  return (
    <section className="biblioteca-container">
      <div className='fixed top-0 left-0 w-full'>
        <Cabecera />
      </div>
      <div className='mt-28'> {/* Añade un margen superior para separar los componentes */}
        <BuscarLibros />
      </div>
    </section>
  );
};

export default Biblioteca;