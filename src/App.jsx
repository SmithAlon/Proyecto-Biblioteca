import Archivero from './components/Archivero.jsx';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LibrosData from './Libros.js';
import Formulario from './components/Formulario.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Link to='/'>
    </Link>

    <Routes>
      <Route path='/' element = {<Formulario/>}/>
      <Route path='/archivero' element = {<Archivero libros={LibrosData} />}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;