import React, { useEffect } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row, Form, FormGroup, Label, Input, Container, InputGroup
} from 'reactstrap';

function LoginEnfermeiro(props) {
    const JoinPage = () => {
        props.history.push("/register-enfermeiro")
    }
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Login</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Enfermeiros</CardSubtitle>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <InputGroup style={{ paddingBottom: 25 }}>
                                    <Label for="email" style={{ paddingRight: 15 }}>E-Mail :</Label>
                                    <Input type="email" name="email" id="email" placeholder="Digite seu email de contato" />
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <InputGroup style={{ paddingBottom: 25 }}>
                                    <Label for="passWord" style={{ paddingRight: 15 }}>Password :</Label>
                                    <Input type="text" name="passWord" id="passWord" placeholder="Digite uma senha para acesso" />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Form>
                    <Button>Login</Button>
                    <hr></hr>
                    <Row>
                        <Col md={6}>
                            <p>Ainda não possui cadastro ? cadastre-se aqui</p>
                        </Col>
                        <Col md={6}>
                            <Button className="teste" style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={JoinPage}>Register</Button>
                        </Col>
                    </Row>
                </CardBody>

            </Card>
        </div>
    )
}
export default LoginEnfermeiro;