import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './sectionOne.css';
import Statue from '../../assets/img/Statue.png';
import Arrow from '../../assets/img/arrow.svg';

export default class sectionOne extends Component {
    render () {
        return (
            <Container className="container-fluid vh-100 d-flex align-items-center">
                <div className="col-md-6">
                    <h1 id="title">Yet the story of</h1>
                    <h2 id="orpheus">Orpheus</h2>
                    <p id="orpheusText">Product & Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.</p>
                    <button className="me-5 mt-3 shadow-sm" id="whiteBtn">WORKS<img src={Arrow} alt="Arrow" className="ms-2 mb-1"/></button>
                    <button className="border-0 shadow-sm text-white" id="goldBtn">FREE STUFF</button>
                </div>
                <div className="col-md-6">
                    <img src={Statue} className="img-fluid mb-5 ps-5" alt="Statue pic" />
                </div>
            </Container>
        );
    }
}