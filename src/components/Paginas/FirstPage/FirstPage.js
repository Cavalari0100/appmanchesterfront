import React from 'react';
import './FirstPage.css';
import { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

class FirstPage extends Component {
    state = {};
    render() {
        return (
            <Container className="bg-light" fluid>
                <Container style={{ backgroundColor: "#305040" }}>
                    <Row style={{ paddingTop: 70 }}>
                        <hr className="linhasSeparatorias"></hr>

                        <h1 className="textTitulo">APP <b>MANCHESTER</b></h1>

                        <hr className="linhasSeparatorias"></hr>
                        <Col md={6}>
                            <p className="body-text">
                                Ao se trabalhar em ambientes de urgências e emergências, é necessário que
                                seja realizado um atendimento rápido, eficaz e com o mínimo de sequelas a esses
                                pacientes.
                            </p>
                        </Col>
                        <Col md={6}>
                            <p className="body-text">
                                Sendo assim, pensamos em um softwere inovador,
                                que garantira a eficácia do pronto atendimento, classificando os pacientes baseada
                                na metodologia de <b>Manchester</b>.
                            </p>
                        </Col>
                        <hr className="linhasSeparatorias"></hr>
                    </Row>
                </Container>
                <Container style={{ backgroundColor: "#305040" }}>
                        <Row style={{paddingTop:10,paddingBottom:10}}>
                        <Col md={4}><hr className="linhasSeparatorias"></hr></Col>
                        <Col md={4}><h1 className="textTitulo">METODOLOGIA</h1></Col>
                        <Col md={4}><hr className="linhasSeparatorias"></hr></Col>    
                        </Row>    
                </Container>
                <Container style={{ backgroundColor: "#305040" }}>
                    <Row>
                        <Col style={{ paddingTop: 90, color: "white" }} md={6}>
                            <p className="body-text">A metodologia seguiu os princípios do Design Thinking, partindo das pesquisas
                                referentes às produções na área de enfermagem em classificação de risco na urgência e
                                emergência e na área da informática, na segunda etapa foram analisadas ferramentas
                                similares e na terceira etapa foram prototipadas a interface da ferramenta, fundamentada
                                nas 10 heurísticas Jacob Nielsen a fim de torná-la simples e eficiente, assim sumarizando
                                os estudos já concluídos na área de interesse.
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
                    <hr className="linhasSeparatorias"></hr>
                    <Container>
                        <Row style={{paddingTop:10,paddingBottom:10}}>
                        <Col md={4}><hr className="linhasSeparatorias"></hr></Col>
                        <Col md={4}><h1 className="textTitulo">CONTEXTO</h1></Col>
                        <Col md={4}><hr className="linhasSeparatorias"></hr></Col>    
                        </Row>    
                    </Container>
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
                            <p className="body-text">Vendo esse cenário complexo de atendimento, criamos esta ferramenta,
                                com o intuito de ajudar o profissional da saúde durante o processo de triagem do paciente.
                                Tendo isso em mente, foram adotados princípios conhecidos como as 10 heurísticas de
                                Nielsen que auxiliam na construção de uma boa interface e consequentemente em uma
                                ótima experiência do usuário.</p>
                        </Col>
                    </Row>
                    <hr className="linhasSeparatorias"></hr>
                    <Container>
                        <Row style={{paddingTop:15,paddingBottom:10}}>
                        <Col md={4}><hr className="linhasSeparatorias"></hr></Col>
                        <Col md={4}><h1 className="textTitulo">PRODUTO</h1></Col>
                        <Col md={4}><hr className="linhasSeparatorias"></hr></Col>    
                        </Row>    
                    </Container>
                    <Row>
                        <Col md={6}>
                            <h1 className="textTitulo">Você está perdendo o controle do prontuario médico ?</h1>
                            <p className="body-text">Apresentamos um app capaz de tornar a administração do pronto
                                atendimento mais eficaz e segura, com a metodologia Manchester conseguiremos transformar
                                seu pronto atendimento com um processo muito mais dinâmico. </p>
                        </Col>
                        <Col md={6} >
                            <div>
                                <img
                                    src={process.env.PUBLIC_URL + "/img3FirstPage.png"}
                                    width="100%"
                                    alt="logo"
                                    style={{ boxShadow: "10px 15px 15px black" }}
                                />
                            </div>
                        </Col>
                    </Row>



                    <footer>

                        <hr className="linhasSeparatorias"></hr>

                        <h5 style={{ color: "white", fontSize: 12, textAlign: "left" }}>Created by Joao Vitor Cavalari Spavier</h5>
                    </footer>
                </Container>
            </Container>
        );
    }
}
export default FirstPage;