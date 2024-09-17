import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home-page/Home"
import  "bootstrap/dist/css/bootstrap.min.css";


function App() {
  

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
