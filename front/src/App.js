import React, { useState } from 'react'; // Importe useState aqui
import './App.css';
import HeaderMenu from './Componentes/header/heder';
import IndexTestes from './Componentes/indextestes/indextestes';
import Testes from './Componentes/Testes/teste'; // Importe o componente Testes aqui

function App() {
  let [showTeste, setShowTeste] = useState(false); // Declare o estado showTeste

  const toggleShowTeste = () => {
    setShowTeste(!showTeste);
  };

  return (
    <div className="App">
      <HeaderMenu />
      <body>
        {showTeste ? <Testes /> : <IndexTestes toggleTeste={toggleShowTeste}/>} {/* Renderização condicional corrigida */}
      </body>
    </div>
  );
}

export default App;
