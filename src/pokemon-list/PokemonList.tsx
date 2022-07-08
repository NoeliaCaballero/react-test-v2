import React from 'react';
import './PokemonList.scss';


/**
 * The following component should render the list view exactly as the one on the screenshots found on the README
 * You should be able to achieve that by keeping the following structure and using the classes specified on the PokemonList.scss 
 * Keep in mind that is possible that some of those classes may have some bugs so you'll need to correct them
 */
function PokemonList() {
  return (
    <div className="PokemonList">
      <div>
        <div>
          <input placeholder="Start typing to filter" />
        </div>
        {/* each item of the list must have the following structure */}

        <div>
          <button>DISPLAY POKEMON NAME</button>
        </div>

        <p>
          There aren&apos;t any Pokémon matching
          <b>DISPLAY SEARCH TERM</b>
        </p>
      </div>
    </div>
  );
}

export default PokemonList;
