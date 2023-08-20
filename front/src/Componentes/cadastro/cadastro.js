
import React from 'react';
import './cadastro.css';

export default function Cadastro() {
    return (
        <div className="container-cadastro">
            <div className="component-cadastro">
                <h1>insira suas credenciais</h1>
                <div className='credenciais'>
                    <input type='text' placeholder='nome completo' id='input'></input>
                    <input type='text' placeholder='e-mail' id='input'></input>
                    <input type='password' placeholder='senha' id='input'></input>
                    <input type='password' placeholder='repita sua senha' id='input'></input>
                </div>

                <div className='component-checkbox'>
                    <input type='checkbox'></input>
                    <h4>sou professor</h4>

                    <input type='checkbox'></input>
                    <h4>aceitar termos de serviço</h4>
                </div>
                <button type='submit'><h1>submit</h1></button>
            </div>
        </div>
    );
}
