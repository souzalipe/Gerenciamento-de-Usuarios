import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create(){
    const [values, setValues] = useState({
        nome: '',
        telefone: '',
        email: '',
    }) 
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8081/user', values)
        .then(res => {
            console.log(res);
            navigate("/")
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center aling-items-center">
            <div className="w-50 h-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit} >
                    <h2>Novo Usuário</h2>
                    <div className="mb-2">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Nome do Usuário" className="form-control" 
                        onChange={e => setValues({...values, nome: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="">Telefone</label>
                        <input type="text" placeholder="Telefone" className="form-control" 
                        onChange={e => setValues({...values, telefone: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email" className="form-control" 
                        onChange={e => setValues({...values, email: e.target.value})}/>
                    </div>
                    <button className="btn btn-success mt-2 mb-2">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Create