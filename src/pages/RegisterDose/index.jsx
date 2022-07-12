import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavbarComponent } from '../../components/Navbar';
import api from '../../services/Api';


export const RegisterDose = () => {
    const [dose, setDose] = useState({
        vacinaId:0,
        nomeDose:""
    });
    const [vacinas, setVacinas] = useState();
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
    
    //Acompanhar envio do formulário
    const onDataSubmit = async () => {
        try {
            setAlertModal({
                isFormSubmited: false,
                message:""
            });
            await api.post('/doses',{
                vacinaId:parseInt(dose.vacinaId),
                nome:dose.nomeDose
            })
            setAlertModal({
                isFormSubmited: true,
                message:"Formulário enviado!"
            });
            setDose({
                nomeDose: "",
                vacinaId: "",
            })
        } catch (error) {
            setAlertModal({
                isFormSubmited: true,
                message: error.message
            });
            setDose({
                nomeDose: "",
                vacinaId: "",
            })
        }
    };  

    //Receber vacinas existentes
    useEffect(() => {
        const getVacinas = async () => {
            try {
                const result = await api.get(`/vacinas`)
                const data = await result.data
                setVacinas(data)
            } catch (error) {
                console.error("Ocorreu um erro!" + error);
            }
        }
        getVacinas();
    }, []);

    console.log(dose)
    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content">
                    <h1 className="text">Cadastro de Doses</h1>
                    <form className="row g-2 content" onSubmit={(e) => handleSubmit(e)}>
                        {alertModal.isFormSubmited && <h1>{alertModal.message}</h1>}
                        <div className="form-group d-flex justify-content-center align-items-center">
                            <div className="col-sm-8">
                                <label htmlFor="vacinaId" className="form-label text">Nome da Vacina:*:</label>
                                <select value={dose.vacinaId} onChange={(e) => handleChange(e)} id="vacinaId" required className="form-select"  aria-label="Default select example">
                                    <option value="" defaultValue>Selecione uma vacina</option>
                                    {vacinas && vacinas.map((vacina) => (
                                        <option key={vacina.id} value={vacina.id}>{vacina.nome}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center align-items-center">
                            <div className="col-sm-8">
                                <label htmlFor="nomeDose" className="form-label text">Nome da Dose:*:</label>
                                <input onChange={(e) => handleChange(e)} value={dose.nomeDose} type="text" className="input-form" id="nomeDose" required placeholder="Digite o nome da dose"/>
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