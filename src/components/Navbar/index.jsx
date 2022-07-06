import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import { Link } from "react-router-dom";
import navbarIcon from "../../assets/navbar-icon.png";

export const NavbarComponent = () => {
    return (
        <Navbar className="menu" variant="dark">
            <Container>
                <Navbar.Brand 
                href="/">
                    <img src={navbarIcon} alt="Ícone de vacina"/>
                    BDVacinas
                </Navbar.Brand>
                <Nav>
                    <NavDropdown title="Pacientes" id ="nav-dropdown">
                        <NavDropdown.Item><Link to="/registrar-pacientes" >CADASTRAR</Link></NavDropdown.Item>
                        <NavDropdown.Item>CONSULTAR</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Vacinas" id ="nav-dropdown">
                        <NavDropdown.Item><Link to="/vacinar-pacientes" >VACINAR</Link></NavDropdown.Item>
                        <NavDropdown.Item>CONSULTAR</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/" id="nav-dropdown">Sobre</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}