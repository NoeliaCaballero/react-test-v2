import React from "react";
import "./App.scss";
import PokemonList from "./pokemon-list/PokemonList";
import PokemonViewer from "./pokemon-viewer/PokemonViewer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PokemonList className="PokemonList " />
      <Routes>
        <Route path="/pokemon/:name" element={<PokemonViewer />} />
      </Routes>
    </div>
  );
}

export default App;
