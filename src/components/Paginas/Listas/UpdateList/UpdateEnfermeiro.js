import { Container, Row, Col, Form, FormGroup, Input, Button, InputGroup } from "reactstrap";
import React, { useState } from "react";
import axios from "axios";

function UpdateEnfermeiro(props) {
    //Ligando as coisas com o backend
    const [enfermeiro, setListEnfermeiro] = useState([]);
    //Alterando  Produto
    const UpgradeEnfermeiro = async (id) => {
        const url = "http://localhost:3001/enfermeiro/" + props.match.params.id;
        await axios({
            method: "PUT",
            url: url,
            headers: {
                Accept: "application/json",
            },
            data: enfermeiro
        }).then((response) => {
        }).catch((e) => {
        })
    }
    const onChange = (e) => {
        e.persist();
        setListEnfermeiro({ ...enfermeiro, [e.target.name]: e.target.value });
    }
    return (
        //-- CRIAÇÂO DO FORMULARIO -- UTILIZANDO O LAYOUT DO REACTSTRAP -- 
        <div style={{ paddingTop: "3em" }}>
            <Container className="bg-light border">

                <Row
                    md="3"
                    sm="2"
                    xs="1"
                    style={{ paddingBottom: "1em" }}
                >
                    <Col style={{ backgroundColor: "#32325B" }}></Col>
                    <Col style={{ backgroundColor: "#32325B" }}>
                        <img
                            src={process.env.PUBLIC_URL + "/logo192.png"}
                            width="100%"
                            alt="logo"
                        />
                    </Col>
                    <Col style={{ backgroundColor: "#32325B" }}></Col>
                </Row>
                <h1>Alterar dados de Login do Enfermeiro</h1>
                <Row
                    md="3"
                    sm="2"
                    xs="1"
                    style={{ paddingBottom: "5em" }}
                >
                    <Col></Col>
                    <Col>
                        <Row
                            md="1"
                            sm="2"
                            xs="1"
                            style={{ padding: "2em" }}
                        >
                            <Form onSubmit={UpgradeEnfermeiro(enfermeiro._id)} >
                                <Col >
                                    <InputGroup style={{ paddingBottom: 25 }}>
                                        {/* <Label for="nome">Nome :</Label> */}
                                        <Input type="text" name="nome" id="nome" placeholder="Digite o Nome completo" value={enfermeiro.nome} onChange={onChange} />
                                    </InputGroup>
                                </Col>
                                <Col >
                                    <InputGroup style={{ paddingBottom: 25 }}>
                                        {/* <Label for="email">E-Mail :</Label> */}
                                        <Input type="email" name="email" id="email" placeholder="Digite seu email de contato" value={enfermeiro.email} onChange={onChange} />
                                    </InputGroup>
                                </Col>
                                <Col >
                                    <InputGroup style={{ paddingBottom: 25 }}>
                                        {/* <Label for="passWord">Password :</Label> */}
                                        <Input type="password" name="password" id="passWord" placeholder="Digite uma senha para acesso" value={enfermeiro.password} onChange={onChange} />
                                    </InputGroup>
                                </Col>
                                <Col >
                                    <InputGroup style={{ paddingBottom: 25 }}>
                                        {/* <Label for="coren">COREN :</Label> */}
                                        <Input type="text" name="coren" id="coren" placeholder="Digite seu COREN" value={enfermeiro.coren} onChange={onChange} />
                                    </InputGroup>
                                </Col>
                                <Col >
                                    <InputGroup style={{ paddingBottom: 25 }}>
                                        {/* <Label for="cpf">CPF:</Label> */}
                                        <Input type="number" name="cpf" id="cpf" placeholder="Digite o CPF do enfermeiro" value={enfermeiro.cpf} onChange={onChange} />
                                    </InputGroup>
                                </Col>
                                <Col >
                                    <InputGroup style={{ paddingBottom: 25 }}>
                                        {/* <Label for="rg">RG:</Label> */}
                                        <Input type="number" name="rg" id="rg" placeholder="Digite o RG do enfermeiro" value={enfermeiro.rg} onChange={onChange} />
                                    </InputGroup>
                                </Col>
                                <Col style={{ paddingBottom: "1em" }}>
                                    <Button href="/enfermeiros" style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={() => UpgradeEnfermeiro(props.match.params.id)}>
                                        Alterar
                                    </Button>
                                </Col>
                            </Form>
                        </Row>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}
export default UpdateEnfermeiro;