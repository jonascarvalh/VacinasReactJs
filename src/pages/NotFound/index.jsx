import { NavbarComponent } from "../../components/Navbar";


export default function NotFound() {

    return (
        <div className="App">
            <NavbarComponent />
            <div className="container">
                <div className="content">
                    <h1 className="text">Oooops! Página não encontrada</h1>
                    <p className="text">Para retornar a uma rota válida, utilize o menu de navegação no topo da página</p>
                </div>
            </div>
        </div>
    );
}