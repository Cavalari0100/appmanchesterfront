import React, { useState } from 'react'
import axios from 'axios';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container,InputGroup } from 'reactstrap';


function CreatNewPaciente(props){
  
  const [newPaciente,setNewPaciente] = useState({nome:'',cep:'',cidade:'',cpf:'',email:'',endereco:'',estado:'',numeroResidencia:'',rg:'',telefone:''});
  const url = "https://uploadappmanchester.herokuapp.com/creatNewPaciente"
  //{"nome":"","cep":"","cidade":"","cpf":"","email":"","endereco":"","estado":"","numeroResidencia":"","rg":"","telefone":""}
  
  const IncertNewPaciente = (e) =>{
    e.preventDefault();
    const data ={ nome: newPaciente.nome,cep: newPaciente.cep,cidade: newPaciente.cidade,cpf: newPaciente.cpf,email:newPaciente.email,endereco: newPaciente.endereco,
                  estado: newPaciente.estado,numeroResidencia: newPaciente.numeroResidencia,rg: newPaciente.rg,telefone: newPaciente.telefone}
    axios.post(url,data);
  }
  const onChange = (e) =>{
    e.persist();
    setNewPaciente({ ...newPaciente, [e.target.name]: e.target.value});
  }
  
  return(
      <Container style={{backgroundColor:"#CBCBCB",paddingTop:70}}>
        <div>
          <h1>Prontuario</h1>
        </div>
        <Form onSubmit={IncertNewPaciente}>
          <Row>
            <Col md={11}>
              <InputGroup style={{paddingBottom:25}}>
                <Label for="nome">Nome:</Label>
                <Input type="text" name="nome" id="nome" placeholder="Digite o Nome do Paciente" value={newPaciente.nome} onChange={onChange}/>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <InputGroup style={{paddingBottom:25}}>
                <Label for="cpf">CPF:</Label>
                <Input type="number" name="cpf" id="cpf" placeholder="Digite o CPF do paciente" value={newPaciente.cpf} onChange={onChange}/>
              </InputGroup>
            </Col>
            <Col md={5}>
              <InputGroup style={{paddingBottom:25}}>
                <Label for="rg">RG:</Label>
                <Input type="number" name="rg" id="rg" placeholder="Digite o RG do paciente" value={newPaciente.rg} onChange={onChange} />
              </InputGroup>
            </Col>
          </Row>
            <InputGroup style={{paddingBottom:25}}>
              <Col md={11}>
                <Label for="email">Email:</Label>
                <Input type="email" name="email" placeholder="Digite seu email" value={newPaciente.email} onChange={onChange}></Input>
              </Col>
            </InputGroup>
          <InputGroup style={{paddingBottom:25}}>
            <Row>
                <Col md={9}>
                  <Label for="endereco">Endereço:</Label>
                  <Input type="text" name="endereco" id="endereco" placeholder="Endereço da Residencia" value={newPaciente.endereco} onChange={onChange}/>
                </Col>
                <Col md={2}>
                  <Label for="NumResidencia">N°</Label>
                  <Input type="number" name="numeroResidencia" id="numResidencia" placeholder="Numero da Residencia" value={newPaciente.numeroResidencia} onChange={onChange}></Input>
                </Col>
            </Row>
          </InputGroup>
          <Row>
            <Col md={5}>
              <InputGroup style={{paddingBottom:25}}>
                <Label for="cidade">Cidade:</Label>
                <Input type="text" name="cidade" id="cidade" placeholder="Cidade do Paciente" value={newPaciente.cidade} onChange={onChange}/>
              </InputGroup>
            </Col>
            <Col md={2}>
              <InputGroup style={{paddingBottom:25}}>
                <Label for="exampleState">Estado</Label>
                <Input type="text" name="estado" id="exampleState" placeholder="Estado" value={newPaciente.estado} onChange={onChange}/>
              </InputGroup>
            </Col>
            <Col md={4}>
              <InputGroup style={{paddingBottom:25}}>
                <Label for="exampleZip">CEP</Label>
                <Input type="number" name="cep" id="exampleZip" placeholder="CEP" value={newPaciente.cep} onChange={onChange}/>
              </InputGroup>  
            </Col>
          </Row>
          <InputGroup style={{paddingBottom:25}}>
            <Col md={5}>
              <Label for="exampleAddress2">Telefone:</Label>
              <Input type="text" name="telefone" id="exampleAddress2" placeholder="Telefone Para Contato" value={newPaciente.telefone} onChange={onChange}/>
            </Col>
          </InputGroup>
          <InputGroup style={{paddingBottom:25}}>
            <Col md={5}>
              <h2>Possui Convenio ?</h2>
            </Col>
            <Col md={5}>
              <Label for="exampleCheck" check>Sim</Label>
              <Input type="checkbox" name="check" id="exampleCheck"/>
            </Col>
            <Col md={5}>
              <Label for="exampleCheck" check>Não</Label>
              <Input type="checkbox" name="check" id="exampleCheck"/>
            </Col>
          </InputGroup>
          <div>
            <Button style={{background:"#3399ff"}} type="submit" className="btn btn-secondary mb-1" block onClick={"/"}>Registar</Button>
          </div>
        </Form>
      
    </Container>
  );  
}
export default CreatNewPaciente;