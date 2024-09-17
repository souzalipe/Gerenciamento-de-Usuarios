import React, { useEffect, useState } from "react";
import axios from 'axios'
 
function Home() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center aling-itens-center">
            <div className="w-50 bg-white rounded p-3">
                <h2>Users List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id_user</th>
                            <th>nome</th>
                            <th>telefone</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((users,index) =>{
                            return <tr key={index}>
                                <td>{users.id_user}</td>
                                <td>{users.nome}</td>
                                <td>{users.telefone}</td>
                                <td>{users.email}</td>
                                <td>
                                    <button className="btn btn-sm btn-info">Ver</button>
                                    <button className="btn btn-sm btn-primary mx-2">Editar</button>
                                    <button className="btn btn-sm btn-danger">Deletar</button>
                                </td>
                            </tr>
                        } )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home