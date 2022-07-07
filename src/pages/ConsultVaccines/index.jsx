import { useState } from "react";
import { FormGroup } from "react-bootstrap";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

import { NavbarComponent } from "../../components/Navbar";

import './consultvaccines.css';

export default function ConsultVaccines() {
    const [cpf, setCpf] = useState('');
    const [queryIsSubmited, setQueryIsSubmited] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmitQuery = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            setQueryIsSubmited(true);
        }, 3000);
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

                   {queryIsSubmited && 
                        <div className="table-btn-group">
                            <table id="consult-vaccines-table">
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

                            <button className="btn btn-primary generate-pdf-btn" onClick={exportToPdf}>Gerar PDF</button>
                        </div>
                   }
                </div>
            </div>

        </div>
    );
}