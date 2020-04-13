import React from 'react';
import './App.css';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Routes from "./Routes";


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect bg="light">
        <Navbar.Brand>
          <Link to="/">SimRoutes</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <NavItem><a href="/About">About</a></NavItem>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
