import { FormGroup } from "react-bootstrap";
import { NavbarComponent } from "../../components/Navbar";
import React, { useEffect, useState } from 'react';
import api from '../../services/Api.js'
import "./managervaccines.css"

export const RegisterVaccines = () => {
    const handleSubmitQuery = () => {

    }
    return (
        <div className="App">
            <NavbarComponent/>
            <div className="container">
                <div className="content">
                    <h1 class="text">Cadastrar Vacina</h1>
                </div>
            </div>
        </div>
    )
}