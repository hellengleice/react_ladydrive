FormViagem

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
        headers: { Authorization: "" },
      });
    } catch (error: any) {
      alert("Erro ao buscar a sua viagem.");
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
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/viagens");
  }

  async function gerarNovaViagem(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizar(`/viagens`, viagem, setViagem, {});
        alert("A viagem foi atualizada com sucesso!");
      } else {
        await cadastrar(`/viagens`, viagem, setViagem, {});
        alert("A viagem foi cadastrada com sucesso!");
      }
    } catch (error: any) {
      alert("Erro ao salvar a viagem.");
    } finally {
      setIsLoading(false);
      retornar();
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto mt-10">
      <h1 className="text-4xl text-center mb-8 text-[#6F2473] font-bold">
        {id === undefined ? "Cadastrar Viagem" : "Editar Viagem"}
      </h1>

      <form
        className="w-11/12 md:w-1/2 flex flex-col gap-6 bg-white border border-[#EDEDED] rounded-2xl p-6 shadow-md"
        onSubmit={gerarNovaViagem}
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="origem" className="text-[#4B2142] font-semibold">
            Origem da Viagem
          </label>
          <input
            type="text"
            placeholder="Digite sua origem"
            name="origem"
            className="border-2 border-[#B57EDC] rounded p-2 focus:outline-[#6F2473]"
            value={viagem.origem}
            onChange={atualizarEstado}
          />

          <label htmlFor="destino" className="text-[#4B2142] font-semibold">
            Destino da Viagem
          </label>
          <input
            type="text"
            placeholder="Qual é seu destino"
            name="destino"
            className="border-2 border-[#B57EDC] rounded p-2 focus:outline-[#6F2473]"
            value={viagem.destino}
            onChange={atualizarEstado}
          />
        </div>

        <button
          className="rounded text-white bg-[#6F2473] hover:bg-[#4B2142] w-1/2 py-2 mx-auto flex justify-center transition-all"
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
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormViagem;