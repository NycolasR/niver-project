import React from "react";

import Musica from "../Musica";

import './styles.css';

const Header = () => (
    <div id="cabecalho">
        <header>
            <h1 id="main-title">Parabéns, Vanna!</h1>
        </header>
        <div id="apresentacao">
            <h1>As devidas apresentações.</h1>
            <p>
                Olá, Vanna! Eu sou seu presente de aniversário, um website desenvolvido pelo Sr. seu irmão
                (ele me deu permissão de te chamar de Vanna também). Meu propósito é reunir mensagens de aniversário
                das pessoas mais próximas a você. Começe obedecendo o botão se encontra abaixo de mim e depois leia as
                mensagens. Quando terminar de ler cada mensagem, clique na seta do lado direito da tela para ler a próxima.
                Feliz Aniversário!
            </p>
            <Musica />
        </div>

    </div>
)

export default Header;