import React from "react";

function Card({ pokemon }) {
  const { name, url, description } = pokemon;
  return (
    <div>
      <p>{name}</p>
      <p>{url}</p>
      <p>{description}</p>
    </div>
  );
}

export default Card;
