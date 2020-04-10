import React from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Routes from "./Routes";


function App() {
  return (
    <div className="App">
      <Navbar fluid collapseOnSelect bg="light">
        <Navbar.Brand>
          <Link to="/">SimRoutes</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
