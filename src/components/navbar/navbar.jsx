import React, { Component, useContext } from 'react';
import '../navbar/navbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import moon from '../../assets/img/lua.svg';
import logo from '../../assets/img/LogoLightMode.png';
import { ThemeContext } from '../../theme';

function Menu() {
        const { toggleTheme } = useContext(ThemeContext);

        return (
            <Navbar collapseOnSelect expand="lg">
            <Container className="container">
                <div className="d-flex align-items-center">
                    <div id="typo_div" className="mb-2">
                        <img src={logo} alt="logo" id="logo_icon"/>
                    </div>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto" id="nav_item">
                    <Nav.Link id="navLink" className="me-4">Works</Nav.Link>
                    <Nav.Link id="navLink" className="me-4">Contribution</Nav.Link>
                    <Nav.Link id="navLink" className="me-4">Community</Nav.Link>
                    <Nav.Link id="navLink" className="me-3">Get in Touch</Nav.Link>
                    <div className="d-flex align-items-center ms-3" id="theme_icon">
                        <img src={moon} alt="Moon Icon"
                        onClick={() => toggleTheme()}
                        id="moon_icon"
                        />
                    </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }

    export default Menu;

