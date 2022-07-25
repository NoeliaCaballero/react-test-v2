import React from "react";
import "./PokemonList.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import useGetFirstGen from "../hooks/useGetFirstGen";

/**
 * The following component should render the list view exactly as the one on the screenshots found on the README
 * You should be able to achieve that by keeping the following structure and using the classes specified on the PokemonList.scss
 * Keep in mind that is possible that some of those classes may have some bugs so you'll need to correct them
 */

function PokemonList() {
  const [search, setSearch] = useState("");

  const [isShown, setIsShown] = useState("");
  // const [firstView, setFirstView] = useState(false);

  const [pokemons, allPokemons, setPokemons] = useGetFirstGen(
    "https://pokeapi.co/api/v2/generation/1/"
  );
  const handleSearch = (newValue) => {
    setSearch(newValue);
    if (newValue.lenght !== 0) {
      setTimeout(() => {
        setPokemons(
          allPokemons.filter((pokemon) => {
            console.log(pokemon);
            return pokemon.name.includes(newValue);
          })
        );
      }, 1000);
    }
  };

  return (
    <>
      <div className="PokemonList">
        <div className="list-container">
          <div className="input-container">
            <input
              placeholder="Start typing to filter"
              value={search}
              onChange={(event) => handleSearch(event.target.value)}
            />
          </div>
          {/* each item of the list must have the following structure */}
          <PerfectScrollbar>
            <div className="list">
              {pokemons.length === 0 ? (
                <p className="empty-state">
                  THERE AREN&apos;T ANY POKEMON MATCHING
                  <span> {search} </span>
                </p>
              ) : (
                <>
                  {pokemons.map((pokemon, index) => {
                    console.log(index);
                    console.log(pokemon.index);
                    return (
                      <button
                        key={pokemon.name}
                        onClick={() => {
                          setIsShown(index);
                          // setFirstView(true);
                        }}
                        className={
                          isShown === index
                            ? " list-item selected"
                            : "list-item"
                        }
                      >
                        <Link
                          to={"/pokemon/" + pokemon.name}
                          className="name-button"
                        >
                          <div>{pokemon.name.toUpperCase()}</div>
                        </Link>
                      </button>
                    );
                  })}
                </>
              )}
            </div>
          </PerfectScrollbar>
        </div>
      </div>

      {/* {firstView !== true ? (
        <div className="empty-pokemon-view">NO POKEMON SELECTED</div>
      ) : (
        ""
      )} */}
    </>
  );
}

export default PokemonList;
