import React from "react";
import "./App.css";
import { MovieProvider } from "./MovieContext";
import { MovieCounter } from "./MovieCounter";
import { Movies } from "./Movies";
import { Addmovie } from "./AddMovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <div className="headerCls">
          <MovieCounter />
        </div>
        <Addmovie />
        <Movies />
      </div>
    </MovieProvider>
  );
}

export default App;
