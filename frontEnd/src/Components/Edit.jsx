import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [values, setValues] = useState({
        nome: '',
        telefone: '',
        email: '',
    });

    useEffect(() => {  
        axios
          .get(`http://localhost:8081/read/${id}`)
          .then((res) => {
            console.log(res);
            if (res.data && res.data.length > 0) { 
                setValues({ 
                    nome: res.data[0].nome, 
                    telefone: res.data[0].telefone, 
                    email: res.data[0].email
                });
            } else {
              console.log("Usuário não encontrado");
            }
          })
          .catch((err) => console.log(err));
      }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault(); // CORREÇÃO: erro de digitação aqui
        axios.put(`http://localhost:8081/update/${id}`, values) // CORREÇÃO: rota PUT correta
        .then(res => {
            console.log(res);
            navigate("/"); // Redireciona para a página inicial após a atualização
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center"> {/* Correção em align-items-center */}
            <div className="w-50 h-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                    <h2>Edição de Usuário</h2>
                    <div className="mb-2">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            placeholder="Nome do Usuário"
                            className="form-control"
                            value={values.nome}
                            onChange={e => setValues({ ...values, nome: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="telefone">Telefone</label>
                        <input
                            type="text"
                            placeholder="Telefone"
                            className="form-control"
                            value={values.telefone}
                            onChange={e => setValues({ ...values, telefone: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            value={values.email}
                            onChange={e => setValues({ ...values, email: e.target.value })}
                        />
                    </div>
                    <Link to="/" className="btn btn-primary me-2">Voltar</Link>
                    <button className="btn btn-success mt-2 mb-2">Editar</button>
                </form>
            </div>
        </div>
    );
}

export default Update;
