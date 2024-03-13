import React from "react";
import { Link } from "react-router-dom";

const RecipesPage = () => {
  return (
    <div>
      <h1>Recipes Page</h1>
      <p>Aqui estão as suas receitas!</p>
      <Link to={"recipes/recipe1"}>Bolinho</Link>
      <Link to={"recipes/recipe2"}>Quiche</Link>
      <Link to={"recipes/recipe3"}>Tarte</Link>
    </div>
  );
};

export default RecipesPage;
