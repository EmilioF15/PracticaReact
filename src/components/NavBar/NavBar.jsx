// src/components/NavBar/NavBar.jsx
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"; // Ajusta la ruta según tu estructura de archivos

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link to="/category/smartphone" as={Link}>
              Smartphones
            </Nav.Link>
            <Nav.Link to="/category/furniture" as={Link}>
              Furniture
            </Nav.Link>
            <Nav.Link to="/category/tv" as={Link}>
              TV
            </Nav.Link>
            <Nav.Link to="/Cart" as={Link}>
              <CartWidget /> {/* Añadir el componente CartWidget */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
