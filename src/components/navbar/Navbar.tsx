import { Link } from "react-router-dom"
function Navbar() {
    return (
    <>
            <div className="flex justify-center bg-[#4B2142] text-white font-serif p-5">
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Ladydriver</Link>

                <div className='flex gap-4'>
                    <Link to='/viagens' className='hover:underline'>Viagens</Link>
                    <Link to='/cadastrarviagem' className='hover:underline'>Cadastrar Viagem</Link>
                    <Link to='/listarveiculos' className='hover:underline'>Veiculos</Link>
                    <Link to='/cadastrarveiculo' className='hover:underline'>Cadastrar Veiculo</Link>
                    <Link to='/cadastrar' className='hover:underline'>Cadastrar Usuario</Link>
                </div>
                </div>
            </div>
    </>
    )
}

export default Navbar