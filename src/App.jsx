import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './pages/About';
import { Routes, Route} from "react-router-dom";
import { RegisterPatients } from './pages/RegisterPatient';
import { VaccinatePatient } from './pages/VaccinatePatient';
import NotFound from './pages/NotFound';
import { ConsultPatient } from './pages/ConsultPatient';
import { RegisterVaccines } from './pages/RegisterVaccines';
import ConsultVaccinesPatient from './pages/ConsultVaccinesPatient';
import { RegisterDose } from './pages/RegisterDose';
import { ConsultVaccines } from './pages/ConsultVaccines'


function App() {
    return (
        <>
        <Routes>
            <Route exact path="/" element={<About />}/>
            <Route exact path="/acessar-vacinas" element={<ConsultVaccinesPatient/>}/>

            <Route exact path="/cadastrar-pacientes" element={<RegisterPatients />}/>
            <Route exact path="/consultar-pacientes" element={<ConsultPatient />} />

            <Route exact path="/cadastrar-vacinas" element={<RegisterVaccines />} />
            <Route exact path="/consultar-vacinas" element={<ConsultVaccines />} />
            <Route exact path="/cadastrar-doses" element={<RegisterDose />}></Route>

            <Route exact path="/vacinar-paciente" element={<VaccinatePatient />}></Route>
            <Route exact path="/"></Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
        </>
    );
}

export default App;
