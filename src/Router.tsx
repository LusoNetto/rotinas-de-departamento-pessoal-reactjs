import { Routes, Route } from 'react-router-dom'
import { CadastroColaborador } from './pages/CadastroColaborador'
import { CadastroUsuario } from './pages/CadastroUsuario'
import { CalculoDeFolhaDePgto } from './pages/CalculoDeFolhaDePgto'
import { Content } from './pages/Content'
import { CalculoDeFerias } from './pages/CalculoDeFerias'
import { CalculoDe13oSalario } from './pages/CalculoDe13oSalario'

export function Router() {
    return(
        <Routes>
            <Route path='/' element={<Content/>}/>
            <Route path='/cadastroUsuario' element={<CadastroUsuario/>}/>
            <Route path='/cadastroColaborador' element={<CadastroColaborador/>}/>            
            <Route path='/CalculoDeFolhaDePgto' element={<CalculoDeFolhaDePgto/>}/>
            <Route path='/CalculoDeFerias' element={<CalculoDeFerias/>}/>
            <Route path='/CalculoDe13oSalario' element={<CalculoDe13oSalario/>}/>
        </Routes>
    )
}