import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import "./statueAvatars.css";
import Avatars from '../../assets/img/avatars.png';

export default class statueAvatars extends Component {
    render(){
        return(
            <Container className="container-fluid mt-5 mb-5">

                <div className="row-md-12 d-flex flex-row justify-content-center align-items-center" id="rowThirdSectionAvatars">
                    <div className="col-md-6" id="greek_statue_div">
                        <h1 className="text-center" id="row_headingAvatars">Greek Statue Avatars</h1>
                        <h2 className="text-center mt-4" id="row_subHeadingAvatars">+500 Greek style <span id="span200">User Avatars</span></h2>

                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <button id="gold_button">
                                Download
                            </button>
                        </div>
                    </div>
                    
                    <div className="col-md-6"><img src={Avatars} alt="" className="img-fluid" id="avatarsStatues" /></div>
                    
                </div>
            </Container>
        );
    }
}
