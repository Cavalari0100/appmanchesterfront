import React, { useState } from 'react';
import axios from 'axios';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, InputGroup } from 'reactstrap';

function CreatNewEnfermeiro(props) {
    const [newEnfermeiro, setNewEnfermeiro] = useState({ nome: '', email: '', password: '', cpf: '', rg: '', coren: '' })
    const url = 'https://uploadappmanchester.herokuapp.com/creatNewEnfermeiro'

    const IncertNewEnfermeiro = (e) => {
        e.preventDefault();
        const data = { nome: newEnfermeiro.nome, email: newEnfermeiro.email, password: newEnfermeiro.password, cpf: newEnfermeiro.cpf, rg: newEnfermeiro.rg, coren: newEnfermeiro.coren }
        axios.post(url, data);
        props.history.push("/");
    }
    const onChange = (e) => {
        e.persist();
        setNewEnfermeiro({ ...newEnfermeiro, [e.target.name]: e.target.value });
    }
    return (
        <Container>
            <Form onSubmit={IncertNewEnfermeiro}>
                <Row
                    md="2"
                    sm="2"
                    xs="1"
                    style={{ padding: "2em" }}
                >
                    <Col >
                        <InputGroup style={{ paddingBottom: 25 }}>
                            {/* <Label for="nome">Nome :</Label> */}
                            <Input type="text" name="nome" id="nome" placeholder="Digite o Nome completo" value={newEnfermeiro.nome} onChange={onChange} />
                        </InputGroup>
                    </Col>
                    <Col >
                        <InputGroup style={{ paddingBottom: 25 }}>
                            {/* <Label for="email">E-Mail :</Label> */}
                            <Input type="email" name="email" id="email" placeholder="Digite seu email de contato" value={newEnfermeiro.email} onChange={onChange} />
                        </InputGroup>
                    </Col>
                    <Col >
                        <InputGroup style={{ paddingBottom: 25 }}>
                            {/* <Label for="passWord">Password :</Label> */}
                            <Input type="password" name="password" id="passWord" placeholder="Digite uma senha para acesso" value={newEnfermeiro.password} onChange={onChange} />
                        </InputGroup>
                    </Col>
                    <Col >
                        <InputGroup style={{ paddingBottom: 25 }}>
                            {/* <Label for="coren">COREN :</Label> */}
                            <Input type="text" name="coren" id="coren" placeholder="Digite seu COREN" value={newEnfermeiro.coren} onChange={onChange} />
                        </InputGroup>
                    </Col>
                    <Col >
                        <InputGroup style={{ paddingBottom: 25 }}>
                            {/* <Label for="cpf">CPF:</Label> */}
                            <Input type="number" name="cpf" id="cpf" placeholder="Digite o CPF do enfermeiro" value={newEnfermeiro.cpf} onChange={onChange} />
                        </InputGroup>
                    </Col>
                    <Col >
                        <InputGroup style={{ paddingBottom: 25 }}>
                            {/* <Label for="rg">RG:</Label> */}
                            <Input type="number" name="rg" id="rg" placeholder="Digite o RG do enfermeiro" value={newEnfermeiro.rg} onChange={onChange} />
                        </InputGroup>
                    </Col>
                </Row>
                <Row
                        md="3"
                        sm="2"
                        xs="1"
                    >
                        <Col ></Col>
                        <Col ><Button className="teste" style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={""} >Registar</Button></Col>
                        <Col ></Col>
                        
                    </Row>
            </Form>
        </Container>
    )
}
export default CreatNewEnfermeiro;