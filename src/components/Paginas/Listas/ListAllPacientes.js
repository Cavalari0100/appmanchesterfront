import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Table, Row, Col } from 'reactstrap';

function ListAllEnfermeiros(props) {

    const [update, setUpdate] = useState(null);
    const [pacientes, setListPacientes] = useState([]);
    useEffect(async () => {
        const url = "https://uploadappmanchester.herokuapp.com/paciente";
        const data = await axios.get(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        if (data) {
            setListPacientes(data);
        }
    }, [])

    const DeletePaciente = async (id) => {
        const url = "https://uploadappmanchester.herokuapp.com/paciente/" + id;
        const data = await axios.delete(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        let index = null
        pacientes.forEach((paciente, posicao) => {
            if (paciente._id === id) {
                index = posicao;
            }
        });
        const tempPaciente = pacientes;
        tempPaciente.splice(index, 1)
        setListPacientes(tempPaciente);
        setUpdate(new Date())

    }
    return (
        <Container fluid>
            <h1>Pacientes cadastrados</h1>
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
                            TELEFONE
                        </th>
                        <th>
                            CPF
                        </th>
                        <th>
                            RG
                        </th>
                        <th>
                            ENDEREÇO
                        </th>
                        <th>
                            N°
                        </th>
                        <th>
                            CIDADE
                        </th>
                        <th>
                            ESTADO
                        </th>
                        <th>
                            CEP
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map(pacientes => {
                        return (
                            <tr key={pacientes.nome}>
                                <td ><p>{pacientes.nome}</p></td>
                                <td >{pacientes.email}</td>
                                <td >{pacientes.telefone}</td>
                                <td >{pacientes.cpf}</td>
                                <td >{pacientes.rg}</td>
                                <td >{pacientes.endereco}</td>
                                <td >{pacientes.numeroResidencia}</td>
                                <td >{pacientes.cidade}</td>
                                <td >{pacientes.estado}</td>
                                <td >{pacientes.cep}</td>
                                <td ><Button onClick={() => DeletePaciente(pacientes._id)}>Delete</Button></td>
                                <td ><Button onClick={() => window.location = "/UpdatePaciente/" + pacientes._id}>Editar</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container >
    )
}
export default ListAllEnfermeiros;