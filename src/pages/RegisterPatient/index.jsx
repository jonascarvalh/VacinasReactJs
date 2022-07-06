import { NavbarComponent } from '../../components/Navbar';

export const RegisterPatient = () => {
    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content">
                    <h1 className="text">Cadastro de Paciente</h1>
                    <form className="row g-2 content">
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputNome" class="form-label text">Nome:</label>
                                <input type="email" class="input-form" id="inputNome" placeholder="Digite seu Nome aqui"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputCPF" class="form-label text">CPF:</label>
                                <input type="number" class="input-form" id="inputCPF" placeholder="Digite seu CPF aqui"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputEndereço" class="form-label text">Endereço:</label>
                                <input type="text" class="input-form" id="inputEndereço" placeholder="Digite seu endereço aqui"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputCEP" class="form-label text">CEP:</label>
                                <input type="number" class="input-form" id="inputCEP" placeholder="Digite seu CEP aqui"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputCidade" class="form-label text">Cidade:</label>
                                <input type="text" class="input-form" id="inputCidade" placeholder="Digite sua cidade aqui"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputEstado" class="form-label text">Estado:</label>
                                <input type="text" class="input-form" id="inputEstado" placeholder="Digite seu estado aqui"/>
                            </div>
                        </div>
                        <div class="col-md-6 col-md-offset-3 text-center mt-4 mb-3">
                            <button type="submit" class="btn btn-light">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}