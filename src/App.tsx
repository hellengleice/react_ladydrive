import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import ListarViagens from './components/viagens/listarviagens/ListarViagens'
import FormViagem from './components/viagens/formviagem/FormViagem'
import DeletarViagens from './components/viagens/deletarviagens/DeletarViagens';
import FormVeiculo from './components/veiculo/formveiculo/FormVeiculo'
import DeletarVeiculos from './components/veiculo/deletarveiculos/DeletarVeiculos'
import ListarVeiculos from './components/veiculo/listarveiculos/ListarVeiculos'


function App() {
return (
    <>
        <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/viagens" element={<ListarViagens />} />
            <Route path="/cadastrarviagem" element={<FormViagem />} />
            <Route path="/editarviagens/:id" element={<FormViagem />} />
            <Route path="/deletarviagens/:id" element={<DeletarViagens/>} />

            <Route path="/veiculos" element={<ListarVeiculos />} />
            <Route path="/cadastrarveiculo" element={<FormVeiculo />} />
            <Route path="/editarveiculos/:id" element={<FormVeiculo />} />
            <Route path="/deletarveiculos/:id" element={<DeletarVeiculos/>} />
            </Routes>
        </div>
        <Footer />
        </BrowserRouter>
    </>
)
}

export default App