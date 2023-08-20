import React, { useState } from 'react';
import './teste.css';
import BoxQuests from './boxQuests/boxQuests';

export default function Testes({ toggleTeste, menu }) {
    let [showTeste, setShowTeste] = useState(false);

    const toggleShowTeste = (menuState) => {
        setShowTeste(!showTeste);
        if (menuState) {
            setShowTeste(true);
        }
    };

    const handleMenuClick = () => {
        toggleTeste(false); // Repassa false para o componente pai
        menu(false); // Repassa false para o componente que chamou o Testes
    };

    return (
        <div>
            <h1>Teste de perfil de estudo</h1>
            <BoxQuests menu={toggleShowTeste} />
            <button onClick={handleMenuClick}>Sair para menu</button>
            <p>Estado do toggleTeste: {showTeste ? 'Verdadeiro' : 'Falso'}</p> {/* Exibir o estado */}
        </div>
    );
}
