import React, { Component } from 'react';
import '../navbar/navbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import lua from '../../assets/img/lua.svg';
import typo from '../../assets/img/Typo.png';
import logo from '../../assets/img/logo.svg';

export default class menu extends Component {
    render () {
        return (
            <Navbar collapseOnSelect expand="lg" id="light">
            <Container className="container">
                <div className="d-flex align-items-center">
                    <img className="me-3 logo" src={logo} alt="typo" />
                    <img src={typo} alt="typo" />
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link id="navLink" className="me-4">Works</Nav.Link>
                    <Nav.Link id="navLink" className="me-4">Contribution</Nav.Link>
                    <Nav.Link id="navLink" className="me-4">Community</Nav.Link>
                    <Nav.Link id="navLink" className="me-3">Get in Touch</Nav.Link>
                    <div className="d-flex align-items-center ms-3">
                        <img src={lua} alt="lua" />
                    </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}

