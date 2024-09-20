import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Components/Home"
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Edit";
import  "bootstrap/dist/css/bootstrap.min.css";


function App() {
  

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
        <Route path="/edit/:id" element={<Update />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
