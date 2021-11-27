import React, { useEffect,useState } from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row, Form, Label, Input, InputGroup
} from 'reactstrap';
import axios from 'axios';



function LoginEnfermeiro(props) {
    const [newLogin,setLogin] = useState({email:'', password:''});
    const url = 'https://uploadappmanchester.herokuapp.com/login'

    const onChange = (e) => {
        e.persist();
        setLogin({ ...newLogin, [e.target.name]: e.target.value });
    }

    const Login = async (e) =>{
        const result = await axios.post(url,newLogin).then(res =>{
            return res.data;
        }).catch(err =>{
            return false;
        })
        console.log(result);
        if(result.token){
            localStorage.setItem("token",result.token);
            window.location = "/"
        }else{
            alert("Você esta com problema de BIOs (bixo ignorante operando o sistema) ERRO!!!!!!")
        }
        
    }

    //função que manda o enfermeiro para pagina de registro.
    const JoinPage = () => {
        props.history.push("/register-enfermeiro")
    }
    
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Login</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Enfermeiros</CardSubtitle>
                        <Row>
                            <Col md={6}>
                                <InputGroup style={{ paddingBottom: 25 }}>
                                    <Label for="email" style={{ paddingRight: 15 }}>E-Mail :</Label>
                                    <Input type="email" name="email" id="email" placeholder="Digite seu email de contato" value={newLogin.email} onChange={onChange} />
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <InputGroup style={{ paddingBottom: 25 }}>
                                    <Label for="password" style={{ paddingRight: 15 }}>Password :</Label>
                                    <Input type="password" name="password" id="passWord" placeholder="Digite uma senha para acesso" value={newLogin.password} onChange={onChange} />
                                </InputGroup>
                            </Col>
                        </Row>
                    <Button className="teste" style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={() => Login()}>Login</Button>
                    <hr></hr>
                    <Row>
                        <Col md={6}>
                            <p>Ainda não possui cadastro ? cadastre-se aqui</p>
                        </Col>
                        <Col md={6}>
                            <Button className="teste" style={{ background: "#3399ff" }} type="submit" className="btn btn-secondary mb-1" block onClick={JoinPage}>Register</Button>
                        </Col>
                    </Row>
                </CardBody>

            </Card>
        </div>
    )
}
export default LoginEnfermeiro;