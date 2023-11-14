import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero-section/Hero";
import RecipeCard from "./components/card-section/Card";
import Form from "./components/form-section/Form";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <RecipeCard />
      <Form />
    </div>
  );
}

export default App;
