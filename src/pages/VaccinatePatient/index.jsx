import { useState } from 'react';
import { NavbarComponent } from '../../components/Navbar';

export const VaccinatePatient = () => {
    const [vaccineName, setVaccineName] = useState('');
    const [vaccineDose, setVaccineDose] = useState('');
    const [cpf, setCpf] = useState('');
    const [vaccineSite, setVaccineSite] = useState('');
    const [date, setDate] = useState(null);

    const handleVaccinatePatient = (e) => {
        e.preventDefault();

        alert("Form submetido!");
        console.log(`Nome da vacina: ${vaccineName}`);
        console.log(`Dose da vacina: ${vaccineDose}`);
        console.log(`CPF: ${cpf}`);
        console.log(`Local da vacina: ${vaccineSite}`);
        console.log(`Data da vacina: ${date}`);
    }

    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content">
                    <h1 className="text">Vacinar Paciente</h1>
                    <form className="row g-2 content" onSubmit={handleVaccinatePatient}>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-sm-8">
                                <label for="inputNomeDaVacina" class="form-label text">Nome da vacina:</label>
                                <input type="text" className="input-form" id="inputNomeDaVacina" placeholder="Digite o nome da vacina" value={vaccineName} onChange={ (e) => setVaccineName(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-sm-8">
                                <label for="inputDose" className="form-label text">Dose:</label>
                                <input type="text" className="input-form" id="inputDose" placeholder="Digite o numero da dose" value={vaccineDose} onChange={ (e) => setVaccineDose(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-sm-8">
                                <label for="inputNome" class="form-label text">CPF do paciente:</label>
                                <input type="text" class="input-form" id="inputNome" placeholder="Digite o CPF do paciente" value={cpf} onChange={ (e) => setCpf(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-sm-8">
                                <label for="inputLocalVacinacao" class="form-label text">Local de vacinacao:</label>
                                <input type="text" className="input-form" id="inputLocalVacinacao" placeholder="Digite o local de vacinação" value={vaccineSite} onChange={ (e) => setVaccineSite(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-sm-8">
                                <label for="inputDataVacinacao" class="form-label text">Data de vacinação:</label>
                                <input type="date" class="input-form" id="inputDataVacinacao" placeholder="Digite a data de vacinação" value={date} onChange={ (e) => setDate(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-6 col-md-offset-3 text-center mt-4 mb-3">
                            <button type="submit" className="btn btn-light">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}