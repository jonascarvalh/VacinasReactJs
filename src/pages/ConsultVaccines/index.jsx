import { FormGroup } from "react-bootstrap";
import { NavbarComponent } from "../../components/Navbar";
import React, { useEffect, useState } from 'react';
import api from '../../services/Api.js'
import "./consultvaccines.css"

export const ConsultVaccines = () => {
    // API with axios
    const [vacinas, setVacinas] = useState([]);
    const [nome, setNome] = useState();

    const handleChange = event => {
        const target = event.target
        const name = target.name 
        const value = target.value 
        console.log(`${name} ${value}`)
    }
    useEffect(() => {
        api
            .get(`/vacinas`)
            .then((response) => setVacinas(response.data))
            .catch((err) => {
                console.error("Ocorreu um erro!" + err);
            });
    }, []);

    const handleSubmitQuery = () => {

    }
    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content consult-vaccines">
                    <h1 className="text">Vacinas</h1>

                    <form className="consult-vaccines-form" onSubmit={handleSubmitQuery}>
                        <label className="text">Nome:</label>
                        <FormGroup className="form-group">
                            <input type="text" placeholder="" value={nome} onChange={ (e) => setNome(e.target.value)} />
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Consultar</button>
                            </div>
                        </FormGroup>
                    </form>
                    <div className="table-btn-group">
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col" className="text">Select</th>
                                    <th scope="col" className="text">ID</th>
                                    <th scope="col" className="text">NOME</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vacinas.map((data) => {
                                    return (
                                        <tr>
                                            <td data-label="rb"><input type="radio" name="rb" value={data.id} onChange={handleChange}/></td>
                                            <td data-label="ID">{data.id}</td>
                                            <td data-label="NOME">{data.nome}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="btn-row">
                            <div className="text-center">
                                <button className="btn btn-primary">Editar</button>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary btn-color">Deletar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}