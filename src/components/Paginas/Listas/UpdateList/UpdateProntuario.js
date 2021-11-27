import { Container, Row, Col, Form, InputGroup, Input, Button } from "reactstrap";
import React, { useState } from "react";
import axios from "axios";

function UpdateProntuario(props) {
    //Ligando as coisas com o backend
    const [prontuario, setListProntuario] = useState([]);
    //Alterando  Produto
    const UpgradeProntuario = async (id) => {
        const url = "https://uploadappmanchester.herokuapp.com/UpdateSintomas/" + props.match.params.id;
        await axios({
            method: "PUT",
            url: url,
            headers: {
                Accept: "application/json",
            },
            data: prontuario
        }).then((response) => {
        }).catch((e) => {
        })
    }
    const onChange = (e) => {
        e.persist();
        setListProntuario({ ...prontuario, [e.target.name]: e.target.value });
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
                    <Col ></Col>
                    <Col >
                        <img
                            src={process.env.PUBLIC_URL + "/logo192.png"}
                            width="100%"
                            alt="logo"
                        />
                    </Col>
                    <Col ></Col>
                </Row>
                <h1>Alterar Prontuario</h1>
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
                            <Form onSubmit={UpgradeProntuario}>
                                <Row
                                    md="1"
                                    sm="2"
                                    xs="1"
                                    style={{ padding: "2em" }}
                                >
                                    <Col >
                                        <InputGroup style={{ paddingBottom: 25}}>

                                            <Input type="text" name="temperatura" id="temperatura" placeholder="Digite a temperatura do paciente C°" value={prontuario.temperatura} onChange={onChange} />
                                        </InputGroup>
                                    </Col>
                                    <Col >
                                        <InputGroup style={{ paddingBottom: 25 }}>

                                            <Input type="text" name="glicemia" id="glicemia" placeholder="Digite a glicemia do paciente" value={prontuario.glicemia} onChange={onChange} />
                                        </InputGroup>
                                    </Col>
                                    <Col >
                                        <InputGroup style={{ paddingBottom: 25 }}>

                                            <Input type="text" name="pressao" id="pressao" placeholder="Digite a pressão do paciente" value={prontuario.pressao} onChange={onChange} />
                                        </InputGroup>
                                    </Col>
                                    <Col >
                                        <InputGroup style={{ paddingBottom: 25 }}>

                                            <Input type="text" name="fc" id="fc" placeholder="Digite a frequencia cardiaca do paciente" value={prontuario.fc} onChange={onChange} />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row
                                    md="3"
                                    sm="2"
                                    xs="1"
                                >
                                    <Col ></Col>
                                    <Col ><Button href="/prontuarios" className="teste" style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={() => UpgradeProntuario()} >Registar</Button></Col>
                                    <Col ></Col>

                                </Row>
                            </Form>
                        </Row>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}
export default UpdateProntuario;