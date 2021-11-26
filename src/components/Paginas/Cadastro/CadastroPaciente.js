import React, { useState } from 'react'
import axios from 'axios';
import { Col, Row, Button, Form, Label, Input, Container, InputGroup } from 'reactstrap';

function CreatNewPaciente(props) {

  const [newPaciente, setNewPaciente] = useState({ nome: '', cep: '', cidade: '', cpf: '', email: '', endereco: '', estado: '', numeroResidencia: '', rg: '', telefone: '' });
  const url = "https://uploadappmanchester.herokuapp.com/creatNewPaciente"
  //{"nome":"","cep":"","cidade":"","cpf":"","email":"","endereco":"","estado":"","numeroResidencia":"","rg":"","telefone":""}

  const IncertNewPaciente = (e) => {
    const data = {
      nome: newPaciente.nome, cep: newPaciente.cep, cidade: newPaciente.cidade, cpf: newPaciente.cpf, email: newPaciente.email, endereco: newPaciente.endereco,
      estado: newPaciente.estado, numeroResidencia: newPaciente.numeroResidencia, rg: newPaciente.rg, telefone: newPaciente.telefone
    }
    axios.post(url, data);
    props.history.push("/pacientes")
  }
  const onChange = (e) => {
    e.persist();
    setNewPaciente({ ...newPaciente, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <Form onSubmit={IncertNewPaciente}>
        <Row
          md="3"
          sm="2"
          xs="1"
          style={{padding:"2em"}}
        >
          <Col className="bg-light">
            <InputGroup>
              {/* <Label for="nome">Nome:</Label> */}
              <Input type="text" name="nome" id="nome" placeholder="Digite o Nome do Paciente" value={newPaciente.nome} onChange={onChange} />
            </InputGroup>
          </Col>
          <Col className="bg-light">
            <Col className="bg-light">
              <InputGroup>
                {/* <Label for="cpf">CPF:</Label> */}
                <Input type="text" name="cpf" id="cpf" placeholder="Digite o CPF do paciente" value={newPaciente.cpf} onChange={onChange} />
              </InputGroup>
            </Col>
          </Col>
          <Col className="bg-light">
            <InputGroup>
              {/* <Label for="rg">RG:</Label> */}
              <Input type="text" name="rg" id="rg" placeholder="Digite o RG do paciente" value={newPaciente.rg} onChange={onChange} />
            </InputGroup>
          </Col>
        </Row>
        <Row
          md="1"
          sm="2"
          xs="1"
          style={{padding:"2em"}}
        >
          <Col className="bg-light">
          </Col>
          <Col className="bg-light">
            <InputGroup>
              {/* <Label for="email">Email:</Label> */}
              <Input type="email" name="email" id="email" placeholder="Digite seu email" value={newPaciente.email} onChange={onChange}></Input>
            </InputGroup>
          </Col>
          <Col className="bg-light"></Col>
        </Row>
        <Row
          md="3"
          sm="2"
          xs="1"
          style={{padding:"2em"}}
        >
          <Col className="bg-light">
            <InputGroup>
              {/* <Label for="endereco">Endereço:</Label> */}
              <Input type="text" name="endereco" id="endereco" placeholder="Endereço da Residencia" value={newPaciente.endereco} onChange={onChange} />

            </InputGroup>
          </Col>
          <Col className="bg-light">
            <InputGroup>
              {/* <Label for="NumResidencia">N°</Label> */}
              <Input type="number" name="numeroResidencia" id="numResidencia" placeholder="Numero da Residencia" value={newPaciente.numeroResidencia} onChange={onChange}></Input>

            </InputGroup>
          </Col>
          <Col className="bg-light">
            <InputGroup>
              {/* <Label for="cidade">Cidade:</Label> */}
              <Input type="text" name="cidade" id="cidade" placeholder="Cidade do Paciente" value={newPaciente.cidade} onChange={onChange} />
            </InputGroup>

          </Col>
        </Row>
        <Row
          md="3"
          sm="2"
          xs="1"
          style={{padding:"2em"}}
        >
          <Col className="bg-light">
            <InputGroup>
              {/* <Label for="exampleState">Estado</Label> */}
              <Input type="text" name="estado" id="exampleState" placeholder="Estado" value={newPaciente.estado} onChange={onChange} />
            </InputGroup>
          </Col>
          <Col className="bg-light">
            <InputGroup>
              {/* <Label for="exampleZip">CEP</Label> */}
              <Input type="number" name="cep" id="exampleZip" placeholder="CEP" value={newPaciente.cep} onChange={onChange} />
            </InputGroup>
          </Col>
          <Col className="bg-light">
            <InputGroup>
              <Col>
                {/* <Label for="exampleAddress2">Telefone:</Label> */}
                <Input type="text" name="telefone" id="telefone" placeholder="Telefone Para Contato" value={newPaciente.telefone} onChange={onChange} />
              </Col>
            </InputGroup>
          </Col>
        </Row>
        <div>
            <Button className="teste" style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={() => IncertNewPaciente()} >Registar</Button>
          </div>
      </Form>
    </div>
  );
}
export default CreatNewPaciente;