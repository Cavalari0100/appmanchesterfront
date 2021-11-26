import { yellow } from '@material-ui/core/colors';
import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, NavLink, Container, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
            console.log(props)
            return (
                <div style={{ paddingBottom: 10 }}>
                    <Navbar color='dark'>
                        <Container>
                            <Nav className="me-auto">
                                <NavItem style={{ color: "white", padding: "7px" }}>{props.user.nome}</NavItem>
                                <UncontrolledDropdown
                                    inNavbar
                                    nav
                                >
                                    <DropdownToggle
                                        caret
                                        nav
                                    >
                                        Cadastros
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavItem><NavLink href="/cadastroPaciente">Cadastrar Paciente</NavLink></NavItem>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavItem><NavLink href="/sintomas">Cadastro Sintomas</NavLink></NavItem>
                                        </DropdownItem>
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown
                                    inNavbar
                                    nav
                                >
                                    <DropdownToggle
                                        caret
                                        nav
                                    >
                                        Listas
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavItem><NavLink href="/pacientes">Lista de Pacientes</NavLink></NavItem>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavItem><NavLink href="/prontuarios">Lista de Prontuarios</NavLink></NavItem>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavItem><NavLink href="/enfermeiros">Lista de Enfermeiros</NavLink></NavItem>
                                        </DropdownItem>
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Container>
                    </Navbar>
                </div >
            )
        }
    }
    function logout() {
        function garbageLocalStorage() {
            localStorage.removeItem("token")
        }

        return (
            <div style={{ paddingBottom: 10 }}>
                <Navbar color='dark'>
                    <Container>
                        <Nav className="me-auto">
                            <NavItem style={{ color: "white" }} onClick={() => garbageLocalStorage()}><NavLink href="/">Log Out</NavLink></NavItem>
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