import { useState } from 'react';
import { NavbarComponent } from '../../components/Navbar';
import api from '../../services/Api';
import { toast } from 'react-toastify';

export const RegisterVaccines = () => {

    const [vacina, setVacina] = useState({
        nome:"",
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
            
            let resultado = await api.post('/vacinas',{
                nome:vacina.nome,
            })
            
            switch (resultado.data.tipo.rotulo) {
                case "ok":
                    toast.success(`Cadastro da vacina ${vacina.nome} realizado com sucesso!`)
                    break;
                case "erro":
                    toast.error(`Erro ao cadastrar vacina: ${resultado.data.valor}`)
                    break;
                default:
                    toast.error("Ooops, ocorreu um erro inesperado ao cadastrar vacina!");
                    break;
            }

            setVacina({
                nome:"",
            })
        } catch (error) {
            toast.error("Ooops, erro ao cadastrar vacina!");
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
                        <div className="form-group d-flex justify-content-center align-items-center">
                            <div className="col-sm-8">
                                <label for="inputNomeVacina" className="form-label text">Nome da Vacina:*:</label>
                                <input onChange={(e) => handleChange(e)} type="text" className="input-form" id="nome" required placeholder="Digite o nome da vacina"/>
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