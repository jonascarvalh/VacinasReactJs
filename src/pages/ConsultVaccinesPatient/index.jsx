import { useEffect, useState } from "react";
import { FormGroup } from "react-bootstrap";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import api from '../../services/Api.js'
import { toast } from "react-toastify";

import { NavbarComponent } from "../../components/Navbar";

import './consultvaccines.css';

export default function ConsultVaccinesPatient() {
    const [cpf, setCpf] = useState('');
    const [vacinasTomadas, setVacinasTomadas] = useState([]);
    const [queryIsSubmited, setQueryIsSubmited] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmitQuery = async (e) => {
        e.preventDefault();
        try {   
            setLoading(true);
            let resultado = await api.post("/aplicacao_de_vacinas/consulta/cpf", {
                cpf: cpf
            });

            let vacinas = resultado.data.vacinas.map((vacina) => {
                vacinas.append(vacina);
            });

            setLoading(false);
            setQueryIsSubmited(true);
            setVacinasTomadas(vacinas);
            console.log(resultado.data.vacinas);
            console.log(vacinasTomadas);
        }
        catch (error) {
            toast.error("Erro ao buscar vacinas tomadas por cpf: " + error);
        }

    }

    const exportToPdf = () => {
        var doc = new jsPDF('p', 'pt');
        doc.setFontSize(22);
        doc.setFont('montserrat','bold');
        doc.text("Registro de Vacinas", 200, 40);
        doc.setFontSize(12);
        doc.setFont('montserrat','normal');
        doc.text("Paciente: Thiago González", 40, 70);
        var elem = document.getElementById("consult-vaccines-table");
        var res = doc.autoTableHtmlToJson(elem);
        doc.autoTable(res.columns, res.data, {
            margin: { top: 80}
        });
        doc.setFontSize(8);
        doc.text("© BDVacinas", 275, 800);
        doc.save("dados-vacinais.pdf");
    }

    return (
        <div className="App">
            <NavbarComponent />
            
            <div className="container">
                <div className="content consult-vaccines">
                    <h2 style={{textAlign: "center"}} className="text">Acessar registro de vacinas</h2>

                    <form className="consult-vaccines-form" onSubmit={handleSubmitQuery}>
                        <label className="text">CPF:</label>
                        <FormGroup className="form-group">
                            <input type="text" placeholder="" value={cpf} onChange={ (e) => setCpf(e.target.value)} />
                            <button type="submit" className="btn btn-primary">Buscar</button>
                        </FormGroup>
                    </form>

                    {loading &&
                        <p className="text">Carregando dados...</p>
                    }

                   {!loading && queryIsSubmited && vacinasTomadas.length > 0 &&
                        <div className="table-btn-group">
                            <table id="consult-vaccines-table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text">ID</th>
                                        <th scope="col" className="text">NOME DA VACINA</th>
                                        <th scope="col" className="text">DOSE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vacinasTomadas.map((vacinaTomada) => {
                                        <tr>
                                            <td data-label="ID">{vacinaTomada.vacina.id}</td>
                                            <td data-label="NOME DA VACINA">{vacinaTomada.vacina.nome}</td>
                                            <td data-label="DOSE">{vacinaTomada.dose.nome}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>

                            <button className="btn btn-primary generate-pdf-btn" onClick={exportToPdf}>Gerar PDF</button>
                        </div>
                   }

                   {!loading && queryIsSubmited && vacinasTomadas.length === 0 &&
                        <div>
                            <p className="text">Não foram encontradas vacinas tomadas pelo usuário</p>
                        </div>
                   }
                </div>
            </div>

        </div>
    );
}