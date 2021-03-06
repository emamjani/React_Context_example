import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Movie } from "./Movie";

export const Movies = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((movie) => (
        <li>
          <Movie name={movie.name} price={movie.price} key={movie.id} />
        </li>
      ))}
    </div>
  );
};
