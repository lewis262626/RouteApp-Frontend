import React, { useState } from "react";
import "./Home.css";
import PlaneForm from './Form';
import Results from './Results';
import { Container } from "react-bootstrap";

export default function Home() {
  const [formResult, setFormResult] = useState("");
  return (
    <Container>
      <div className="Home">
        <div className="lander">
          <h1>SimRoutes</h1>
          <p>A simple route generation app</p>
        </div>
        <PlaneForm setFormResult={setFormResult} />
        {formResult ? <Results formResult={formResult} /> : ""}
      </div>
    </Container>
  );
}