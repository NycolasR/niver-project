import React, { Component } from "react";
import { Howl, Howler } from "howler";

import Music from "../../assets/musica.wav";

import './styles.css';

class Musica extends Component {
    soundPlay = (src) => {
        const sound = new Howl({ src })
        sound.play();
    }

    renderButtonAndSound = () => {
        return (
            <button id="btn-music" onClick={() => this.soundPlay(Music)}>
                <h1>Aumente o volume e clique em mim!</h1>
            </button>
        )
    }

    render() {
        Howler.volume(1.0);
        return (
            <div id="div-music">
                {this.renderButtonAndSound()}
            </div>
        )
    }
}

export default Musica;