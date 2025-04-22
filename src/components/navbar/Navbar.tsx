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
                    <Link to='/listarmotorista' className='hover:underline'>Motoristas</Link>
                    <Link to='/cadastrarmotorista' className='hover:underline'>Cadastrar Motorista</Link>
                </div>
                </div>
            </div>
    </>
    )
}

export default Navbar