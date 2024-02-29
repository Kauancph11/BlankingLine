import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TelaInicial from './pages/Tela_Inicial/TelaInicial'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<TelaInicial />}/>
    </Routes>
  </BrowserRouter>
  )
 
}

export default App
