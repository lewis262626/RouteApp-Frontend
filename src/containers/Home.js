import React, { useState } from "react";
import "./Home.css";
import PlaneForm from './Form';
import Results from './Results';

export default function Home() {
  const [results, setResults] = useState("");
  return (
    <div className="Home">
      <div className="lander">
        <h1>SimRoutes</h1>
        <p>A simple route generation app</p>
      </div>
      <PlaneForm setResults={setResults} />
      {results ? <Results results={results} /> : ""}
    </div>
  );
}