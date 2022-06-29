import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './footer.css'
import linkedin from '../../assets/img/Medium New.svg';
import instagram from '../../assets/img/Medium New-1.svg';
import ball from '../../assets/img/Medium New-2.svg';
import M from '../../assets/img/Medium New-3.svg';
import email from '../../assets/img/Medium New-4.svg';

export default class footer extends Component {
    render(){
        return (
            <footer className="d-flex align-items-center" id="footer">
                <Container className="container-fluid">
                    <div className="row-md-12">
                        <h1 className="text-center footer_heading">Let's Connect</h1>
                        <h2 className="text-center footer_subheading">Get in touch for opportunities or just to say hi! 👋</h2>
                    
                    <div className="social_medias d-flex justify-content-center mt-4">
                        <a href="#">
                            <img src={ linkedin } alt="linkedin icon" className="me-4" />
                        </a>
                        
                        <a href="#">
                            <img src={ instagram } alt="linkedin icon" />
                        </a>
                        
                        <a href="#">
                            <img src={ ball } alt="linkedin icon" className="me-4 ms-4"/>
                        </a>
                        
                        <a href="#">
                            <img src={ M } alt="linkedin icon" />
                        </a>
                        
                        <a href="#">
                            <img src={ email } alt="linkedin icon" className="ms-4"/>
                        </a>
                    </div>
                    
                    </div>
                </Container>
            </footer>
        );
    }
}