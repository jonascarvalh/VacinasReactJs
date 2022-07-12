import { useState } from 'react';
import { NavbarComponent } from '../../components/Navbar';
import api from '../../services/Api';
import { toast } from 'react-toastify';

export const RegisterPatients = () => {

    const [patient, setPatient] = useState({
        nome:"",
        cpf:"",
        cep:"",
        numero: "",
        complemento:"",
    });

    const handleChange = (e) => {
        const data = {...patient};
        data[e.target.id] = e.target.value;
        setPatient(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onDataSubmit();
    };

    const onDataSubmit = async () => {
        try {
            let resultado = await api.post('/vacinados',{
                nome:patient.nome,
                cpf:patient.cpf,
                cep:patient.cep,
                numero:parseInt(patient.numero),
                complemento:patient.complemento
            })
            
            switch (resultado.data.tipo.rotulo) {
                case "ok":
                    toast.success(`Cadastro do paciente ${patient.nome} realizado com sucesso!`)
                    break;
                case "erro":
                    toast.error(`Erro ao cadastrar paciente: ${resultado.data.valor}`)
                    break;
                default:
                    toast.error("Ooops, ocorreu um erro inesperado ao cadastrar paciente!");
                    break;
            }

            setPatient({
                nome:"",
                cpf:"",
                cep:"",
                numero: "",
                complemento:"",
            })
        } catch (error) {
            toast.error("Ooops, erro ao cadastrar paciente: " + error);
        }
    };  
    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content">
                    <h1 className="text">Cadastro de Paciente</h1>
                    <form className="row g-2 content" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-sm-8">
                                <label for="inputNome" className="form-label text">Nome*:</label>
                                <input onChange={(e) => handleChange(e)} type="text" className="input-form" id="nome" value={patient.nome} required placeholder="Digite seu nome"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-sm-8">
                                <label for="inputCPF" className="form-label text">CPF*:</label>
                                <input onChange={(e) => handleChange(e)} type="text" className="input-form" id="cpf" value={patient.cpf} required placeholder="Digite seu CPF"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-sm-8">
                                <label for="inputCEP" className="form-label text">CEP*:</label>
                                <input onChange={(e) => handleChange(e)} type="text" className="input-form" id="cep" value={patient.cep} required placeholder="Digite seu CEP"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-sm-8">
                                <label for="inputNumero" className="form-label text">Numero:</label>
                                <input onChange={(e) => handleChange(e)} type="number" className="input-form" id="numero" value={patient.numero} placeholder="Digite o numero"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-sm-8">
                                <label for="inputComplemento" className="form-label text">Complemento:</label>
                                <input onChange={(e) => handleChange(e)} type="text" className="input-form" id="complemento" value={patient.complemento} placeholder="Digite o complemento"/>
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