import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavbarComponent } from '../../components/Navbar';
import api from '../../services/Api';
import { toast } from 'react-toastify';


export const RegisterDose = () => {
    const [dose, setDose] = useState({
        vacinaId:0,
        nomeDose:""
    });
    const [vacinas, setVacinas] = useState([]);

    const [vacinaSelecionada, setVacinaSelecionada] = useState("");
    
    const handleChange = (e) => {
        const data = {...dose};
        data[e.target.id] = e.target.value;
        setDose(data);
        setVacinaSelecionada(vacinas[parseInt(dose.vacinaId)]);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onDataSubmit();
    };
    
    //Acompanhar envio do formulário
    const onDataSubmit = async () => {
        try {
            let resultado = await api.post('/doses',{
                vacinaId:parseInt(dose.vacinaId),
                nome:dose.nomeDose
            })

            switch (resultado.data.tipo.rotulo) {
                case "ok":
                    toast.success(`Cadastro da ${dose.nomeDose} da vacina ${vacinaSelecionada.nome} realizado com sucesso!`);
                break;
                case "erro":
                    toast.error(`Erro ao cadastrar dose: ${resultado.data.valor}`);
                break;
                default:
                    toast.error("Ooops, ocorreu um erro inesperado!");
                break;
            }
            
            setDose({
                nomeDose: "",
                vacinaId: "",
            })
        } catch (error) {
            toast.error("Ooops, erro ao cadastrar dose!");
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

    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content">
                    <h1 className="text">Cadastro de Doses</h1>
                    <form className="row g-2 content" onSubmit={(e) => handleSubmit(e)}>
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