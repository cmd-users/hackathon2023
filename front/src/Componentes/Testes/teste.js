import React from 'react';
import './teste.css';

export default function Testes(teste) {
    return(
        <div>
        <p>pagina  de testes </p>
        <p>Estado do toggleTeste: {teste ? 'Verdadeiro' : 'Falso'}</p> {/* Exibir o estado */}
        </div>
    );
}