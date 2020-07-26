import React, { createContext, useState } from "react";
export const MovieContext = createContext();
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "first Movie",
      id: 1,
      price: 10,
    },
    {
      name: "second Movie",
      id: 2,
      price: 20,
    },
    {
      name: "third Movie",
      id: 3,
      price: 30,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
