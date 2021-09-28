import React from 'react';
import { Component } from 'react';
import { Container,Col,Row } from 'reactstrap';

class FirstPage extends Component {
    state={};
    render(){
        return(
            <div>
                <Container style={{backgroundColor:"#305040"}}>
                    <Row style={{paddingTop:70}}>
                        <Col style={{paddingTop:90, color:"white"}} md={6}>
                            <p>Aplicativo para facilitar e agilizar o processo de cadastro de pacientes nas unidade de pronto atendimento. Classificando 
                                os pacientes baseados no protocolo de manchester.
                            </p>
                        </Col>
                        <Col md={6}>
                            <img
                                src={process.env.PUBLIC_URL + "/background.jpg"}
                                width="500px"
                                alt="logo"
                                style={{boxShadow:"10px 5px 5px black"}}
                            />
                        </Col> 
                    </Row>
                    <br></br>
                    <div style={{backgroundColor:"white"}}>
                        <hr></hr>
                    </div>
                    <footer>
                        <h5 style={{color:"white"}}>Created by Joao Vitor Cavalari Spavier</h5>
                    </footer>
                </Container>
            </div>
        );
    }
}
export default FirstPage;