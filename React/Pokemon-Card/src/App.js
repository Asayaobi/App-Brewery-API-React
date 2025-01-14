import React, { useEffect, useState } from "react";
import { getPokemonList, getPokemonDescription } from "../api/utils";
import Select from "../components/Select";
import "../styles/styles.css";
import Card from "../components/Card/Card";

// async function logData() {
//   const list = await getPokemonList();
//   console.log(list);

//   const pokemon = await getPokemonDescription();
//   console.log(pokemon);
// }

// logData();

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  //get pokemon data for Card display
  const [pokemonIndex, setPokemonIndex] = useState(1);
  const [pokemon, setPokemon] = useState({
    name: "",
    url: "",
    description: "",
  });

  //initial data
  useEffect(() => {
    async function getData() {
      const apiData = await getPokemonList();
      const apiText = await getPokemonDescription(1);
      if (apiData.length > 0 && apiText) {
        setPokemon({
          name: apiData[0].name,
          url: apiData[0].url,
          description: apiText,
        });
      }
      setPokemonList(apiData);
    }
    getData();
  }, []);

  //logData
  useEffect(() => {
    console.log("set pokemon", pokemon);
  }, [pokemon]);
  useEffect(() => {
    console.log("set index", pokemonIndex);
  }, [pokemonIndex]);

  //when select a pokemon
  useEffect(() => {
    async function resetPokemon() {
      const apiText = await getPokemonDescription(pokemonIndex);
      if (pokemonList.length > 0 && apiText) {
        setPokemon({
          name: pokemonList[pokemonIndex - 1].name,
          url: pokemonList[pokemonIndex - 1].url,
          description: apiText,
        });
      }
    }
    resetPokemon();
  }, [pokemonIndex]);

  //selection bar
  const pokemonNames = pokemonList.map((pokemon, idx) => {
    // console.log(pokemon.name)
    return (
      <option key={idx} value={idx + 1}>
        {pokemon.name}
      </option>
    );
  });

  function handleSelect(e) {
    const select = Number(e.target.value);
    setPokemonIndex(select);
  }

  return (
    <div className="app">
      <Select onChange={handleSelect}>{pokemonNames}</Select>
      <Card />
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { getPokemonList, getPokemonDescription } from "../api/utils";
// import Select from "../components/Select";
// import "../styles/styles.css";
// import Card from "../components/Card/Card";

// async function logData() {
//   const list = await getPokemonList();
//   console.log(list);

//   const pokemon = await getPokemonDescription();
//   console.log(pokemon);
// }

// logData();

// export default function App() {
//   const [pokemonList, setPokemonList] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const apiData = await getPokemonList();

//       setPokemonList(apiData);
//     }
//     getData();
//   }, []);

//   const pokemonNames = pokemonList.map((pokemon, idx) => {
//     // console.log(pokemon.name)
//     return (
//       <option key={idx} value={idx + 1}>
//         {pokemon.name}
//       </option>
//     );
//   });

//   return (
//     <div className="app">
//       <Select onChange={(e) => console.log(e.target.value)}>
//         {pokemonNames}
//       </Select>
//       <Card />
//     </div>
//   );
// }
