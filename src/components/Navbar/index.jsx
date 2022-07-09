import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import { Link } from "react-router-dom";
import navbarIcon from "../../assets/navbar-icon.png";

export const NavbarComponent = () => {
    return (
        <Navbar className="menu" variant="dark" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand 
                href="/">
                    <img src={navbarIcon} alt="Ícone de vacina"/>
                    BDVacinas
                </Navbar.Brand>

                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/acessar-vacinas" id="nav-dropdown">Acessar vacinas</Nav.Link>
                    <NavDropdown title="Pacientes" id ="nav-dropdown">
                        <NavDropdown.Item><Link to="/cadastrar-pacientes">CADASTRAR</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/consultar-pacientes">CONSULTAR</Link></NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Vacinas" id ="nav-dropdown">
                        <NavDropdown.Item><Link to="/cadastrar-vacinas">CADASTRAR</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/consultar-vacinas">CONSULTAR</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/cadastrar-doses">CADASTRAR DOSES</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/vacinar-paciente" id="nav-dropdown">Vacinar paciente</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}