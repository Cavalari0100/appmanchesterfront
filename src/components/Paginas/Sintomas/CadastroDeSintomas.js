import React from 'react';
import { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, List , ListInlineItem} from 'reactstrap';



class CadastroSintomas extends Component {
    state = {};
    render() {
        const ativaZonaDeTextAlergia = false;
        return (
            <Container style={{ backgroundColor: "#CBCBCB", paddingTop: 70 }}>
                <div>
                    <h1>Cadastro de Doenças</h1>
                </div>
                <Form>
                    <Row>
                        <Col md={12}>
                            <FormGroup style={{ paddingBottom: 25 }}>
                                <Label for="exampleEmail">Temperatura:</Label>
                                <Input type="text" name="email" id="exampleEmail" placeholder="Digite a Temperatura do Paciente" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <FormGroup style={{ paddingBottom: 25 }}>
                                <Label for="examplePassword">Glicemia:</Label>
                                <Input type="text" name="password" id="examplePassword" placeholder="Digite a Glicemia do paciente" />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup style={{ paddingBottom: 25 }}>
                                <Label for="examplePassword">Pressão Arterial:</Label>
                                <Input type="text" name="password" id="examplePassword" placeholder="Digite a pressão arterial do paciente" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup style={{ paddingBottom: 25 }}>
                        <Col md={12}>
                            <Label for="email">Pulso:</Label>
                            <Input type="text" placeholder="Digite o Pulso do Paciente"></Input>
                        </Col>
                    </FormGroup>
                    <FormGroup style={{ paddingBottom: 25 }}>
                        <Col md={12}>
                            <Label for="exampleAddress">Frequência Respiratoria:</Label>
                            <Input type="text" name="address" id="exampleAddress" placeholder="Digite a Frequência Respiratoria do Paciente" />
                        </Col>
                    </FormGroup>
                    <FormGroup style={{ paddingBottom: 25 }}>
                        <Col md={12}>
                            <Label for="exampleAddress2">Saturação do Oxigênio:</Label>
                            <Input type="text" name="address2" id="exampleAddress2" placeholder="Digite a Saturação do Oxigênio do Paciente" />
                        </Col>
                    </FormGroup>
                    <FormGroup style={{ paddingBottom: 25 }}>
                        <List type="inline">
                            <li>
                            <h2>Doenças do Paciente</h2>
                            <ListInlineItem><Input type="checkbox" name="address2" id="exampleAddress2"/>Cardiopata</ListInlineItem>
                            <ListInlineItem><Input type="checkbox" name="address2" id="exampleAddress2"/>HAS</ListInlineItem>
                            <ListInlineItem><Input type="checkbox" name="address2" id="exampleAddress2"/>Diabetes</ListInlineItem>
                            <ListInlineItem><Input type="checkbox" name="address2" id="exampleAddress2"/>Alergias e Medicamentos</ListInlineItem>
                            </li>
                        </List>
                        <Col md={8}>
                            <Label for="exampleAddress2">Alergia e Medicação</Label>
                            <Input type="text" name="address2" id="exampleAddress2" placeholder="Digite a alergia e medicação do paciente"/>
                        </Col>
                    </FormGroup>
                </Form>

                <div>
                    <Button>Cadastrar</Button>
                </div>
            </Container>
        );
    }
}
export default CadastroSintomas;