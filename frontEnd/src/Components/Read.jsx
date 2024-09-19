import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Certifique-se de que 'Link' é importado

function Read() {
  const { id } = useParams(); // Captura o 'id' da URL
  const [users, setUsers] = useState([]); // Inicializa o estado com um array vazio

  useEffect(() => {
    // Faz a requisição GET para buscar os dados do usuário
    axios
      .get(`http://localhost:8081/read/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data && res.data.length > 0) { // Verifica se res.data não está vazio
          setUsers(res.data); // Atualiza o estado com os dados recebidos
        } else {
          console.log("Usuário não encontrado");
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Verifica se o array 'users' tem dados antes de tentar renderizar
  if (users.length === 0) {
    return <div>Carregando...</div>; // Exibe "Carregando..." enquanto os dados não chegam
  }

  // Renderiza os dados do usuário
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Detalhes do Usuário</h2>
        <h2>ID: {users[0].id_user}</h2>
        <h2>Nome: {users[0].nome}</h2>
        <h2>Telefone: {users[0].telefone}</h2>
        <h2>Email: {users[0].email}</h2>
        <Link to="/" className="btn btn-primary">Voltar</Link>
        <button className="btn btn-primary">Editar</button>
      </div>
    </div>
  );
}

export default Read;
