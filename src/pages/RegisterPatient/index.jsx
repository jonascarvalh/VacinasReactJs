import { useState } from 'react';
import { NavbarComponent } from '../../components/Navbar';
import api from '../../services/Api';

export const RegisterPatients = () => {

    const [patient, setPatient] = useState({
        nome:"",
        cpf:"",
        cep:"",
        numero: "",
        complemento:"",
    });
    const [alertModal, setAlertModal] = useState({
        isFormSubmited: false,
        message:"",
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
            setAlertModal({
                isFormSubmited: false,
                message:""
            });
            await api.post('/vacinados',{
                nome:patient.nome,
                cpf:patient.cpf,
                cep:patient.cep,
                numero:parseInt(patient.numero),
                complemento:patient.complemento
            })
            setAlertModal({
                isFormSubmited: true,
                message:"Formulário enviado!"
            });
            setPatient({
                nome:"",
                cpf:"",
                cep:"",
                numero: "",
                complemento:"",
            })
        } catch (error) {
            setAlertModal({
                isFormSubmited: true,
                message: error.message
            });
        }
    };  
    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content">
                    <h1 className="text">Cadastro de Paciente</h1>
                    <form className="row g-2 content" onSubmit={(e) => handleSubmit(e)}>
                        {alertModal.isFormSubmited && <h1>{alertModal.message}</h1>}
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputNome" class="form-label text">Nome*:</label>
                                <input onChange={(e) => handleChange(e)} type="text" class="input-form" id="nome" value={patient.nome} required placeholder="Digite seu nome"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputCPF" class="form-label text">CPF*:</label>
                                <input onChange={(e) => handleChange(e)} type="text" class="input-form" id="cpf" value={patient.cpf} required placeholder="Digite seu CPF"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputCEP" class="form-label text">CEP*:</label>
                                <input onChange={(e) => handleChange(e)} type="text" class="input-form" id="cep" value={patient.cep} required placeholder="Digite seu CEP"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputNumero" class="form-label text">Numero:</label>
                                <input onChange={(e) => handleChange(e)} type="number" class="input-form" id="numero" value={patient.numero} placeholder="Digite o numero"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputComplemento" class="form-label text">Complemento:</label>
                                <input onChange={(e) => handleChange(e)} type="text" class="input-form" id="complemento" value={patient.complemento} placeholder="Digite o complemento"/>
                            </div>
                        </div>
                        <div class="col-md-6 col-md-offset-3 text-center mt-4 mb-3">
                            <button type="submit" class="btn btn-light">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}