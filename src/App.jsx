import React, { useEffect, useState } from 'react';
import './App.css';
import api from './services/Api'
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './pages/About';
import { Routes, Route} from "react-router-dom";
import { RegisterPatient } from './pages/RegisterPatient';
import { VaccinatePatient } from './pages/VaccinatePatient';


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
            <Route path="/" element={<About/>}/>
            <Route path="/registrar-pacientes" element={<RegisterPatient/>}/>
            <Route path="/vacinar-pacientes" element={<VaccinatePatient/>}/>
        </Routes>
        </>
    );
}

export default App;
