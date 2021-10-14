import React, { useState } from 'react';
import axios from 'axios';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, List, ListInlineItem } from 'reactstrap';


function CadastroSintomas(props) {
    const [newProntuario, setNewProntuario] = useState({ temperatura: '', glicemia: '', pressao: '', fc: '' })
    const url = "https://uploadappmanchester.herokuapp.com/creatNewSintoma"

    const IncertNewProntuario = (e) => {
        e.preventDefault();
        const data = { temperatura: newProntuario.temperatura, glicemia: newProntuario.glicemia, pressao: newProntuario.pressao, fc: newProntuario.fc }
        axios.post(url, data);
        props.history.push("/")
    }
    const onChange = (e) => {
        e.persist();
        setNewProntuario({ ...newProntuario, [e.target.name]: e.target.value });
    }
    return (
        <Container style={{ backgroundColor: "#CBCBCB", paddingTop: 70 }}>
            <div>
                <h1>Cadastro de Doenças</h1>
            </div>
            <Form onSubmit={IncertNewProntuario}>
                <Row>
                    <Col md={12}>
                        <FormGroup style={{ paddingBottom: 25 }}>
                            <Label for="exampleEmail">Temperatura:</Label>
                            <Input type="number" name="temperatura" id="exampleEmail" placeholder="Digite a Temperatura do Paciente" value={newProntuario.temperatura} onChange={onChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <FormGroup style={{ paddingBottom: 25 }}>
                            <Label for="examplePassword">Glicemia:</Label>
                            <Input type="number" name="glicemia" id="examplePassword" placeholder="Digite a Glicemia do paciente" value={newProntuario.glicemia} onChange={onChange} />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup style={{ paddingBottom: 25 }}>
                            <Label for="examplePassword">Pressão Arterial:</Label>
                            <Input type="number" name="pressao" id="examplePassword" placeholder="Digite a pressão arterial do paciente" value={newProntuario.pressao} onChange={onChange} />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup style={{ paddingBottom: 25 }}>
                            <Label for="examplePassword">Frequencia Cardiaca</Label>
                            <Input type="number" name="fc" id="examplePassword" placeholder="Digite a pressão arterial do paciente" value={newProntuario.fc} onChange={onChange} />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>

            <div>
                <Button className="teste" style={{background:"#3399ff"}} type="submit" className="btn btn-secondary mb-1" block onClick={""} >Cadastrar</Button>
            </div>
        </Container>
    );
}
export default CadastroSintomas;