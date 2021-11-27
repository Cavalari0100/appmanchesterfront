import React, { useState } from 'react';
import axios from 'axios';
import { Col, Row, Button, Form, InputGroup, Label, Input, Container, List, ListInlineItem } from 'reactstrap';


function CadastroSintomas(props) {
    const [newProntuario, setNewProntuario] = useState({temperatura: '', glicemia: '', pressao: '', fc: '' })
    const url = "https://uploadappmanchester.herokuapp.com/creatNewSintomas"

    const IncertNewProntuario = (e) => {
        const data = { temperatura: newProntuario.temperatura, glicemia: newProntuario.glicemia, pressao: newProntuario.pressao, fc: newProntuario.fc }
        axios.post(url, data);
        props.history.push("/prontuarios")
        console.log(data)
    }
    const onChange = (e) => {
        e.persist();
        setNewProntuario({ ...newProntuario, [e.target.name]: e.target.value });
    }
    return (
        <Container>
            <h1>Cadastrar Prontuario</h1>
            <Form onSubmit={IncertNewProntuario}>
                <Row
                    md="2"
                    sm="2"
                    xs="1"
                    style={{ padding: "2em" }}
                >
                    <Col >
                        <InputGroup style={{ paddingBottom: 25 }}>
                            
                            <Input type="text" name="temperatura" id="temperatura" placeholder="Digite a temperatura do paciente C°" value={newProntuario.temperatura} onChange={onChange} />
                        </InputGroup>
                    </Col>
                    <Col >
                        <InputGroup style={{ paddingBottom: 25 }}>
                            
                            <Input type="text" name="glicemia" id="glicemia" placeholder="Digite a glicemia do paciente" value={newProntuario.glicemia} onChange={onChange} />
                        </InputGroup>
                    </Col>
                    <Col >
                        <InputGroup style={{ paddingBottom: 25 }}>
                            
                            <Input type="text" name="pressao" id="pressao" placeholder="Digite a pressão do paciente" value={newProntuario.pressao} onChange={onChange} />
                        </InputGroup>
                    </Col>
                    <Col >
                        <InputGroup style={{ paddingBottom: 25 }}>
                           
                            <Input type="text" name="fc" id="fc" placeholder="Digite a frequencia cardiaca do paciente" value={newProntuario.fc} onChange={onChange} />
                        </InputGroup>
                    </Col>
                </Row>
                <Row
                    md="3"
                    sm="2"
                    xs="1"
                >
                    <Col ></Col>
                    <Col ><Button className="teste" style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={()=>IncertNewProntuario()} >Registar</Button></Col>
                    <Col ></Col>

                </Row>
            </Form>
        </Container>
    );
}
export default CadastroSintomas;