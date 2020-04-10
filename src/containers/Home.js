import React from "react";
import "./Home.css";
import PlaneForm from './Form';

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>SimRoutes</h1>
        <p>A simple route generation app</p>
      </div>
      <PlaneForm />
    </div>
  );
}