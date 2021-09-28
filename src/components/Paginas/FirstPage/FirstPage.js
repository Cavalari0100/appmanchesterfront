import React from 'react';
import './FirstPage.css';
import { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

class FirstPage extends Component {
    state = {};
    render() {
        return (
            <div>
                <Container style={{ backgroundColor: "#305040" }}>
                    <Row style={{ paddingTop: 70 }}>
                        <Col style={{ paddingTop: 90, color: "white" }} md={6}>
                            <p>Aplicativo para facilitar e agilizar o processo de cadastro de pacientes nas unidade de pronto atendimento. Classificando
                                os pacientes baseados no protocolo de manchester,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img
                                    src={process.env.PUBLIC_URL + "/img1FistPage.jpg"}
                                    width="100%"
                                    alt="logo"

                                    style={{ boxShadow: "10px 15px 15px black" }}
                                />
                            </div>
                        </Col>
                    </Row>
                    <div style={{ backgroundColor: "white" }}>
                        <hr></hr>
                    </div>
                    <Row>
                        <Col md={6} >
                            <div>
                                <img
                                    src={process.env.PUBLIC_URL + "/img2FistPage.png"}
                                    width="100%"
                                    alt="logo"
                                    style={{ boxShadow: "10px 15px 15px black" }}
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            <p className="body-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Col>
                    </Row>


                    <footer>
                        <div style={{ backgroundColor: "white" }}>
                            <hr></hr>
                        </div>
                        <h5 style={{ color: "white", fontSize: 12, textAlign: "left" }}>Created by Joao Vitor Cavalari Spavier</h5>
                    </footer>
                </Container>
            </div>
        );
    }
}
export default FirstPage;