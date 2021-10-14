import React, {useState , useEffect} from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import tableIcons from '../../common/materialTableIcons';
import { Container , Row } from 'reactstrap';

function ListAllProntuarios(props){
        
    const [prontuarios,setListProntuarios] = useState([]);
    useEffect( async  () => {
        const url = "https://uploadappmanchester.herokuapp.com/listAllSintomas";
        const data =  await axios.get(url).then(response => {
            return response.data;
        }).catch(err =>{
            return false;
        })
            if(data){
                setListProntuarios(data);
            }
    } , [])

    return(
        <Container>
            <MaterialTable
                icons={tableIcons}
                title='Lista de prontuarios'
                columns={[
                    {
                        title:'temperatura',
                        field:"temperatura",
                        render:(data)=>{
                            if(data.temperatura > 0){
                                if(data.temperatura <= 36){
                                    return(
                                        <p style={{color:"green"}}>{data.temperatura}°C</p>
                                    )
                                }
                                if(data.temperatura > 37){
                                    return(
                                        <p style={{color:"red"}}>{data.temperatura}°C</p>
                                    )
                                }
                            }
                        }
                    },
                    {
                        title:'glicemia',
                        field:"glicemia",
                        render:(data)=>{
                            if(data.glicemia > 70){
                                if(data.glicemia <= 110){
                                    return(
                                        <p style={{color:"green"}}>{data.glicemia}mg/dL</p>
                                    )
                                }
                                if(data.glicemia >= 126){
                                    return(
                                        <p style={{color:"red"}}>{data.glicemia}mg/dL</p>
                                    )
                                }
                            }
                        }
                    },
                    {
                        title:'pressao',
                        field:"pressao"
                    },
                    {
                        title:'fc',
                        field:"fc",
                    },
                ]}
                data={prontuarios}
                actions={[
                    {
                        icon:'→',
                        tooltip:'ID DO PACIENTE',
                        onClick:(event,prontuarios) => alert("ID DO PACIENTE : " + prontuarios.id)
                    }
                ]}
             />
        </Container>
    )
}
export default ListAllProntuarios;