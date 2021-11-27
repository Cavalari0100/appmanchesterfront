import React, {useState , useEffect} from 'react';
import axios from 'axios';
import {  Button, Container, Table, Row, Col} from 'reactstrap';

function ListAllProntuarios(props){

    const [update, setUpdate] = useState(null);
    const [prontuarios,setListProntuarios] = useState([]);
    useEffect( async  () => {
        const url = "https://uploadappmanchester.herokuapp.com/sintomas";
        const data =  await axios.get(url).then(response => {
            return response.data;
        }).catch(err =>{
            return false;
        })
            if(data){
                setListProntuarios(data);
            }
    } , [])

    const DeleteProntuario = async (id) => {
        const url = "https://uploadappmanchester.herokuapp.com/sintomas/" + id;
        const data = await axios.delete(url).then(response => {
            return response.data;
        }).catch(err => {
            return false;
        })
        let index = null
        prontuarios.forEach((prontuario, posicao) => {
            if (prontuario._id === id) {
                index = posicao;
            }
        });
        const tempProntuario = prontuarios;
        tempProntuario.splice(index, 1)
        setListProntuarios(tempProntuario);
        setUpdate(new Date())

    }

    return(
        <Container fluid>
            <h1>Lista de prontuarios</h1>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>
                           Temperatura
                        </th>
                        <th>
                            Glicemia
                        </th>
                        <th>
                            Pressão
                        </th>
                        <th>
                            FC
                        </th>
                        <th>
                            Deletar
                        </th>
                        <th>
                            Editar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {prontuarios.map(prontuarios => {
                        return (
                            <tr key={prontuarios.temperatura}>
                                <td ><p>{prontuarios.temperatura}</p></td>
                                <td ><p>{prontuarios.glicemia}</p></td>
                                <td >{prontuarios.pressao}</td>
                                <td> {prontuarios.fc}</td>
                                <td ><Button onClick={() => DeleteProntuario(prontuarios._id)}>Delete</Button></td>
                                <td ><Button onClick={() => window.location = "/UpdateProntuario/" + prontuarios._id}>Editar</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container >
    )
}
export default ListAllProntuarios;