// const indexUrl = 'https://pokeapi.co/api/v2/pokemon';
import { useState, useEffect } from "react";
import axios from "axios";
/**
 * The following hook should return only the first gen pokemons (meaning the first 151)
 * Use the defined indexUrl with the query param limit=151
 */
function useGetFirstGen(url) {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(url);
      // console.log(response.data.pokemonSpecies[1].name);
      setPokemons(response.data.pokemonSpecies);
      setAllPokemons(response.data.pokemonSpecies);
    };
    getPokemons();
  }, []);
  return [pokemons, allPokemons, setPokemons];
}

export default useGetFirstGen;
