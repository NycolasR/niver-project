import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import './styles.css';

const Cartao = (props) => {
    return (
    <Card id="card">
      <CardActionArea id="card-main-area">
        <div id="foto">
            <img src={props.foto} alt="Carol"/>
        </div>

        <div></div>

        <div id="conteudo">
            <CardContent>
                <h3>De {props.emissor}:</h3>
                <div>{props.mensagem}</div>
            </CardContent>
        </div>
      </CardActionArea>
    </Card>
)}

export default Cartao;