import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";

import "../css/header.css";
const Header = () => {
  const cart = useSelector(state=> state.cart)
  const {cartItems} = cart
  let ItemsInCart = 0
  if(cartItems){
    ItemsInCart= cartItems.length
  }
  else{
    ItemsInCart =0
  }
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container className="nav-cont ">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand>neutron</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navlink ">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Category" id="basic-nav-dropdown">
          <NavDropdown.Item href="/category/men">Men</NavDropdown.Item>
          <NavDropdown.Item href="/category/Women">Women</NavDropdown.Item>
          <NavDropdown.Item href="/category/accessories">Accessories</NavDropdown.Item>
          
          
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
                  <i className="fa fa-shopping-cart"></i> {ItemsInCart>0 && (<sup>{ItemsInCart}</sup>)}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link> Login </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
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
