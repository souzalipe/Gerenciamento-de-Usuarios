import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; 

function Read() {
  const { id } = useParams(); 
  const [users, setUsers] = useState([]); 

  useEffect(() => {  
    axios
      .get(`http://localhost:8081/read/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data && res.data.length > 0) { 
          setUsers(res.data); 
        } else {
          console.log("Usuário não encontrado");
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  
  if (users.length === 0) {
    return <div>Carregando...</div>; 
  }


  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        {/* <div className="p-2"></div> */}
        <h2>Detalhes do Usuário</h2>
        <h2>ID: {users[0].id_user}</h2>
        <h2>Nome: {users[0].nome}</h2>
        <h2>Telefone: {users[0].telefone}</h2>
        <h2>Email: {users[0].email}</h2>
        <Link to="/" className="btn btn-primary me-2">Voltar</Link>
        
      </div>
    </div>
  );
}

export default Read;
