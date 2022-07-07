import { useState } from "react";
import { FormGroup } from "react-bootstrap";
import { NavbarComponent } from "../../components/Navbar";
import "./consultpatient.css"

export const ConsultPatient = () => {
    const [cpf, setCpf] = useState('');

    const handleSubmitQuery = () => {

    }
    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content consult-vaccines">
                    <h1 className="text">Vacinas Tomadas</h1>

                    <form className="consult-vaccines-form" onSubmit={handleSubmitQuery}>
                        <label className="text">CPF:</label>
                        <FormGroup className="form-group">
                            <input type="text" placeholder="" value={cpf} onChange={ (e) => setCpf(e.target.value)} />
                            <div class="text-center">
                                <button type="submit" className="btn btn-primary">Consultar</button>
                            </div>
                        </FormGroup>
                    </form>

                    <div className="table-btn-group">
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col" className="text">ID</th>
                                    <th scope="col" className="text">NOME DA VACINA</th>
                                    <th scope="col" className="text">DATA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="ID">1</td>
                                    <td data-label="NOME DA VACINA">Covid: Pfizer</td>
                                    <td data-label="DATA">06/07/2022</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="text-center">
                            <button className="btn btn-primary generate-pdf-btn">Gerar PDF</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}