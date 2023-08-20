import React, { useState, useEffect } from 'react';
import './boxQuests.css';

export default function BoxQuests({ menu }) {
    const [answered, setAnswered] = useState(0);
    const [estiloAprendizagem, setEstiloAprendizagem] = useState(null);

    useEffect(() => {
        if (answered > 9) {
            fetch('http://localhost:8000/quiz/next') // URL da API
                .then(response => response.json())
                .then(estiloaprendizagem => setEstiloAprendizagem(estiloaprendizagem))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [answered]);

    const handleRefazer = () => {
        setAnswered(0);
    };

    if (answered > 9) {
        menu(true); // Repassa o valor true para o componente pai do Testes
        return (
            <div>
                <h1>Parece que você já respondeu todas as perguntas<br />Seu tipo de aprendizado é:</h1>
                <h2>{estiloAprendizagem}</h2>
                <button onClick={handleRefazer}>Refazer</button>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Pergunta {answered + 1}</h2>
                <button onClick={() => setAnswered(answered + 1)}>Responder</button>
                <h3>Questão {answered + 1} de 10</h3>
            </div>
        );
    }
}
