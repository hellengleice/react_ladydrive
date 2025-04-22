import { Link } from 'react-router-dom';
import Viagem from '../../../models/Viagem';


interface CardViagensProps {
    viagem: Viagem;
}

function CardViagens({ viagem }: CardViagensProps) {
    return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg'>
        <header className='py-2 px-6 bg-pink-300 text-[#6F2473] font-bold text-2xl'>
        Viagem
        </header>

    <div className='p-6 bg-white text-[#3C3C3C]'>
        <p className='text-xl font-semibold mb-2'>{viagem.origem}</p>
        <p className='text-base'>{viagem.destino}</p>
    </div>

    <div className="flex">
        <Link to={`/editarviagens/${viagem.id}`}
        className='w-full text-white bg-green-300 hover:bg-green-400
        flex items-center justify-center py-2'>`
        <button className="w-full bg-transparent border-none text-white">
            Editar
        </button>
        </Link>
        <Link to={`/deletarviagens/${viagem.id}`} 
        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full 
        flex items-center justify-center'>
        <button>Deletar</button>
        </Link>
        </div>
    </div>
    );
}

export default CardViagens;
