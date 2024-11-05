import PropTypes from 'prop-types';

const Archivero = ({ libros }) => {
  const LibrosLista = () => {
    return libros.map((libro, index) => (
      <li key={index}>
        <h2>{libro.Nombre}</h2>
        <p>{libro.Editorial}</p>
      </li>
    ));
  };

  return (
    <div>
      <h1>Archivero</h1>
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
      Editorial: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Archivero;