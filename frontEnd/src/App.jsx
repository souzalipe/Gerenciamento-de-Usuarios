import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home-page/Home"

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
