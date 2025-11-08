import '../components/css/pokemon_card.css'
export const PokemonCard =({pokemonData})=>{
  return (
<div className="card" key={pokemonData.id}>
                <div className="image_container">
                  <img src={pokemonData.sprites.other.dream_world.front_default}alt="" />
                </div>
                <div className="info">
                  <h3>{pokemonData.name}</h3>
                  <span className="ability">{pokemonData.types.map((e)=>e.type.name).join(" ")}</span>
                  <div className="spec">
                    <div className="spec_title">height</div>
                    <div className="spec_title">weight</div>
                    <div className="spec_title">speed</div>
                    <div className="spec_value">{pokemonData.height}</div>
                    <div className="spec_value">{pokemonData.weight}</div>
                    <div className="spec_value">{pokemonData.stats[5].base_stat}</div>
                    <div className="spec_title">experience</div>
                    <div className="spec_title">attack</div>
                    <div className="spec_title">abilites</div>
                    <div className="spec_value">{pokemonData.base_experience}</div>
                    <div className="spec_value">{pokemonData.stats[1].base_stat}</div>
                    <div className="spec_value">{pokemonData.abilities.map((e)=>e.ability.name).join(" , ")}</div>
                  </div>
                </div>
              </div>
  )


}
