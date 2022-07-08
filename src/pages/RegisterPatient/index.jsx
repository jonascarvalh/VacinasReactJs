import { useState } from 'react';
import { NavbarComponent } from '../../components/Navbar';
import api from '../../services/Api';

export const RegisterPatient = () => {

    const [paciente, setPaciente] = useState({
        nome:"",
        cpf:"",
        cep:"",
        numero: "",
        complemento:"",
    });

    const handleChange = (e) => {
        const data = {...paciente};
        data[e.target.id] = e.target.value;
        setPaciente(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onDataSubmit();
    };

    const onDataSubmit = async () => {
        await api.post('/vacinados',{
            nome:paciente.nome,
            cpf:paciente.cpf,
            cep:paciente.cep,
            numero:parseInt(paciente.numero),
            complemento:paciente.complemento
        }).then((response) => console.log(response))
        .catch((response) => console.log(response))
    };
    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content">
                    <h1 className="text">Cadastro de Paciente</h1>
                    <form className="row g-2 content" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputNome" class="form-label text">Nome*:</label>
                                <input onChange={(e) => handleChange(e)} type="text" class="input-form" id="nome" required placeholder="Digite seu nome"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputCPF" class="form-label text">CPF*:</label>
                                <input onChange={(e) => handleChange(e)} type="text" class="input-form" id="cpf" required placeholder="Digite seu CPF"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputCEP" class="form-label text">CEP*:</label>
                                <input onChange={(e) => handleChange(e)} type="text" class="input-form" id="cep" required placeholder="Digite seu CEP"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputNumero" class="form-label text">Numero:</label>
                                <input onChange={(e) => handleChange(e)} type="number" class="input-form" id="numero" placeholder="Digite o numero"/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div class="col-sm-8">
                                <label for="inputComplemento" class="form-label text">Complemento:</label>
                                <input onChange={(e) => handleChange(e)} type="text" class="input-form" id="complemento" placeholder="Digite o complemento"/>
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