import React, { useState } from 'react';
import axios from 'axios';
import { Container , Form } from 'reactstrap';

function CreatNewEnfermeiro(props) {
    const [newEnfermeiro, setNewEnfermeiro] = useState({ nome: '', email: '', passWord: '', cpf: '', rg: '', dataNascimento: '', coren: '' })
    const url = 'urlbackend'

    const IncertNewEnfermeiro = (e) => {
        e.preventDefault();
        const data = { nome: newEnfermeiro.nome, email: newEnfermeiro.email, passWord: newEnfermeiro.passWord, cpf: newEnfermeiro.cpf, rg: newEnfermeiro.rg, coren: newEnfermeiro.coren, dataNascimente:newEnfermeiro.dataNascimento }
        axios.post(url,data);
        props.history.push("/");
    }
    const onChange = (e) =>{
        e.persist();
        setNewEnfermeiro({...newEnfermeiro, [e.target.name]: e.target.value});
    }
    return(
        <Container>
            <Form onSubmit={IncertNewEnfermeiro}>

            </Form>
        </Container>
    )
}
export default CreatNewEnfermeiro;