import { yellow } from '@material-ui/core/colors';
import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, NavLink, Container, Row, Col } from 'reactstrap';

function MainNavBar(props) {

    function isLogin() {
        if (!props.user) {
            return (
                <div style={{ paddingBottom: 10 }}>
                    <Navbar color='dark'>
                        <Container>
                            <Nav className="me-auto">
                                <NavItem><NavLink href="/login-enfermeiro">Login</NavLink></NavItem>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            )
        }
    }

    function HandleUser() {
        if (props.user) {
            return (
                <div style={{ paddingBottom: 10 }}>
                    <Navbar color='dark'>
                        <Container>
                            <Nav className="me-auto">
                                <NavItem><NavLink href="/pacientes">Lista de Pacientes</NavLink></NavItem>
                                <NavItem><NavLink href="/cadastroPaciente">Cadastrar Paciente</NavLink></NavItem>
                                <NavItem><NavLink href="/sintomas">Cadastro Sintomas</NavLink></NavItem>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            )
        }
    }
    function logout() {

        return (
            <div style={{ paddingBottom: 10 }}>
                <Navbar color='dark'>
                    <Container>
                        <Nav className="me-auto">
                            <NavItem><NavLink href="/login-enfermeiro">Log Out</NavLink></NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
    return (
        <div style={{ paddingBottom: 10 }}>
            <Navbar color='dark'>
                <Container>
                    <NavbarBrand href="/"><h1>App Manchester</h1></NavbarBrand>
                    <Nav className="me-auto">
                        <NavItem href="/">{isLogin()}</NavItem>
                        <NavItem>{HandleUser()}</NavItem>
                        <NavItem onClick={() => localStorage.removeItem('login')}>{logout()}</NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );

}
export default MainNavBar;