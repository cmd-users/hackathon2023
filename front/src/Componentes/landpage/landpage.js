import React from 'react';
import './landpage.css';

export default function Landpage({toggleTeste}) {

    let testeresult = false;
    let outputteste;

    if(testeresult){
        outputteste = "Parece que você já realizou esse teste"
    }
    else{
        outputteste = "parece que não realizou seu teste ainda..."
    }
    return(
        <div className="component-body">
            <h1 className='outTeste'>{outputteste}</h1>
                <p className='porQue '>POR QUE REALIZAR O TESTE DE MÉTODO DE ESTUDO?</p>
                <ul>
                    <li className='motivos'>POR QUE REALIZAR O TESTE DE MÉTODO DE ESTUDO?</li>
                    <li className='motivos'>PARA QUE SEU PROFESSOR POSSA ENTENDER O CAMINHO MAIS FÁCIL PARA TRAZER SEU POTENCIAL A TONA</li>
                    <li className='motivos'>PARA QUE FACILITEMOS SEU CAMINHAR NA JORNADA DO SUCESSO</li>
                </ul>
                <button className='Btnteste' onClick={toggleTeste}>Realize seu teste aqui</button>
                <p>Estado do toggleTeste: {toggleTeste ? 'Verdadeiro' : 'Falso'}</p> {/* Exibir o estado */}
        </div>
    );
}