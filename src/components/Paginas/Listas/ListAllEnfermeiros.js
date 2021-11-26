import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Table, Row, Col } from 'reactstrap';

function ListAllEnfermeiros(props) {

    const [update, setUpdate] = useState(null);
    const [enfermeiro, setListEnfermeiro] = useState([]);
    useEffect(async () => {
        const url = "https://uploadappmanchester.herokuapp.com/listAllEnfermeiro";
        const data = await axios.get(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        if (data) {
            setListEnfermeiro(data);
        }
    }, [])

    const DeleteEnfermeiro = async (id) => {
        const url = "https://uploadappmanchester.herokuapp.com/enfermeiro/" + id;
        const data = await axios.delete(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        let index = null
        enfermeiro.forEach((enfermeiro, posicao) => {
            if (enfermeiro._id === id) {
                index = posicao;
            }
        });
        const tempEnfermeiro = enfermeiro;
        tempEnfermeiro.splice(index, 1)
        setListEnfermeiro(tempEnfermeiro);
        setUpdate(new Date())

    }
    return (
        <Container>
            <h1>Enfermeiros cadastrados</h1>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            NOME
                        </th>
                        <th>
                            EMAIL
                        </th>
                        <th>
                            CPF
                        </th>
                        <th>
                            RG
                        </th>
                        <th>
                            COREN
                        </th>
                        <th>
                            PASSWORD
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {enfermeiro.map(enfermeiro => {
                        return (
                            <tr key={enfermeiro.nome}>
                                <td ><p>{enfermeiro.nome}</p></td>
                                <td >{enfermeiro.email}</td>
                                <td >{enfermeiro.cpf}</td>
                                <td >{enfermeiro.rg}</td>
                                <td >{enfermeiro.coren}</td>
                                <td >{enfermeiro.password}</td>
                                <td ><Button onClick={() => DeleteEnfermeiro(enfermeiro._id)}>Delete</Button></td>
                               <td ><Button onClick={ ()=> window.location = "/UpdateEnfermeiro/" + enfermeiro._id}>Editar</Button></td> 
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container >
    )
}
export default ListAllEnfermeiros;