import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Viagem from '../../../models/Viagem';
import { buscar, deletar } from "../../../service/Service";

function DeletarViagens() {
  const [viagens, setViagens] = useState<Viagem>({} as Viagem);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      buscar(`/viagens/${id}`, setViagens);
    }
  }, [id]);

  const retornar = () => {
    navigate("/viagens");
  };

  const deletarViagens = async () => {
    setIsLoading(true);
    try {
      await deletar(`/viagens/${id}`);
      alert("Viagem deletada com sucesso!");
      retornar();
    } catch (error) {
      alert("Erro ao deletar sua viagem.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container w-11/12 md:w-1/3 mx-auto mt-10">
      <h1 className="text-4xl text-center text-[#6F2473] font-bold mb-4">Deletar Viagem</h1>
      <p className="text-center font-medium text-[#4B2142] mb-4">
        Você tem certeza que deseja apagar sua viagem?
      </p>

      <div className="border border-[#EDEDED] rounded-2xl shadow-md bg-white overflow-hidden flex flex-col justify-between">
        <header className="py-2 px-6 bg-[#F4D8E4] text-[#6F2473] font-bold text-2xl text-center">
          Viagem
        </header>

        <p className="p-6 text-2xl text-center text-[#4B2142] bg-[#FFFFFF]">{viagens.origem}</p>

        <div className="flex">
          <button
            className="w-1/2 py-2 bg-[#D72638] hover:bg-red-700 text-white font-semibold transition-all"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-1/2 py-2 bg-[#6F2473] hover:bg-[#4B2142] text-white font-semibold flex items-center justify-center transition-all"
            onClick={deletarViagens}
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

export default DeletarViagens;
