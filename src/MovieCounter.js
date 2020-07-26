import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

export const MovieCounter = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return <div>Movies : {movies.length}</div>;
};
