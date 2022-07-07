import { FormGroup } from "react-bootstrap";
import { NavbarComponent } from "../../components/Navbar";
import React, { useEffect, useState } from 'react';
import api from '../../services/Api.js'
import "./consultpatient.css"

export const ConsultPatient = () => {
    // API with axios
    const [vacinados, setVacinados] = useState([]);
    useEffect(() => {
        api
            .get(`/vacinados`)
            .then((response) => setVacinados(response.data))
            .catch((err) => {
                console.error("Ocorreu um erro!" + err);
            });
    }, []);

    const handleSubmitQuery = () => {

    }
    console.log(vacinados)
    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content consult-vaccines">
                    <h1 className="text">Pacientes</h1>

                    {/* <form className="consult-vaccines-form" onSubmit={handleSubmitQuery}>
                        <label className="text">CPF:</label>
                        <FormGroup className="form-group">
                            <input type="text" placeholder="" value={cpf} onChange={ (e) => setCpf(e.target.value)} />
                            <div class="text-center">
                                <button type="submit" className="btn btn-primary">Consultar</button>
                            </div>
                        </FormGroup>
                    </form> */}
                    <div className="table-btn-group">
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col" className="text">ID</th>
                                    <th scope="col" className="text">NOME</th>
                                    <th scope="col" className="text">CPF</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vacinados.map((data) => {
                                    return (
                                        <tr>
                                            <td data-label="ID">{data.id}</td>
                                            <td data-label="NOME">{data.nome}</td>
                                            <td data-label="CPF">{data.cpf}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="btn-row">
                            <div class="text-center">
                                <button className="btn btn-primary">Editar</button>
                            </div>
                            <div class="text-center">
                                <button className="btn btn-primary btn-color">Deletar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}