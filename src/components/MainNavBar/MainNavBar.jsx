import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand, NavItem ,Nav, NavLink, Container} from 'reactstrap';

class MainNavBar extends Component{
    state={};
    render(){
        return(
            <div>           
                <Navbar color="light" light expand="lg" style={{position:"fixed", width:"100%", paddingLeft:25}}>
                    <NavbarBrand href="/">App Manchester</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem><NavLink href="/CadastroPaciente">Cadastro</NavLink></NavItem>
                    </Nav>
                </Navbar>
            </div>
            
        );
    }
}
export default MainNavBar;