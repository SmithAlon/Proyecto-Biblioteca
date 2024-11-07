import { useState } from 'react';

const Formulario = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const validarPassword = () => {
    return password === 'Password'; // Reemplaza 'tuPassword' con la contraseña correcta
  };

  const validarCorreo = () => {
    return correo === 'Juan@gmail.com'; // Reemplaza 'tuCorreo@example.com' con el correo correcto
  };

  const handlePersona = () => {
    const esCorreoValido = validarCorreo();
    const esPasswordValido = validarPassword();
    console.log(esCorreoValido && esPasswordValido ? 'Usuario y contraseña correctos' : 'Usuario y contraseña incorrectos');
  };

  return (
    <div className="formulario">
      <h1>Inicio de Sesión</h1>
      <input
        type="text"
        placeholder="Correo"
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handlePersona}>Iniciar Sesión</button>
    </div>
  );
};

export default Formulario;