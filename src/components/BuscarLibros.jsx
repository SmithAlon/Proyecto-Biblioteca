import { useState} from 'react';

const BookSearch = () => {
  const [query, setQuery] = useState(''); // Término de búsqueda
  const [books, setBooks] = useState([]); // Lista de libros
  const [loading, setLoading] = useState(false); // Estado de carga

  const searchBooks = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await response.json();
      setBooks(data.docs); // Guardamos los libros encontrados
    } catch (error) {
      alert('Error al buscar libros:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setBooks([]);
  };

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <div className='flex flex-col items-center justify-center bg-slate-50 border border-black rounded-md p-4 w-max mb-4'>
        <label className='block text-gray-700 text-md font-bold mb-2'>
            Buscador de Libros
        </label>
        <div className='flex'>
          <input
              className="shadow appearance-none border rounded w-max py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Escribe un título o autor"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={searchBooks}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-4 w-32 rounded focus:outline-none focus:shadow-outline"
          >
            Buscar
          </button>
        </div>
      </div>
      {loading && <p>Cargando...</p>}
      {books.length > 0 && (
        <div className='w-full max-w-md'>
          <div className='flex justify-between items-center mb-4'>
            <button onClick={clearSearch} className='flex items-center text-sm text-gray-700'>
              <p>Limpiar búsqueda</p>
              <img className='ml-2 h-4 w-4' src="src/assets/cleaning_services_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="Limpiar" />
            </button>
          </div>
          <ul>
            {books.map((book) => (
              <li key={book.key} className='border-b border-gray-300 py-2'>
                <h3 className='text-lg font-bold'>{book.title}</h3>
                <p className='text-gray-700'>{book.author_name?.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
  </div>  
);       
};

export default BookSearch;
