import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Veiculo from '../../../models/Veiculo';
import { buscar, deletar } from "../../../service/Service";
import { ToastAlerta } from "../../../ utils/ToastAlerta";

function DeletarVeiculos() {
  const [veiculos, setVeiculos] = useState<Veiculo>({} as Veiculo);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      buscar(`/veiculos/${id}`, setVeiculos);
    }
  }, [id]);

  const retornar = () => {
    navigate("/veiculos");
  };

  const deletarVeiculos = async () => {
    setIsLoading(true);
    try {
      await deletar(`/veiculos/${id}`);
      ToastAlerta("Veículo deletado com sucesso!", "sucesso");
      retornar();
    } catch (error) {
      ToastAlerta("Erro ao deletar seu veículo.", "erro");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container w-11/12 md:w-1/3 mx-auto mt-10">
      <h1 className="text-4xl text-center text-[#6F2473] font-bold mb-4">Deletar Veículo</h1>
      <p className="text-center font-medium text-[#4B2142] mb-4">
        Você tem certeza que deseja apagar seu veículo?
      </p>

      <div className="border border-[#EDEDED] rounded-2xl shadow-md bg-white overflow-hidden flex flex-col justify-between">
        <header className="py-2 px-6 bg-[#F4D8E4] text-[#6F2473] font-bold text-2xl text-center">
          Veículo
        </header>

        <p className="p-6 text-2xl text-center text-[#4B2142] bg-[#FFFFFF]">{veiculos.placa}</p>

        <div className="flex">
          <button
            className="w-1/2 py-2 bg-[#D72638] hover:bg-red-700 text-white font-semibold transition-all"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-1/2 py-2 bg-[#6F2473] hover:bg-[#4B2142] text-white font-semibold flex items-center justify-center transition-all"
            onClick={deletarVeiculos}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarVeiculos;