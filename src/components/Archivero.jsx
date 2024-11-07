import './components.css';
import PropTypes from 'prop-types';

const Archivero = ({ libros }) => {
  const LibrosLista = () => {
    return libros.map((libro, index) => (
      <li key={index}>
        <h2>{libro.Nombre}</h2>
        <p>{libro.Autor}</p>
      </li>
    ));
  };

  return (
    <div className='Archivero'>
      <h1>Biblioteca</h1>
      <ul>
        <LibrosLista />
      </ul>
    </div>
  );
};

Archivero.propTypes = {
  libros: PropTypes.arrayOf(
    PropTypes.shape({
      Nombre: PropTypes.string.isRequired,
      Autor: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Archivero;