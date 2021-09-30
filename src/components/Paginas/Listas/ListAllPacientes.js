import React, {useState , useEffect} from 'react';
import axios from 'axios';
import { Container , Row } from 'reactstrap';

function ListAllPacientes(props){
        
    const [pacientes,setListPacientes] = useState([]);
    useEffect( async  () => {
        const url = "https://uploadappmanchester.herokuapp.com/listAllPacientes";
        const data =  await axios.get(url).then(response => {
            return response.data;
        }).catch(err =>{
            return false;
        })
            if(data){
                setListPacientes(data);
            }
    } , [])
    console.log(pacientes);


    return(
        <Container>
            <Row style={{paddingTop:50 , color:"black"}}>
            <h1>teste</h1>
            </Row>
        </Container>
    )
}
export default ListAllPacientes;