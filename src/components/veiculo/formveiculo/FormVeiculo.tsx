import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import Veiculo from "../../../models/Veiculo";

function FormVeiculo() {
  const navigate = useNavigate();

  const [veiculo, setVeiculo] = useState<Veiculo>({} as Veiculo);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/veiculos/${id}`, setVeiculo, {
        headers: { Authorization: "" },
      });
    } catch (error: any) {
      alert("Erro ao buscar o seu veículo.");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setVeiculo({
      ...veiculo,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/veiculos");
  }

  async function gerarNovoVeiculo(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizar(`/veiculos`, veiculo, setVeiculo, {});
        alert("O veículo foi atualizado com sucesso!");
      } else {
        await cadastrar(`/veiculos`, veiculo, setVeiculo, {});
        alert("O veículo foi cadastrado com sucesso!");
      }
    } catch (error: any) {
      alert("Erro ao salvar o veículo.");
    } finally {
      setIsLoading(false);
      retornar();
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto mt-10">
      <h1 className="text-4xl text-center mb-8 text-[#6F2473] font-bold">
        {id === undefined ? "Cadastrar Veículo" : "Editar Veículo"}
      </h1>

      <form
        className="w-11/12 md:w-1/2 flex flex-col gap-6 bg-white border border-[#EDEDED] rounded-2xl p-6 shadow-md"
        onSubmit={gerarNovoVeiculo}
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="placa" className="text-[#4B2142] font-semibold">
            Placa do veículo 
          </label>
          <input
            type="text"
            placeholder="Digite a placa do veículo"
            name="placa"
            className="border-2 border-[#B57EDC] rounded p-2 focus:outline-[#6F2473]"
            value={veiculo.placa}
            onChange={atualizarEstado}
          />

          <label htmlFor="modelo" className="text-[#4B2142] font-semibold">
            Modelo do Veículo
          </label>
          <input
            type="text"
            placeholder="Qual é o modelo do veículo"
            name="modelo"
            className="border-2 border-[#B57EDC] rounded p-2 focus:outline-[#6F2473]"
            value={veiculo.modelo}
            onChange={atualizarEstado}
          />

        <label htmlFor="cor" className="text-[#4B2142] font-semibold">
            Cor do Veículo
          </label>
          <input
            type="text"
            placeholder="Qual é a cor do veículo"
            name="cor"
            className="border-2 border-[#B57EDC] rounded p-2 focus:outline-[#6F2473]"
            value={veiculo.cor}
            onChange={atualizarEstado}
          />

          <label htmlFor="motorista" className="text-[#4B2142] font-semibold">
            Motorista do Veículo
          </label>
          <input
            type="text"
            placeholder="Nome do motorista do veículo"
            name="motorista"
            className="border-2 border-[#B57EDC] rounded p-2 focus:outline-[#6F2473]"
            value={veiculo.motorista}
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

export default FormVeiculo;