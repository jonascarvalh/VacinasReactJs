import { useState } from 'react';
import { NavbarComponent } from '../../components/Navbar';
import api from '../../services/Api';

export const RegisterDose = () => {

    const [dose, setDose] = useState({
        nome:"",
    });
    const [alertModal, setAlertModal] = useState({
        isFormSubmited: false,
        message:"",
    });

    const handleChange = (e) => {
        const data = {...dose};
        data[e.target.id] = e.target.value;
        setDose(data);
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
                nome:dose.nome,
            })
            setAlertModal({
                isFormSubmited: true,
                message:"Formulário enviado!"
            });
            setDose({
                nome:"",
            })
        } catch (error) {
            setAlertModal({
                isFormSubmited: true,
                message: error.message
            });
        }
    };  
    console.log(dose)
    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content">
                    <h1 className="text">Cadastro de Doses(em standby)</h1>
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