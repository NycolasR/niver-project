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
            <p class="apresentacao-texto-paragrafo">
                Olá, Vanna! Eu sou seu presente de aniversário: um website desenvolvido pelo Sr. seu irmão
                (ele me deu permissão de te chamar de Vanna também). Como qualquer website, estou acessível de qualquer lugar do mundo pela
                Internet (o Sr. seu irmão quis inovar esse ano. Ele acredita que seus aniversários são uma excelente oportunidade para ele
                colocar em prática alguns conhecimentos e desenvolver alguma coisa).
            </p>
            <p class="apresentacao-texto-paragrafo">
                Meu propósito é reunir mensagens de aniversário das pessoas mais próximas a você: o Sr. seu irmão obteve essas mensagens no
                mês de janeiro deste ano; a maioria das pessoas que te escreveram nem sabiam para que as mensagens e fotos seriam usadas.. 
                só sabiam que seria para alguma coisa e, para isso, precisavam escolher e mandar uma foto com uma mensagem.
                Começe obedecendo o botão se encontra abaixo de mim (pode ser que ele demore a responder, então só clica e segue em frente..)
                e depois leia as mensagens. Quando terminar de ler cada mensagem, clique
                na seta do lado direito da tela para ler a próxima.
                Feliz Aniversário!
            </p>
            <Musica />
        </div>

    </div>
)

export default Header;