import React, { useState, useContext } from "react";

export const Movie = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <h6>{props.price}</h6>
    </div>
  );
};
