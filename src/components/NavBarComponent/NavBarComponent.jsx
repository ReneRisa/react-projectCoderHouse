import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useGetCategories } from "../../hooks/useCategory";

const NavBarComponent = (props) => {
  const { categories } = useGetCategories();
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">CMR Cleaning Services</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#About Us">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Home Cleaning
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Window Washing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Move-in/ Move-out Cleaning
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Commercial Cleaning
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Carpet Cleaning
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.6">
                Get a Quote
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories.map((category, index) => (
                <NavDropdown.Item key={index}>
                  <Link to={`/category/${category}`}>{category}</Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {props.children}
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
