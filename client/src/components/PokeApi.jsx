import { useState, useEffect } from 'react';
import axios from 'axios'

const PokeApi = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    console.log("App.js is running")
    console.log("So far so good!")
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
    .then(res => {
      console.log(res);
      console.log(res.data)
      console.log(res.data.results)
      setPokemon(res.data.results);
    })
    .catch(err => console.log(err))
  }, [])

  return (

        <div>
          <h1>Pokemon</h1>
          {pokemon.map((poke, i) => {
            return (
              <div key={i}>
                <p>{poke.name}</p>
              </div>
            )
          })
        }
      </div>

  )
}

export default PokeApi