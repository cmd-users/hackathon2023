import React, { useState } from 'react'; // Importe useState aqui
import './App.css';
import HeaderMenu from './Componentes/header/header';
import Landpage from './Componentes/landpage/landpage';
import Testes from './Componentes/Testes/teste'; // Importe o componente Testes aqui
import Cadastro from './Componentes/cadastro/cadastro'

function App() {
  let [showTeste, setShowTeste] = useState(false); // Declare o estado showTeste

  const toggleShowTeste = () => {
    setShowTeste(!showTeste);
  };

  const handleToggleTeste = (menuState) => {
    setShowTeste(menuState);
};

  return (
    <div className="App">
      <HeaderMenu/>
      <Cadastro/>
    </div>
  );
}

export default App;
