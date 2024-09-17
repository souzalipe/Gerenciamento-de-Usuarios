import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Components/Home"
import Create from "./Components/Create";
import  "bootstrap/dist/css/bootstrap.min.css";


function App() {
  

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
