import React, { useEffect, useState } from 'react';
import './App.css';
import api from './services/Api'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
function App() {
    // API with axios
    const [status, setStatus] = useState();

    useEffect(() => {
        api
            .get('/ws/65215000/json/')
            .then((response) => setStatus(response.data))
            .catch((err) => {
                console.error("Ocorreu um erro!" + err);
            });
            // {status?.cep}
    }, []);
    return (
        <div className="App">
            <Navbar className="menu" variant="dark">
                <Navbar.Brand>
                    <img src="" alt="" />
                    BDVacinas
                </Navbar.Brand>
                <Nav>
                    <NavDropdown title="PACIENTES">
                        <NavDropdown.Item>CADASTRAR</NavDropdown.Item>
                        <NavDropdown.Item>CONSULTAR</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="VACINAS">
                        <NavDropdown.Item>VACINAR</NavDropdown.Item>
                        <NavDropdown.Item>CONSULTAR</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>SOBRE</Nav.Link>
                </Nav>
            </Navbar>
            <div className="container">
                <div className="content">
                    <h1 className="text">Dados Vacinais</h1>
                    <div className="paragraphs">
                        <p className="text">
                            Neste sistema, dispomos de cadastros de pacientes e vacinas, bem como consulta das vacinas tomadas pelo lado do paciente.
                        </p>
                        <p className="text">
                            Desenvolvido por estudantes de Engenharia de Computação da Universidade Estadual do Maranhão.
                        </p>
                        <div className="names text">
                            Alunos: <br/>
                            Ciro Dourado de Oliveira <br/>
                            Cayo Ricardo Milhomem de Sousa Cutrim<br/>
                            Jonas Carvalho de Sousa Neto<br/>
                            Thiago González Maia de Souza<br/>
                        </div>
                    </div>
                    <div className="socials">
                        <a href="https://github.com/CiroDourado" target="_blank" className="text">
                            <img className="github_logo" src={require('./assets/github-logo.png')} />/CiroDourado
                        </a>
                        <a href="https://github.com/Yoac-eng" target="_blank" className="text">
                            <img className="github_logo" src={require('./assets/github-logo.png')} />/Yoac-eng
                        </a>
                        <a href="https://github.com/jonascarvalh" target="_blank" className="text">
                            <img className="github_logo" src={require('./assets/github-logo.png')} />/jonascarvalh
                        </a>
                        <a href="https://github.com/Thiago-Gonzalez" target="_blank" className="text">
                            <img className="github_logo" src={require('./assets/github-logo.png')} />/Thiago-Gonzalez
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
