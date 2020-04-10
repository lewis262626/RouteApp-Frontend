import React from 'react';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
          <Nav pullRight>
            <NavItem><a href="/About">About</a></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
