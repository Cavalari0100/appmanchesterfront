import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, NavLink, Container, Row, Col } from 'reactstrap';

function MainNavBar(props) {

    function isLogin() {
        if (!props.user) {
            return (
                <Nav className="mr-auto" navbar>
                    <NavItem><NavLink href="/login-enfermeiro">Login</NavLink></NavItem>
                </Nav>
            )
        }
    }

    function HandleUser() {
        if (props.user) {
            return (
                <Container>
                    <Col>
                        <NavItem>{props.user}</NavItem>
                    </Col>
                    <Col>
                        <NavItem><NavLink href="/pacientes">Lista de Pacientes</NavLink></NavItem>
                    </Col>
                    <Col>
                        <NavItem><NavLink href="/cadastroPaciente">Cadastrar Paciente</NavLink></NavItem>
                    </Col>
                </Container>
            )
        }
    }
    function logout() {
        return (
            <Col>
                <NavItem><NavLink href="/">Logout</NavLink></NavItem>
            </Col>
        )
    }
    return (
        <div style={{ paddingBottom: 100 }}>
            <Navbar fixed="top"
                expand="md"
                style={
                    { backgroundColor: "white", position: "fixed", width: '100%' }
                }
            >
                <Container>
                    <Row>
                        <Col>
                            <p>LOGO</p>
                        </Col>
                        <Col>
                            <NavbarBrand href="/" style={{ marginLeft: "15px", color: "black" }} >App Manchester</NavbarBrand>
                        </Col>
                        <Col>
                            <Nav className="mr-auto" navbar>
                                <NavItem><NavLink href="/sintomas">cadastro Sintomas</NavLink></NavItem>
                            </Nav>
                            {isLogin()}
                            {HandleUser()}
                            {logout()}
                        </Col>

                    </Row>
                </Container>
            </Navbar>
        </div>

    );

}
export default MainNavBar;