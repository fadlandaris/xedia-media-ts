import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

const App: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes> 
    </main>
  )
}

export default App