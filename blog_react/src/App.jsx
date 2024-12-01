import { useState } from 'react'
import { Inicio } from './components/pages/inicio'
import { Route } from 'react-router-dom'
import { Rutas } from './routes/rutas'


function App() {
  
  return (
    <div>
      <h1>Blog con React</h1>

      <Rutas></Rutas>
    </div>
  )
}

export default App
