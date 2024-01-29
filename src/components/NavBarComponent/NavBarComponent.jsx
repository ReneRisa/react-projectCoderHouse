import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useGetCategories } from "../../hooks/useCategory";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { useGetCollectionDocuments } from "../../hooks/useCollection";

const NavBarComponent = () => {
  const { categories } = useGetCategories();
  const { datos } = useGetCollectionDocuments("categories");

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">CMR Cleaning Services</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link> */}
            <Nav.Link>
              <Link to="/services">Services</Link>
            </Nav.Link>
            <NavDropdown title="Category Services" id="basic-nav-dropdown">
              {datos.map((category) =>
                category.categories.map(
                  (categories, index) => (
                    console.log(categories),
                    (
                      <NavDropdown.Item key={index}>
                        <Link to={`/categoryServices/${categories}`}>
                          {categories}
                        </Link>
                      </NavDropdown.Item>
                    )
                  )
                )
              )}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.6">
                Get a Quote
              </NavDropdown.Item>
            </NavDropdown>

            {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories.map((category, index) => (
                <NavDropdown.Item key={index}>
                  <Link to={`/category/${category}`}>{category}</Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <Nav.Link>
          <Link to="/create-service">Create new service</Link>
        </Nav.Link>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
