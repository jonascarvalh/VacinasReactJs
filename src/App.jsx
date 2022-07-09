import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './pages/About';
import { Routes, Route} from "react-router-dom";
import { RegisterPatients } from './pages/RegisterPatient';
import { VaccinatePatient } from './pages/VaccinatePatient';
import NotFound from './pages/NotFound';
import ConsultVaccines from './pages/ConsultVaccinesPatient';
import { ConsultPatient } from './pages/ConsultPatient';
import { RegisterVaccines } from './pages/RegisterVaccines';
import ConsultVaccinesPatient from './pages/ConsultVaccinesPatient';


function App() {
    return (
        <>
        <Routes>
            <Route exact path="/" element={<About />}/>
            <Route exact path="/acessar-vacinas" element={<VaccinatePatient />}/>

            <Route exact path="/cadastrar-pacientes" element={<RegisterPatients />}/>
            <Route exact path="/consultar-pacientes" element={<ConsultPatient />} />

            <Route exact path="/cadastrar-vacinas" element={<RegisterVaccines />} />
            <Route exact path="/consultar-vacinas" element={<ConsultVaccinesPatient />} />
            <Route exact path="/cadastrar-doses"></Route>

            <Route exact path="/vacinar-paciente"></Route>
            <Route exact path="/"></Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
        </>
    );
}

export default App;
