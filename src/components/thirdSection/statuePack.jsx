import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import "./statuePack.css";
import girlStatue from '../../assets/img/girlStatue.png';
import ArrowDown from '../../assets/img/ArrowDown.svg';

export default class statuePack extends Component {
    render(){
        return(
            <Container className="container-fluid">
                <div className="d-flex justify-content-start me-4 mb-4 mt-5">
                    <h1 className="nftH1 mt-5">Contribution</h1>
                    <div id="vl" className="ms-4 me-4 mt-5"></div>
                    <h2 className="nftH2 mt-5">View More</h2>
                </div>

                <div className="row-md-12 d-flex flex-row justify-content-center align-items-center" id="rowThirdSection">
                    <div className="col-md-6"><img src={girlStatue} alt="" className="img-fluid" id="girlStatue" /></div>
                    <div className="col-md-6">
                        <h1 className="text-center" id="row_heading">3d Greek Statue Pack</h1>
                        <h2 className="text-center mt-4" id="row_subHeading">over <span id="span200">200</span> greek style sculputure</h2>

                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <button id="gold_button">
                                <img src={ArrowDown} alt="Download Icon" className="me-2 mb-1"/>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}
