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
        <Navbar.Brand href="https://capitalimplants.com.ar/">Capital Implants</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>
              Inicio
            </Nav.Link>
            <Nav.Link to="/category/Stents" as={Link}>
              Stents Coronarios
            </Nav.Link>
            <Nav.Link to="/category/Suturas" as={Link}>
              Suturas Mecanicas
            </Nav.Link>
            <Nav.Link to="/category/ImplantesMamarios" as={Link}>
              Implantes Plasticos
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
