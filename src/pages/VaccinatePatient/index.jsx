import { NavbarComponent } from '../../components/Navbar';

export const VaccinatePatient = () => {
    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content">
                    <h1 className="text">Vacinar Paciente</h1>
                    <form className="row g-2 content">
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputNomeDaVacina" class="form-label text">Nome da vacina:</label>
                                <input type="text" class="input-form" id="inputNomeDaVacina" placeholder="Digite o nome da vacina"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputDose" class="form-label text">Dose:</label>
                                <input type="number" class="input-form" id="inputDose" placeholder="Digite o numero da sua dose"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputNome" class="form-label text">Nome do paciente:</label>
                                <input type="email" class="input-form" id="inputNome" placeholder="Digite seu Nome"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputLocalVacinacao" class="form-label text">Local de vacinacao:</label>
                                <input type="number" class="input-form" id="inputLocalVacinacao" placeholder="Digite o local de sua vacinação"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputDataVacinacao" class="form-label text">Data de vacinação:</label>
                                <input type="date" class="input-form" id="inputDataVacinacao" placeholder="Digite a data de sua vacinação"/>
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