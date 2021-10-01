import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, NavLink, Container, Row, Col } from 'reactstrap';

class MainNavBar extends Component {
    state = {};
    render() {
        return (
            <div style={{ paddingBottom: 100 }}>
                <Navbar fixed="top"
                    expand="md"
                    style={
                        { backgroundColor: "white", position: "fixed", width: '100%' }
                    }
                >   <Container>
                        <Row>
                            <Col md={3}>
                                <NavbarBrand href="/" style={{ marginLeft: "15px", color: "black" }} >App Manchester</NavbarBrand>
                            </Col>
                            <Col md={3}>
                                <Nav className="mr-auto" navbar>
                                    <NavItem><NavLink href="/CadastroPaciente">Cadastrar Paciente</NavLink></NavItem>
                                </Nav>
                            </Col>
                            <Col md={3}>
                                <Nav className="mr-auto" navbar>
                                    <NavItem><NavLink href="/pacientes">Lista de Pacientes</NavLink></NavItem>
                                </Nav>
                            </Col>
                            <Col md={3}>
                                <Nav className="mr-auto" navbar>
                                    <NavItem><NavLink href="/login-enfermeiro">Login</NavLink></NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </div>

        );
    }
}
export default MainNavBar;