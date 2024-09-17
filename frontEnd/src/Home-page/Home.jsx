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
        <></>
    )
}

export default Home