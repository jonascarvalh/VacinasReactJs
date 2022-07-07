import { useState } from "react";
import { NavbarComponent } from "../../components/Navbar";

import './consultvaccines.css';

export default function ConsultVaccines() {
    const [cpf, setCpf] = useState('');

    return (
        <div className="App">
            <NavbarComponent />
            
            <div className="container">
                <div className="content consult-vaccines">
                    <h1 className="text">Vacinas Tomadas</h1>

                    <form>
                        <label className="text">CPF:</label>
                        <input type="text" placeholder="" value={cpf} onChange={ (e) => setCpf(e.target.value)} />
                    </form>
                </div>
            </div>

        </div>
    );
}