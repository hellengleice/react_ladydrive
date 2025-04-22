
import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import Viagem from "../../../models/Viagem";

function FormViagem() {

    const navigate = useNavigate();

    const [viagem, setViagem] = useState<Viagem>({} as Viagem);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/viagens/${id}`, setViagem, {
                headers: { Authorization: '' } // Token não necessário agora
            });
        } catch (error: any) {
            alert('Erro ao buscar a sua viagem.');
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setViagem({
            ...viagem,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/viagens");
    }

    async function gerarNovaViagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/viagens`, viagem, setViagem, {
                });
                alert('A viagem foi atualizada com sucesso!');
            } catch (error: any) {
                alert('Erro ao atualizar a viagem.');
            }
        } else {
            try {
                await cadastrar(`/viagens`, viagem, setViagem, {
                });
                alert('A viagem foi cadastrada com sucesso!');
            } catch (error: any) {
                alert('Erro ao cadastrar a viagem.');
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8 text-green-600 font-bold">
                {id === undefined ? 'Cadastrar Viagem' : 'Editar Viagem'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaViagem}>
                <div className="flex flex-col gap-2">
                <label htmlFor="origem" className="text-slate-800 font-semibold">
                        Origem da Viagem
                    </label>
                    <input
                        type="text"
                        placeholder="Digite sua origem"
                        name="origem"
                        className="border-2 border-green-300 rounded p-2 focus:outline-green-400"
                        value={viagem.origem}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="destino" className="text-slate-800 font-semibold">
                        Destino da Viagem
                    </label>
                    <input
                        type="text"
                        placeholder="Qual é seu destino"
                        name="destino"
                        className="border-2 border-green-300 rounded p-2 focus:outline-green-400"
                        value={viagem.destino}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-white bg-green-300 
                            hover:bg-green-400 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
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
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormViagem;
