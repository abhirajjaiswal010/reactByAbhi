import { useEffect, useState } from "react";
import "./css/pokemon_card.css";
import { PokemonCard } from "./pokemonCard";
const api = "https://pokeapi.co/api/v2/pokemon?limit=10";

export const Pokemon = () => {
  const [pokemon, setpokemon] = useState([]);
  const [loading, setloading] = useState(true);
  const [inputdata, setInputdata] = useState("");

  const handleInputData = (e) => {
    setInputdata(e.target.value);
    console.log(inputdata);
  };

  const searchData = pokemon.filter((curElem1)=>curElem1.name.toLowerCase().includes(inputdata.toLowerCase()))

  const pokemon_api_fetch = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();

      const getPokemondata = data.results.map(async (curElem) => {
        const res = curElem.url;
        const data = await fetch(res);
        const pokemonData = await data.json();
        return pokemonData;
      });

      const getPokemondata_reponse = await Promise.all(getPokemondata);

      setpokemon(getPokemondata_reponse);
      setloading(false);
    } catch (error) {
      setloading(false);
    }
  };

  useEffect(() => {
    pokemon_api_fetch();
  }, []);
  if (loading) {
    return <h1>loading....</h1>;
  }
  return (
    <>
      <div className="main">
        <div className="head">
          <h1>Let's Catch Pokemon</h1>
          <input
            type="text"
            placeholder="search pokemon..."
            value={inputdata}
            onChange={handleInputData}
          />
        </div>

        <div className="card_container">
          {searchData.map((curPokemon) => {
            return <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />;
          })}
        </div>
      </div>
    </>
  );
};
