import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavbarComponent } from '../../components/Navbar';
import api from '../../services/Api';

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
    const [alertModal, setAlertModal] = useState({
        isFormSubmited: false,
        message:"",
    });
    
    const [dosesPorVacina, setDosesPorVacina] = useState();
    // Receber doses por vacina existentes
    useEffect(() => {
        const getDosesPorVacina = async () => {
            try {
                const result = await api.get(`/doses_das_vacinas`)
                const data = await result.data
                setDosesPorVacina(data)
            } catch (error) {
                console.error("Ocorreu um erro!" + error);
            }
        }
        getDosesPorVacina();
    });

    const [vacinaSelecionada, setVacinaSelecionada] = useState(0);
    const [nomeVacina       , setNomeVacina       ] = useState("");
    const changeVacinaOptionHandler = (event) => {
        let idVacina = event.target.value;

        if (idVacina in dosesPorVacina) {
            let vacina = dosesPorVacina[idVacina];
            setVacinaSelecionada(idVacina);
            setNomeVacina(vacina.nome);
        }
    }

    const [doseSelecionada, setDoseSelecionada] = useState(0);
    const [nomeDose       , setNomeDose       ] = useState("");
    const changeDoseOptionHandler = (event) => {
        let idDose = event.target.value;
        let vacina = dosesPorVacina[vacinaSelecionada];

        if (vacina.doses.map(dose => dose.id).find(id => id === idDose)) {
            setDoseSelecionada(idDose);
            setNomeDose(vacina.doses.find(dose => dose.id == idDose).nome);
        }
    }

    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content">
                    <h1 className="text">Vacinar Paciente</h1>
                    <form className="row g-2 content" onSubmit={handleVaccinatePatient}>
                        <div className="form-group d-flex justify-content-center align-items-center">
                            <div className="col-sm-8">
                                <label htmlFor="nomeVacina" className="form-label text">Nome da Vacina:*:</label>
                                <select value={nomeVacina} onChange={changeVacinaOptionHandler} id="nomeVacina" required className="form-select"  aria-label="Default select example">
                                    <option value={0} defaultValue>Selecione uma vacina</option>
                                    {dosesPorVacina && Object.keys(dosesPorVacina).map((id) => (
                                        <option key={id} value={id}>{dosesPorVacina[id].nome}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center align-items-center">
                            <div className="col-sm-8">
                                <label htmlFor="nomeVacina" className="form-label text">Dose:*:</label>
                                <select value={nomeDose} onChange={changeDoseOptionHandler} id="nomeDose" required className="form-select"  aria-label="Default select example">
                                    <option value={0} defaultValue>Selecione uma dose</option>
                                    {dosesPorVacina && (vacinaSelecionada in dosesPorVacina) && dosesPorVacina[vacinaSelecionada].doses.map((dose) => (
                                        <option key={dose.id} value={dose.id}>{dose.nome}</option>
                                    ))}
                                </select>
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