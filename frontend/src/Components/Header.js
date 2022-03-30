import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import "../css/header.css";
const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container className="nav-cont ">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <Navbar.Brand>anneutron</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navlink ">
              <LinkContainer to="/catagories">
                <Nav.Link>Catagories</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Brands" id="collasible-nav-dropdown">
                <LinkContainer to="/store/addidas">
                  <NavDropdown.Item>Addidas</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/store/nike">
                  <NavDropdown.Item>Nike</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/store/lv">
                  <NavDropdown.Item>LV</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/allbrands">
                  <NavDropdown.Item>More Brands</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav className="right-cont">

             <LinkContainer to='/search'>
             
             <Nav.Link> <i className="fas fa-search"></i> </Nav.Link>
             </LinkContainer>
             <LinkContainer to='/cart'>
             
             <Nav.Link> <i className="fas fa-cart-shopping"></i> {" "}Cart</Nav.Link>
             </LinkContainer>
             <LinkContainer to='/signin'>
             
             <Nav.Link>  Sign In </Nav.Link>
             </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
