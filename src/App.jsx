import React from "react";
import "./App.scss";
import PokemonList from "./pokemon-list/PokemonList";
import PokemonViewer from "./pokemon-viewer/PokemonViewer";
import EmptyState from "./pokemon-list/EmpyState";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PokemonList className="PokemonList " />
      <Routes>
        <Route path="/pokemon/:name" element={<PokemonViewer />} />
        <Route path="/" element={<EmptyState />} />
      </Routes>
    </div>
  );
}

export default App;
