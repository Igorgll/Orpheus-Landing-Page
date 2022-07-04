import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './sectionOne.css';
import Statue from '../../assets/img/Statue.png';
import Arrow from '../../assets/img/arrow.svg';

function SectionOne() {
        return (
            <Container className="container-fluid vh-100 d-flex align-items-center">
                <div className="col-md-5 d-flex justify-content-center flex-column" id="media_col">
                            <h1 id="title" className="display-3">Yet the story of</h1>
                            <h2 id="orpheus" className="display-1">Orpheus</h2>
                            <p id="orpheusText" className="w-75 h5 lh-lg">Product & Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.</p>
                    <div id="button__div" className="mt-4">
                        <button className="me-5 shadow-sm w-25" id="whiteBtn">WORKS<img src={Arrow} alt="Arrow" className="ms-2 mb-1"/></button>
                        <button className="border-0 shadow-sm w-25" id="goldBtn">FREE STUFF</button>
                    </div>
                </div>
                <div className="col-md-8 d-flex justify-content-center" id="statue_pic_div">
                    <img src={Statue} className="img-fluid float-end mb-5 pb-5" id="statue_pic" alt="Statue pic" />
                </div>
            </Container>
        );
    }

    export default SectionOne;