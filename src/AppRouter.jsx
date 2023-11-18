import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={Navigation}>
        <Route index element={HomePage} />
        <Route path="pokemon/:id" element={PokemonPage} />
      </Route>
    </Routes>
  );
};
