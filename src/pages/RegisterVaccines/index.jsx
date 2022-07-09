import { useState } from 'react';
import { NavbarComponent } from '../../components/Navbar';
import api from '../../services/Api';

export const RegisterVaccines = () => {

    const [vacina, setVacina] = useState({
        nome:"",
    });
    const [alertModal, setAlertModal] = useState({
        isFormSubmited: false,
        message:"",
    });

    const handleChange = (e) => {
        const data = {...vacina};
        data[e.target.id] = e.target.value;
        setVacina(data);
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
            await api.post('/vacinas',{
                nome:vacina.nome,
            })
            setAlertModal({
                isFormSubmited: true,
                message:"Formulário enviado!"
            });
            setVacina({
                nome:"",
            })
        } catch (error) {
            setAlertModal({
                isFormSubmited: true,
                message: error.message
            });
        }
    };  
    console.log(vacina)
    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content">
                    <h1 className="text">Cadastro de Vacina</h1>
                    <form className="row g-2 content" onSubmit={(e) => handleSubmit(e)}>
                        {alertModal.isFormSubmited && <h1>{alertModal.message}</h1>}
                        <div className="form-group d-flex justify-content-center align-items-center">
                            <div class="col-sm-8">
                                <label for="inputNomeVacina" class="form-label text">Nome da Vacina:*:</label>
                                <input onChange={(e) => handleChange(e)} type="text" class="input-form" id="nome" required placeholder="Digite o nome da vacina"/>
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