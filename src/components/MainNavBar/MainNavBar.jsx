import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, NavLink, Container } from 'reactstrap';

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
                >
                    <NavbarBrand href="/" style={{marginLeft: "15px", color: "black" }} >App Manchester</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem><NavLink href="/CadastroPaciente">Cadastro</NavLink></NavItem>
                    </Nav>
                    <Nav className="mr-auto" navbar>
                        <NavItem><NavLink href="/pacientes">Lista de Pacientes</NavLink></NavItem>
                    </Nav>
                </Navbar>
            </div>

        );
    }
}
export default MainNavBar;