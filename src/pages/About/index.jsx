import { NavbarComponent } from '../../components/Navbar';
import gitHubLogo from "../../assets/github-logo.png";

export const About = () => {
    return (
        <div className="App">
            <NavbarComponent/>
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
                        <a href="https://github.com/CiroDourado" target="_blank" className="text" rel="noreferrer">
                            <img className="github_logo" src={gitHubLogo} />/CiroDourado
                        </a>
                        <a href="https://github.com/Yoac-eng" target="_blank" className="text" rel="noreferrer">
                            <img className="github_logo" src={gitHubLogo} />/Yoac-eng
                        </a>
                        <a href="https://github.com/jonascarvalh" target="_blank" className="text" rel="noreferrer">
                            <img className="github_logo" src={gitHubLogo}/>/jonascarvalh
                        </a>
                        <a href="https://github.com/Thiago-Gonzalez" target="_blank" className="text" rel="noreferrer">
                            <img className="github_logo" src={gitHubLogo}/>/Thiago-Gonzalez
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}