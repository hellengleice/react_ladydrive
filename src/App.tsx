import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import ListarViagens from './components/viagens/listarviagens/ListarViagens'
import FormViagem from './components/viagens/formviagem/FormViagem'
import DeletarViagens from './components/viagens/deletarviagens/DeletarViagens';

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
            </Routes>
        </div>
        <Footer />
        </BrowserRouter>
    </>
)
}

export default App