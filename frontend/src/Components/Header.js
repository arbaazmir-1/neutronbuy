import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import "../css/header.css";
const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container className="nav-cont ">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand>anneutron</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navlink ">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Category" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
          
          
        </NavDropdown>

              <LinkContainer to="/promotions">
                <Nav.Link>Promotions</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Trendy Brands" id="collapsible-nav-dropdown">
                <LinkContainer to="/store/adidas">
                  <NavDropdown.Item>Adidas</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/store/nike">
                  <NavDropdown.Item>Nike</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/store/lv">
                  <NavDropdown.Item>LV</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/allBrands">
                  <NavDropdown.Item>More Brands</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav className="right-cont">
              <LinkContainer to="/search">
                <Nav.Link>
                  {" "}
                  <i className="fas fa-search"></i>{" "}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  {" "}
                  <i className="fas fa-cart-shopping"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link> Login </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signin">
                <Nav.Link> Sign In </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
