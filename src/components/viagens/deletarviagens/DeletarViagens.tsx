
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
    buscar(`/viagens/${id}`, setViagens,);
    }
}, [id]);

const retornar = () => {
    navigate("/viagens");
};

const deletarViagens = async () => {
    setIsLoading(true);
    try {
    await deletar(`/viagens/${id}` );
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
    <div className="container w-1/3 mx-auto">
    <h1 className="text-4xl text-center my-4">Deletar Viagem</h1>
    <p className="text-center font-semibold mb-4">
        Você tem certeza que deseja apagar sua viagem?
    </p>
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
        Viagem
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full">{viagens.origem}</p>

        <div className="flex">
        <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
        >
            Não
        </button>
        <button
            className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 
            flex items-center justify-center"
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