// const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function useGetPokemon(apiUrl) {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get(apiUrl);
      //   console.log(response.data.weight);
      setPokemon(response.data);
    };
    getPokemon();
  }, [params.name]);
  return [pokemon];
}

export default useGetPokemon;
