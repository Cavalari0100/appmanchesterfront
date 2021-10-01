import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, NavLink, Container, Row, Col } from 'reactstrap';

function MainNavBar(props) {

    console.log(props.user)
    function HandleUser() {
        if (props.user) {
            return(
            <Col>
                <NavItem>{props.user}</NavItem>
            </Col>
            )
        }
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
                                <NavItem><NavLink href="/login-enfermeiro">Login</NavLink></NavItem>
                            </Nav>
                        </Col>
                            {HandleUser()}
                    </Row>
                </Container>
            </Navbar>
        </div>

    );

}
export default MainNavBar;