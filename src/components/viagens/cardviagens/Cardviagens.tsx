import { Link } from 'react-router-dom';
import Viagem from '../../../models/Viagem';

interface CardViagensProps {
  viagem: Viagem;
}

function CardViagens({ viagem }: CardViagensProps) {
  return (
    <div className="border border-[#EDEDED] flex flex-col rounded-2xl overflow-hidden justify-between shadow-md bg-white">
    <header className="py-2 px-6 bg-[#F4D8E4] text-[#6F2473] font-bold text-2xl text-center">
        Viagem
    </header>

    <div className="p-6 text-[#4B2142] bg-[#FFFFFF]">
        <p className="text-xl font-semibold mb-2">{viagem.origem}</p>
        <p className="text-base">{viagem.destino}</p>
      </div>

      <div className="flex">
        <Link
          to={`/editarviagens/${viagem.id}`}
          className="w-1/2 py-2 text-white bg-[#6F2473] hover:bg-[#4B2142] font-semibold text-center transition-all"
        >
          Editar
        </Link>

        <Link
          to={`/deletarviagens/${viagem.id}`}
          className="w-1/2 py-2 text-white bg-[#D72638] hover:bg-red-700 font-semibold text-center transition-all"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardViagens;