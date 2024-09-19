import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Read() {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/read/${id}`) // Corrigido o caminho
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, [id]); // Adicione id nas dependências

  return <div>Read</div>;
}

export default Read;
