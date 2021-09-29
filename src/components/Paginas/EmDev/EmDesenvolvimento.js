import React from 'react';
import { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

class EmDev extends Component {
    state = {};
    render() {
        return (
                <Container>
                    <h1 style={{color:"black",paddingTop:250}}>PAGINA EM DESENVOLVIMENTO...</h1>
                    <h2>Aguarde o estagiario concluir a pagina...</h2>
                    <img
                                    src={process.env.PUBLIC_URL + "/carrossel.gif"}
                                    width="150px"
                                    alt="logo"
                                />
                </Container>
        );
    }
}
export default EmDev;