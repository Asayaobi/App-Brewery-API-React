import React from "react";

function Card({ pokemon }) {
  const { name, url, description } = pokemon;
  return (
    <div className="card">
      <img src={url} className="pokemon-image" />
      <p className="pokemon-name">{name}</p>
      <p className="pokemon-description">{description}</p>
    </div>
  );
}

export default Card;
