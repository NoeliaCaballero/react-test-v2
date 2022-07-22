import React from "react";
import { Pokemon } from "../models/pokemon";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonViewer.scss";

import useGetPokemon from "../hooks/usePokemon";

function PokemonViewer() {
  const params = useParams();

  const [pokemon] = useGetPokemon(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`
  );
  // console.log(pokemon);
  return (
    pokemon && (
      <div className="pokemon-info">
        <div>
          <img
            src={pokemon.sprites.other.officialArtwork.frontDefault}
            alt=""
            className="pokemon-image"
          />
          <h2>
            <span>{pokemon.id}.</span> {pokemon.name.toUpperCase()}
          </h2>
          <h3> TYPE {pokemon.types[0].type.name}</h3>
          <h3>WT {pokemon.weight}KG</h3>
          <h3>HT {pokemon.height}M</h3>
        </div>
      </div>
    )
  );
}

export default PokemonViewer;
