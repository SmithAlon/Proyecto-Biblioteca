import PropTypes from 'prop-types';

const Archivero = ({ libros }) => {
  const LibrosLista = () => {
    return libros.map((libro, index) => (
      <div className='py-auto rounded border border-black bg-sky-300' key={index}>
        <h1 className='px-8 py-4 font-bold'><a >{libro.Nombre}</a></h1>
        <p className='px-8 pb-2 text-gray-700'>{libro.Autor}</p>
      </div>
    ));
  };

  return (
    <div className='flex justify-between mx-5'>
      <LibrosLista />
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