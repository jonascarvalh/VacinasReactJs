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

    const [vacina, setVacina] = useState({
        nomeVacina:""
    });

    const [dose, setDose] = useState({
        nomeDose:""
    })
    const [alertModal, setAlertModal] = useState({
        isFormSubmited: false,
        message:"",
    });
    
    const handleChange = (e) => {
        const data = {...vacina};
        data[e.target.id] = e.target.value;
        setVacina(data);
    };

    const [vacinas, setVacinas] = useState();
    //Receber vacinas existentes
    useEffect(() => {
        const getVacinas = async () => {
            try {
                const result = await api.get(`/vacinas`)
                const data = await result.data
                setVacinas(data)
            } catch (error) {
                console.error("Ocorreu um erro!" + error);
            }
        }
        getVacinas();
    }, []);

    const [doses, setDoses] = useState();
    // Receber doses existentes
    useEffect(() => {
        const getDoses = async () => {
            try {
                const result = await api.get(`/doses`)
                const data = await result.data
                setDoses(data)
            } catch (error) {
                console.error("Ocorreu um erro!" + error);
            }
        }
        getDoses();
    })
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
                                <select value={vacina.nomeVacina} onChange={(e) => handleChange(e)} id="nomeVacina" required className="form-select"  aria-label="Default select example">
                                    <option value="" defaultValue>Selecione uma vacina</option>
                                    {vacinas && vacinas.map((vacina) => (
                                        <option key={vacina.id} value={vacina.id}>{vacina.nome}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center align-items-center">
                            <div className="col-sm-8">
                                <label htmlFor="nomeVacina" className="form-label text">Dose:*:</label>
                                <select value={dose.nomeDose} onChange={(e) => handleChange(e)} id="nomeDose" required className="form-select"  aria-label="Default select example">
                                    <option value="" defaultValue>Selecione uma dose</option>
                                    {doses && doses.map((dose) => (
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