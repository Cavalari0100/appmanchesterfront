import React, {useState , useEffect} from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import tableIcons from '../../common/materialTableIcons';
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

    return(
        <Container>
            <MaterialTable
                icons={tableIcons}
                title='Lista de Pacientes Cadastrados'
                columns={[
                    {
                        title:'Nome',
                        field:"nome"
                    },
                    {
                        title:'E-mail',
                        field:"email"
                    },
                    {
                        title:'Cidade',
                        field:"cidade"
                    },
                    {
                        title:'Endereço',
                        field:"endereco"
                    },
                    {
                        title:'N°',
                        field:"numeroResidencia"
                    },
                    {
                        title:'Estado',
                        field:"estado"
                    },
                    {
                        title:'Cep',
                        field:"cep"
                    },
                    {
                        title:'CPF',
                        field:"cpf"
                    },
                    {
                        title:'RG',
                        field:"rg"
                    },
                    {
                        title:'Telefone',
                        field:"telefone"
                    },
                ]}
                data={pacientes}
                actions={[
                    {
                        icon:'→',
                        tooltip:'ID DO PACIENTE',
                        onClick:(event,pacientes) => alert("ID DO PACIENTE : " + pacientes.id)
                    }
                ]}
             />
        </Container>
    )
}
export default ListAllPacientes;