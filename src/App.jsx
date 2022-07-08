import './App.css';
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
    return (
        <>
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
