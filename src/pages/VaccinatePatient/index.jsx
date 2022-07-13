import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavbarComponent } from '../../components/Navbar';
import api from '../../services/Api';
import { toast } from "react-toastify";

export const VaccinatePatient = () => {
    let now            = new Date();
    let dateTime       = now.toISOString();
    let [_date, _time] = dateTime.split("T");

    const [vaccineName, setVaccineName] = useState('');
    const [vaccineDose, setVaccineDose] = useState('');
    const [cpf, setCpf] = useState('');
    const [date, setDate] = useState(_date);
    
    const handleVaccinatePatient = async (e) => {
        e.preventDefault();
        try {
            let resultado = await api.post("/aplicacao_de_vacinas", {
                cpf: cpf,
                vacinaId: parseInt(vacinaSelecionada),
                doseId: parseInt(doseSelecionada),
                data: date
            });


            switch (resultado.data.tipo.rotulo) {
                case "ok":
                    toast.success(`${vaccineDose} da vacina ${vaccineName} aplicada com sucesso!`);
                    break;
                case "erro":
                    toast.error(`Erro ao vacinar paciente: ${resultado.data.valor}`)
                    break;
                default:
                    toast.error("Ooops, ocorreu um erro inesperado ao vacinar paciente!");
                    break;
            }
        }
        catch (error) {
            toast.error("Erro vacinar paciente: " + error);
        }
    }
    
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
    const changeVacinaOptionHandler = (event) => {
        let idVacina = event.target.value;

        if (idVacina in dosesPorVacina) {
            setVacinaSelecionada(idVacina);
            setVaccineName(dosesPorVacina[idVacina].nome);
        }
    }

    const [doseSelecionada, setDoseSelecionada] = useState(0);
    const changeDoseOptionHandler = (event) => {
        let idDose = event.target.value;
        let vacina = dosesPorVacina[vacinaSelecionada];

        let dose = vacina.doses.find(dose => dose.id == idDose);

        if (dose !== undefined) {
            setDoseSelecionada(idDose);
            setVaccineDose(dose.nome);
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
                                <label htmlFor="nomeVacina" className="form-label text">Vacina:*:</label>
                                <select onChange={changeVacinaOptionHandler} id="nomeVacina" required className="form-select"  aria-label="Default select example" name="vacinaId">
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
                                <select onChange={changeDoseOptionHandler} id="nomeDose" required className="form-select"  aria-label="Default select example" name="doseId">
                                    <option value={0} defaultValue>Selecione uma dose</option>
                                    {dosesPorVacina && (vacinaSelecionada in dosesPorVacina) && dosesPorVacina[vacinaSelecionada].doses.map((dose) => (
                                        <option key={dose.id} value={dose.id}>{dose.nome}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-sm-8">
                                <label htmlFor="inputNome" className="form-label text">CPF do paciente:</label>
                                <input type="text" name="cpf" className="input-form" id="inputNome" placeholder="Digite o CPF do paciente" value={cpf} onChange={ (e) => setCpf(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-sm-8">
                                <label htmlFor="inputDataVacinacao" className="form-label text">Data de vacinação:</label>
                                <input type="date" name="data" className="input-form" id="inputDataVacinacao" placeholder="Digite a data de vacinação" value={date} onChange={ (e) => setDate(e.target.value)} />
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