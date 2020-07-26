import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
export const Addmovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movie, setMovies] = useContext(MovieContext);
  const updateMovie = ({ target }) => {
    setName(target.value);
  };
  const updatePrice = ({ target }) => {
    setPrice(target.value);
  };
  const AddingMovies = (e) => {
    e.preventDefault();
    setMovies((pre) => [...pre, { name: name, price: price }]);
  };
  return (
    <form onSubmit={AddingMovies}>
      <input type="text" value={name} onChange={updateMovie} />
      <input type="Number" value={price} onChange={updatePrice} />
      <button>AddMovie</button>
    </form>
  );
};
