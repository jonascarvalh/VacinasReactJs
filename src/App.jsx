import React, { useEffect, useState } from 'react';
import './App.css';
import api from './services/Api'
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './pages/About';
import { Routes, Route} from "react-router-dom";
import { RegisterPatient } from './pages/RegisterPatient';
import { VaccinatePatient } from './pages/VaccinatePatient';
import NotFound from './pages/NotFound';
import ConsultVaccines from './pages/ConsultVaccines';
import { ConsultPatient } from './pages/ConsultPatient';
import { RegisterVaccines } from './pages/RegisterVaccines';


function App() {
    // API with axios
    const [status, setStatus] = useState("");
    const [cep, setCep] = useState("");

    const handleCep = () => {
        setStatus(cep);
    }

    useEffect(() => {
        api
            .get(`/ws/${status}/json/`)
            .then((response) => console.log(response.data))
            .catch((err) => {
                console.error("Ocorreu um erro!" + err);
            });
            // {status?.cep}
    }, [status]);
    return (
        <>
        {/* <About/>
        <input type="text" onChange={(e) => setCep(e.target.value)}/>
        <button onClick={handleCep}>Aqui!</button> */}
        <Routes>
            <Route exact path="/" element={<About />}/>
            <Route exact path="/cadastrar-pacientes" element={<RegisterPatient />}/>
            <Route exact path="/consultar-pacientes" element={<ConsultPatient />} />

            <Route exact path="/vacinar-pacientes" element={<VaccinatePatient />}/>
            <Route exact path="/consultar-vacinas" element={<ConsultVaccines />} />
            <Route exact path="/cadastrar-vacinas" element={<RegisterVaccines />} />

            <Route path='*' element={<NotFound />} />
        </Routes>
        </>
    );
}

export default App;
