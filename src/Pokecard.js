import React from "react";
import "./Pokecard.css";

const Pokecard = ({ name, img, type, base_experience }) => (
    <div className="Pokecard">
        <h4>{ name }</h4>
        <img className="Pokecard-image" src={ img } />
        <p>Type: { type }</p>
        <p>EXP: { base_experience }</p>
    </div>
)

export default Pokecard;