import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import React, { useState } from "react";
import axios from "axios";

function UpdatePaciente(props) {
    //Ligando as coisas com o backend
    const [pacientes, setListPaciente] = useState([]);
    //Alterando  Produto
    const UpgradePaciente = async (id) => {
        const url = "https://uploadappmanchester.herokuapp.com/UpdatePaciente/" + props.match.params.id;
        await axios({
            method: "PUT",
            url: url,
            headers: {
                Accept: "application/json",
            },
            data: pacientes
        }).then((response) => {
        }).catch((e) => {
        })
    }
    const onChange = (e) => {
        e.persist();
        setListPaciente({ ...pacientes, [e.target.name]: e.target.value });
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
                <h1>Alterar Ficha Paciente</h1>
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
                            style={{padding:"2em"}}
                        >
                            <Form onSubmit={UpgradePaciente(pacientes._id)}>
                                <Col  style={{paddingBottom:"1em"}}>
                                    <FormGroup>
                                        <Input
                                            bsSize="sm"
                                            id="nome"
                                            name="nome"
                                            placeholder=" Nome do Paciente"
                                            type="text"
                                            value={pacientes.nome} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col style={{paddingBottom:"1em"}}>
                                    <FormGroup>

                                        <Input
                                            bsSize="sm"
                                            id="cpf"
                                            name="cpf"
                                            placeholder="CPF paciente"
                                            type="text"
                                            value={pacientes.cpf} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col style={{paddingBottom:"1em"}}>
                                    <FormGroup>

                                        <Input
                                            bsSize="sm"
                                            id="rg"
                                            name="rg"
                                            placeholder="RG paciente"
                                            type="text"
                                            value={pacientes.rg} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col style={{paddingBottom:"1em"}}>
                                    <FormGroup>

                                        <Input
                                            bsSize="sm"
                                            id="email"
                                            name="email"
                                            placeholder="E-mail para contato com o paciente"
                                            type="email"
                                            value={pacientes.email} onChange={onChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col style={{paddingBottom:"1em"}}>
                                    <FormGroup>

                                        <Input
                                            bsSize="sm"
                                            id="telefone"
                                            name="telefone"
                                            placeholder="telefone para contato"
                                            type="text"
                                            value={pacientes.estado} onChange={onChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col style={{paddingBottom:"1em"}}>
                                    <FormGroup>
                                        <Input
                                            bsSize="sm"
                                            id="endereco"
                                            name="endereco"
                                            placeholder=" Endereço do paciente"
                                            type="text"
                                            value={pacientes.endereco} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col style={{paddingBottom:"1em"}}>
                                    <FormGroup>

                                        <Input
                                            bsSize="sm"
                                            id="numeroResidencia"
                                            name="numeroResidencia"
                                            placeholder="Numero (N°) da residencia"
                                            type="text"
                                            value={pacientes.numeroResidencia} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col style={{paddingBottom:"1em"}}>
                                    <FormGroup>

                                        <Input
                                            bsSize="sm"
                                            id="cidade"
                                            name="cidade"
                                            placeholder="Cidade do paciente"
                                            type="text"
                                            value={pacientes.cidade} onChange={onChange}
                                        />
                                    </FormGroup></Col>
                                <Col style={{paddingBottom:"1em"}}>
                                    <FormGroup>

                                        <Input
                                            bsSize="sm"
                                            id="estado"
                                            name="estado"
                                            placeholder="Estado onde paciente mora"
                                            type="text"
                                            value={pacientes.estado} onChange={onChange}
                                        />
                                    </FormGroup>
                                </Col>    
                                <Col style={{paddingBottom:"1em"}}>
                                    <FormGroup>

                                        <Input
                                            bsSize="sm"
                                            id="cep"
                                            name="cep"
                                            placeholder="Cep da residencia"
                                            type="text"
                                            value={pacientes.cep} onChange={onChange}
                                        />
                                    </FormGroup></Col> 
                                <Col style={{paddingBottom:"1em"}}>
                                    <Button href="/pacientes" style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={() => UpdatePaciente(props.match.params.id)}>
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
export default UpdatePaciente;