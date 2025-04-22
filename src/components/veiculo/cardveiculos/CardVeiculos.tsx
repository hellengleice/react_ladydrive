import { Link } from 'react-router-dom';
import Veiculo from '../../../models/Veiculo';

interface CardVeiculosProps {
  veiculo: Veiculo;
}

function CardVeiculos({ veiculo }: CardVeiculosProps) {
  return (
    <div className="border border-[#EDEDED] flex flex-col rounded-2xl overflow-hidden justify-between shadow-md bg-white">
      <header className="py-2 px-6 bg-[#F4D8E4] text-[#6F2473] font-bold text-2xl text-center">
        Veículo
      </header>

      <div className="p-6 text-[#4B2142] bg-[#FFFFFF]">
        <p className="text-xl font-semibold mb-2">{veiculo.modelo}</p>
        <p className="text-base">{veiculo.placa}</p>
      </div>

      <div className="flex">
        <Link
          to={`/editarveiculos/${veiculo.id}`}
          className="w-1/2 py-2 text-white bg-[#6F2473] hover:bg-[#4B2142] font-semibold text-center transition-all"
        >
          Editar
        </Link>

        <Link
          to={`/deletarveiculos/${veiculo.id}`}
          className="w-1/2 py-2 text-white bg-[#D72638] hover:bg-red-700 font-semibold text-center transition-all"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardVeiculos;